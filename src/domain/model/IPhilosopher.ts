import { Work } from "../../entities/Work";

export interface IPhilosopher {
    id: number;
    name: string;
    birthDate: string;
    image?: string | null;
    country: string;
    typePhilosophy: string;
    works: Work[];
    
}