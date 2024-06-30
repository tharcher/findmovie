import { MovieDto } from "../dto/movieDto";
import { MoviesUseCase } from "../useCases/movies.usecase";

class MoviesController {
    constructor(private readonly moviesUseCase: MoviesUseCase) {}

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

    async find(httpRequest: HttpRequest): Promise<HttpResponse> {
        const search: string = httpRequest.query.search;        

        try {
            const response = await this.moviesUseCase.searchMovies(search);         
            return {
                status: 200,
                message: "Movie found",
                data: response,
            };
        } catch (error: any) {
            return {
                status: 400,
                message: error.message,
            }
        }
    }

    async update(httpRequest: HttpRequest): Promise<HttpResponse> {
        const dto: MovieDto = httpRequest.body;
        const id: string = httpRequest.params.id;

        try {
            const response = await this.moviesUseCase.updateMovie(dto, id);
            return {
                status: 200,
                message: "Movie updated",
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