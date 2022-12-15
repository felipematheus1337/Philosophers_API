import { ICreatePhilosopher } from "../domain/model/ICreatePhilosopher";
import { ICreatePhilosopherImage } from "../domain/model/ICreatePhilosopherImage";
import { IPhilosopherService } from "../domain/services/IPhilosopherService";
import { Philosopher } from "../entities/Philosopher";
import { philosopherRepository } from "../repositories/PhilosopherRepository";

class PhilosopherService implements IPhilosopherService {
    
    public async create({
        name,
        birthDate,
        image,
        country,
        typePhilosophy }:
        ICreatePhilosopher):
        Promise<Philosopher | undefined> {
        const philosopher = philosopherRepository.create({
            name,
            birthDate,
            image,
            country,
            typePhilosophy
        })

        await philosopherRepository.save(philosopher);

        return philosopher;
        
    }

    public async updateImage({id , imageUrl }: ICreatePhilosopherImage): Promise<string | null> {
        throw new Error("Method not implemented.");
    }
    
}

export default new PhilosopherService();