import { Request, Response } from "express";
import { ICreatePhilosopher } from "../domain/model/ICreatePhilosopher";
import { BadRequestError } from "../exceptions/api-error";
import PhilosopherService from "../services/PhilosopherService";

export class PhilosopherController {

     async create(request: Request,response: Response):Promise<Response> {
         const { name, birthDate, image, country, typePhilosophy } = request.body as ICreatePhilosopher;

         if (!name) {
             throw new BadRequestError('Proibido valores vazios');
         }

         const newPhilosopher = await PhilosopherService.create({
             name,
             birthDate,
             image,
             country,
             typePhilosophy
         })

         return response.status(201).json(newPhilosopher);
     }
    
    async updatePhilosopherImage(request: Request, response: Response): Promise<Response> {
        const { file } = request;
        const { id } = request.params;
   
        let philosopher = await PhilosopherService.updateImage(id, file!);
        
        return response.json({
            message: 'Philosopher Image sucessfully updated!',
            philosopher: philosopher
        });



    }
}