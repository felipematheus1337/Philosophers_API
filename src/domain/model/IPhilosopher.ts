import { Work } from "../../entities/Work";

export interface IPhilosopher {
    id: number;
    name: string;
    birthDate: Date;
    image?: string;
    country: string;
    typePhilosophy: string;
    works: Work[];
    
}