import { Request, Response } from "express";


class GreetingController {

    public async hello(request:Request,response:Response) {
        return response.json("Hello World!!");
    }
}


export default new GreetingController();