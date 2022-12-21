import { Work } from "../../entities/Work";

export interface IPhilosopher {
    id: number;
    name: string;
    birthDate: string;
    image?: string;
    flag?: string;
    country: string;
    typePhilosophy: string;
    description: string;
    works: Work[];
    
}