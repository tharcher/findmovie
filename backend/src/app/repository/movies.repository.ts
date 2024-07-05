import { MovieEntity } from "../../domain/entity/movie.entity";
import { MovieDto } from "../dto/movieDto";

abstract class MoviesRepository {
    abstract create(dto: MovieDto): void;
    abstract find(
        search: string,
        embedding: number[],
        matchMovies: Record<string, any>,
    ): Promise<MovieEntity[] | null>;    
    abstract findByCategories(
        categories: string[],
    ): Promise<MovieEntity[] | null>;    
    abstract update(dto: MovieDto, id: string): Promise<MovieEntity | null>;
}

export { MoviesRepository };