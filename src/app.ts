import express from 'express';
import 'reflect-metadata';
import cors from 'cors';
import dotenv from 'dotenv';
import { AppDataSource } from './data-source';
import greetingRouter from './routes/greeting.routes';
import { errorMiddleware } from './middlewares/error';
import philosopherRouter from './routes/philosopher.routes';
dotenv.config();



class App {
    
    app;

    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
        this.dbConnection();
    }

    middlewares() { 
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use(errorMiddleware);
    }

    routes() {
        this.app.use("/", greetingRouter);
        this.app.use("/filosofo", philosopherRouter);
     }

    dbConnection(): void {
        AppDataSource.initialize().then(() => {
            console.log("Conexão com BD, sucesso! 🎉🎉")
        })
     }
}

export default new App().app;