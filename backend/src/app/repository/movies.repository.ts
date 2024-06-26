import { MovieDto } from "../dto/movieDto";

abstract class MoviesRepository {
    abstract create(dto: MovieDto): void;
}

export { MoviesRepository };