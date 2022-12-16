import { ICreatePhilosopher } from "../domain/model/ICreatePhilosopher";
import { ICreatePhilosopherImage } from "../domain/model/ICreatePhilosopherImage";
import { IPhilosopher } from "../domain/model/IPhilosopher";
import { IPhilosopherService } from "../domain/services/IPhilosopherService";
import { Philosopher } from "../entities/Philosopher";
import { BadRequestError, NotFoundError } from "../exceptions/api-error";
import { philosopherRepository } from "../repositories/PhilosopherRepository";
import S3Storage from "../utils/S3Storage";
import FlagUrlGenerator from "../utils/flagurl_generator";

class PhilosopherService implements IPhilosopherService {


    public async list():Promise<IPhilosopher[]> {
        const philosophers = await philosopherRepository.find({});
        return philosophers;
    }

    public async show(id:string): Promise<IPhilosopher> {
        const philosopher = await philosopherRepository.findOneBy({ id: Number(id) });
        
        if (!philosopher) {
            throw new NotFoundError("No philosopher found with this id");
        }
        
        return philosopher;
    }


    public async create({
        name,
        birthDate,
        country,
        typePhilosophy }:
        ICreatePhilosopher):
        Promise<Philosopher | undefined> {
        
            let flag = new FlagUrlGenerator().generate_flag_url(country);
            console.log(flag);
    
        const philosopher = philosopherRepository.create({
            name,
            birthDate,
            country,
            typePhilosophy,
            flag
        })

        await philosopherRepository.save(philosopher);

        return philosopher;
        
    }

    public async updateImage( id:string, file:Express.Multer.File): Promise<IPhilosopher> {
        const philosopherExists = await philosopherRepository.findOneBy({ id:Number(id) });

        if (!philosopherExists) {
            throw new BadRequestError("Philosopher don't exists!");
        }

        if (philosopherExists.image === '' || philosopherExists.image === ' ' || philosopherExists.image === null) {

            const s3Storage = new S3Storage();

            let url = await s3Storage.saveFile(file?.filename);

            await philosopherRepository.update({ id: Number(id) }, {image: url});

            const philosopher = await philosopherRepository.findOneBy({ id: Number(id) });
        
            return philosopher!;

        } else {

            let result = await this.deleteImage(String(philosopherExists.id));

            if (!result) {
                throw new Error("Failed on Updated an already existing image!");
            }

            const s3Storage = new S3Storage();
   
            let url = await s3Storage.saveFile(file?.filename);

            await philosopherRepository.update({ id: Number(id) }, {image: url});

            const philosopher = await philosopherRepository.findOneBy({ id: Number(id) });
        
            return philosopher!;


        }


        
    }

    public async deleteImage(id: string): Promise<Boolean> {
        const philosopher = await philosopherRepository.findOneBy({ id: Number(id) });
        
        if (!philosopher) {
            throw new BadRequestError("Philosopher not found with this id!");
        }

        let urlArr = philosopher.image.split("/")
        const url = urlArr[urlArr.length - 1]
        console.log(url);
        const s3Storage = new S3Storage();

        let isDeleted = await s3Storage.deleteFile(url);
  
        if (!isDeleted) {
            throw new Error("Could not delete the image!")
        }

        philosopher.image = '';


        const philosopherUpdated = philosopherRepository.create(philosopher);

        await philosopherRepository.save(philosopherUpdated);

        return true;

    }

    public async deletePhilosopher(id: string):Promise<Boolean> {
        const philosopher = await philosopherRepository.findOneBy({ id: Number(id) });

        if (!philosopher) {
            throw new NotFoundError("Not philosopher found with this id!");
        }

        await philosopherRepository.delete({ id: Number(id) });

        return true;
    }
    
}

export default new PhilosopherService();