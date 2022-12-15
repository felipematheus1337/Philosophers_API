import { AppDataSource } from "../data-source";
import { Philosopher } from "../entities/Philosopher";

export const philosopherRepository = AppDataSource.getRepository(Philosopher);