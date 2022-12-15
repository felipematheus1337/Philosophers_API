import { Philosopher } from "../../entities/Philosopher";
import { ICreatePhilosopher } from "../model/ICreatePhilosopher";
import { ICreatePhilosopherImage } from "../model/ICreatePhilosopherImage";


export interface IPhilosopherService {
    create(data: ICreatePhilosopher): Promise<Philosopher | undefined>;
    updateImage(data: ICreatePhilosopherImage): Promise <string | null>
}