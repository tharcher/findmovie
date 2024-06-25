import express, { Application } from "express";
import cors from "cors";
import { errorMiddleware } from "../middlewares/error.middleware";
import { MovieRoutes } from "../router/movies.router";

class Express {
    app: Application;    

    constructor(){
        this.app = express();
        this.initMiddlewares();
        this.errorMiddleware();
        MovieRoutes(this.app);
    }

    private initMiddlewares() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(cors());
    }

    private errorMiddleware() {
        this.app.use(errorMiddleware);
    }

    listen() {
        this.app.listen(3333, () => console.log("Server is running on port 3333"));
    }
}

export default Express;