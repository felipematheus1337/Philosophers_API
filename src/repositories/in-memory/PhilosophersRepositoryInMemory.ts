import { ICreatePhilosopher } from "../../domain/model/ICreatePhilosopher";
import { IPhilosopherService } from "../../domain/services/IPhilosopherService";
import { Philosopher } from "../../entities/Philosopher";


class PhilosophersRepositoryInMemory implements IPhilosopherService {

    private philosophers: Philosopher[] = [];

    async create(data: ICreatePhilosopher): Promise<Philosopher> {
        let philosopher = Object.assign(data, {
            id: Math.random() * 6
        }) as Philosopher;

        this.philosophers.push(philosopher);
        return philosopher;
    }

    async exists(name: string): Promise<Boolean> {
        const philosopher = this.philosophers.some((philosophers) => philosophers.name == name);
        return philosopher;
    }
}

export { PhilosophersRepositoryInMemory };