import { Philosopher } from "../../entities/Philosopher";
import { ICreatePhilosopher } from "../model/ICreatePhilosopher";


export interface IPhilosopherService {
    create(data:ICreatePhilosopher): Promise<Philosopher | undefined>;
}