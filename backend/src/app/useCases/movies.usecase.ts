import { MovieDto } from "../dto/movieDto";
import { MoviesRepository } from "../repository/movies.repository";

class MoviesUseCase {
    private moviesRepository: MoviesRepository;
    constructor(moviesRepository: MoviesRepository) {
        this.moviesRepository = moviesRepository;
    }

    async createMovie(dto: MovieDto) {
        this.moviesRepository.create(dto);
    }

    async searchMovie(dto: MovieDto) {
        this.moviesRepository.search(dto);
    }

    async updateMovie(dto: MovieDto, id: string) {
        this.moviesRepository.update(dto, id);
    }
}

export { MoviesUseCase };