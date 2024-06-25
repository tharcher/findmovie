import { Router } from "express";
import { MoviesController } from "../../app/controllers/movies.controller";

export const MovieRoutes = (router: Router) => {
    const moviesController = new MoviesController();
    router.post('/movies', moviesController.create);
}