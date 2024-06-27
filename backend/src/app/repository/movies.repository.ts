import { MovieEntity } from "../../domain/entity/movie.entity";
import { MovieDto } from "../dto/movieDto";

abstract class MoviesRepository {
    abstract create(dto: MovieDto): void;
    abstract search(dto: MovieDto): Promise<MovieEntity | null>;
    abstract update(dto: MovieDto, id: string): Promise<MovieEntity | null>;    
}

export { MoviesRepository };