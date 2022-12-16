import { Philosopher } from "../../entities/Philosopher";
import { Work } from "../../entities/Work";
import { ICreatePhilosopher } from "../model/ICreatePhilosopher";
import { ICreatePhilosopherImage } from "../model/ICreatePhilosopherImage";
import { ICreateWork } from "../model/ICreateWork";


export interface IWorkService {
    create(data: ICreateWork): Promise<Work | undefined>;

}