import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();



class App {
    
    app;

    constructor() {
        this.app = express();
    }

    middlewares() { }

    routes() { }

    dbConnection() { }
}

export default new App().app;