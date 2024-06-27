import { Router } from "express";
import { MoviesController } from "../../app/controllers/movies.controller";
import { routerAdapter } from "./routerAdapter";
import { MoviesRepositoryMongoose } from "../repository/movies.repository";
import { MoviesUseCase } from "../../app/useCases/movies.usecase";

export const MovieRoutes = (router: Router) => {
    const moviesUseCase = new MoviesUseCase(new MoviesRepositoryMongoose());
    const moviesController = new MoviesController(moviesUseCase);
    router.post('/movies', routerAdapter(moviesController, 'create'));
    router.get("/movies", routerAdapter(moviesController, 'search'));
    router.put("/movies/:id", routerAdapter(moviesController, 'update'));
}