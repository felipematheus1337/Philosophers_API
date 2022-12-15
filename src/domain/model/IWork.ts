import { Philosopher } from "../../entities/Philosopher";


export interface IWork {
    id: number;
    name: string;
    date: string;
    buyUrl: string;
    philosopher: Philosopher;
}