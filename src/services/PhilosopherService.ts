import { ICreatePhilosopher } from "../domain/model/ICreatePhilosopher";
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
    
}

export default new PhilosopherService();