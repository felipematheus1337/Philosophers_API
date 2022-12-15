import { AppDataSource } from "../data-source";
import { Work } from "../entities/Work";

export const workerRepository = AppDataSource.getRepository(Work);