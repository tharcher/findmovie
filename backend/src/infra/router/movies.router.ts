import { Router } from "express";
import { MoviesController } from "../../app/controllers/movies.controller";
import { routerAdapter } from "./routerAdapter";

export const MovieRoutes = (router: Router) => {
    const moviesController = new MoviesController();
    router.post('/movies', routerAdapter(moviesController, 'create'));
}