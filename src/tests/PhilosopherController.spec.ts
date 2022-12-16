import  app  from "../app";
import request from 'supertest';
import dotenv from 'dotenv';
import path from 'path';

describe("Create Philosopher Controller", () => {
    it("should be able to create a new Philosopher", async () => {
        const response = await request(app)
            .post("/filosofo")
            .send({
                name:"Platão",
                birthDate:"428 BC",
                image: "..",
                country :"Greece",
                typePhilosophy : "METAFÍSICA"
            })
        
        expect(response.status).toEqual(200);
    })
})