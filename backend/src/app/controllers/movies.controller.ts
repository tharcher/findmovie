import { MovieDto } from "../dto/movieDto";

class MoviesController {
    constructor() {

    }

    async create(httpRequest: HttpRequest): Promise<HttpResponse> {
        const body: MovieDto = httpRequest.body;

        try {
            if (!body) {
                return {
                    status: 400,
                    message: "Missing body",
                };
            }
            return {
                status: 201,
                message: "Movie created",
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