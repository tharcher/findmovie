import { MovieDto } from "../dto/movieDto";
import { MoviesUseCase } from "../useCases/movies.usecase";

class MoviesController {
    constructor(private readonly moviesUseCase: MoviesUseCase) {

    }

    async create(httpRequest: HttpRequest): Promise<HttpResponse> {
        const body: MovieDto = httpRequest.body;

        try {
           const response = await this.moviesUseCase.createMovie(body);
            return {
                status: 201,
                message: "Movie created",
                data: response,
            };
        } catch (error: any) {
            return {
                status: 400,
                message: error.message,
            }
        }
    }
}

export { MoviesController }