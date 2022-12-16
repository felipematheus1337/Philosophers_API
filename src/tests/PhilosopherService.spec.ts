import 'jest'
import { PhilosophersRepositoryInMemory }  from "../repositories/in-memory/PhilosophersRepositoryInMemory";
import { ICreatePhilosopher } from '../domain/model/ICreatePhilosopher';
import { Philosopher } from '../entities/Philosopher';


describe("Create Philosopher", () => {

    let philosopherRepository: PhilosophersRepositoryInMemory;

    beforeAll(() => {
       philosopherRepository = new PhilosophersRepositoryInMemory();
    })


    it("Should be possible create a philosopher", async () => {
        
    

        const philosopherData: ICreatePhilosopher = {
            name: 'Leibinz',
            birthDate: "1998",
            image: '...',
            country: 'Germany',
            typePhilosophy: 'Metaphysics'
        } as Philosopher;

        const philosopher = await philosopherRepository.create(philosopherData);

        console.log(philosopher);

        expect(philosopher).toHaveProperty("id");
        expect(philosopher.name).toEqual('Leibinz')
    })

    it("should not be able to create an existing user", async  () => {
       const philosopherData: ICreatePhilosopher = {
            name: 'Philosopher Existing name',
            birthDate: "1998",
            image: '...',
            country: 'Germany',
            typePhilosophy: 'Metaphysics Existing type'
       } as Philosopher;
        
        await philosopherRepository.create(philosopherData);

        const objResult = await philosopherRepository.exists(philosopherData.name)
            
        expect(objResult)
            .toEqual({ is:true,message:"Philosopher already exists"})


    

    });
})