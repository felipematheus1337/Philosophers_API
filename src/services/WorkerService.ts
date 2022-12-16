import { ICreatePhilosopher } from "../domain/model/ICreatePhilosopher";
import { ICreateWork } from "../domain/model/ICreateWork";
import { IWork } from "../domain/model/IWork";
import { IWorkService } from "../domain/services/IWorkService";
import { workerRepository } from "../repositories/WorkRepository";
import { philosopherRepository } from "../repositories/PhilosopherRepository";
import { Philosopher } from "../entities/Philosopher";
import { Work } from "../entities/Work";
import { NotFoundError } from "../exceptions/api-error";


class WorkerService implements IWorkService {

    public async list():Promise<IWork[]> {
        const works = await workerRepository.find({});
        return works;
    }

    public async show(id:string): Promise<IWork> {
        const work = await workerRepository.findOneBy({ id: Number(id) });
        
        if (!work) {
            throw new NotFoundError("No philosopher found with this id");
        }
        
        return work;
    }

    public async create({
        name,
        date,
        buyUrl,
        philosopher_id}:
        ICreateWork):
        Promise<Work | undefined> {
        
        const philosopher = await philosopherRepository.findOneBy({ id: Number(philosopher_id) }) as Philosopher;

        
        const work = workerRepository.create({
            name,
            date,
            buyUrl,
            philosopher
        });

        await workerRepository.save(work);
        
        return work;
        
    }

    public async deleteWork(id: string):Promise<Boolean> {
        const work = await workerRepository.findOneBy({ id: Number(id) });

        if (!work) {
            throw new NotFoundError("Not work found with this id!");
        }

        await workerRepository.delete({ id: Number(id) });

        return true;
    }
    
}

export default new WorkerService();