import { Philosopher } from "../../entities/Philosopher";


export interface IWork {
    id: number;
    name: string;
    date: Date;
    buyUrl: string;
    philosopher: Philosopher;
}