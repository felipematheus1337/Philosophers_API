import 'jest'
import { PhilosophersRepositoryInMemory }  from "../repositories/in-memory/PhilosophersRepositoryInMemory";
import PhilosopherService from '../services/PhilosopherService';
import { ICreatePhilosopher } from '../domain/model/ICreatePhilosopher';
import dotenv from 'dotenv';
import path from 'path';
import { Philosopher } from '../entities/Philosopher';

dotenv.config({ path: path.resolve(__dirname, './.env.test') });

describe("Create Philosopher", () => {

    it("Should be possible create a philosopher", async () => {
        const philosophersRepository = new PhilosophersRepositoryInMemory();
    

        const philosopherData: ICreatePhilosopher = {
            name: 'Leibinz',
            birthDate: "1998",
            image: '...',
            country: 'Germany',
            typePhilosophy: 'Metaphysics'
        } as Philosopher;

        const philosopher = await philosophersRepository.create(philosopherData);

        console.log(philosopher);

        expect(philosopher).toHaveProperty("id");
    })
})