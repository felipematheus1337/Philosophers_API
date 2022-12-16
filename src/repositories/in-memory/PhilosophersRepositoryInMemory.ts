import { ICreatePhilosopher } from "../../domain/model/ICreatePhilosopher";
import { IPhilosopherService } from "../../domain/services/IPhilosopherService";
import { Philosopher } from "../../entities/Philosopher";
import { IExistsObj } from "./IExistsObj";


class PhilosophersRepositoryInMemory implements IPhilosopherService {

    private philosophers: Philosopher[] = [];

    async create(data: ICreatePhilosopher): Promise<Philosopher> {
        let philosopher = Object.assign(data, {
            id: Math.random() * 6
        }) as Philosopher;

        this.philosophers.push(philosopher);
        return philosopher;
    }

    async exists(name: string): Promise<IExistsObj> {
        const philosopher = this.philosophers.some((philosophers) => philosophers.name == name);
        return philosopher === true ?
            { is: true, message: "Philosopher already exists" }
           : {is:false,message:""}
    }
}

export { PhilosophersRepositoryInMemory };