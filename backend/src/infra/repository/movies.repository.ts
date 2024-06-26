import mongoose from "mongoose";
import { MovieDto } from "../../app/dto/movieDto";
import { MoviesRepository } from "../../app/repository/movies.repository";

const moviesSchema = new mongoose.Schema({
    title: String,
    releaseDate: {$date: Date},
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
}

export { MoviesRepositoryMongoose };  