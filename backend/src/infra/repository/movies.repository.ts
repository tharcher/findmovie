import mongoose from "mongoose";
import { MovieDto } from "../../app/dto/movieDto";
import { MoviesRepository } from "../../app/repository/movies.repository";
import { MovieEntity } from "../../domain/entity/movie.entity";

const moviesSchema = new mongoose.Schema({
    title: String,
    release: {$date: String},
    duration: Number,
    thumbnailUrl: String,
    shortDescription: String,
    longDescription: String,
    status: String,
    directors: [String],
    cast: [String],
    categories: [String],
});

const Movies = mongoose.model('movies', moviesSchema); 

class MoviesRepositoryMongoose implements MoviesRepository {
    create(dto: MovieDto){
        const movies = new Movies(dto);
        return movies.save();
    }

    async search(dto: MovieDto): Promise<MovieEntity | null> {
        const response = await Movies.findOne({ title: dto.title });
        return response ? response.toObject() : null;
    }

    async update(dto: MovieDto, id: string): Promise<MovieEntity | null>{
        const response = await Movies.findByIdAndUpdate(id, dto);
        return response ? response.toObject() : null;
    }
}

export { MoviesRepositoryMongoose };  