import { Request, Response } from "express";
import { BadRequestError, NotFoundError } from "../exceptions/api-error";
import WorkerService from "../services/WorkerService";
import { ICreateWork } from "../domain/model/ICreateWork";

export class WorkerController {

      
    async findAll(request: Request,response: Response):Promise<Response> {
        const works = await WorkerService.list();

        if (!works) {
            return response.status(404).json('Not found');
        }

        return response.json(works);
    }

    async showWork(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const work = await WorkerService.show(id);

        if (!work) {
            throw new NotFoundError("No work found!")
        }

        return response.json(work);
    }

    async create(request: Request,response: Response):Promise<Response> {
         const { name, date, buyUrl, philosopher_id } = request.body as ICreateWork;

         if (!name) {
             throw new BadRequestError('Proibido valores vazios');
         }

         const newWork = await WorkerService.create({
             name,
             date,
             buyUrl,
             philosopher_id
         })

         return response.status(201).json(newWork);
     }
    
  

    async deleteWork(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const isWorkDeleted = await WorkerService.deleteWork(id);

        if (isWorkDeleted) {
            return response.status(204);
        }

        return response.status(400);
    }
}