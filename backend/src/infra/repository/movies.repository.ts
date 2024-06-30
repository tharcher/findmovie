import mongoose from "mongoose";
import { MovieDto } from "../../app/dto/movieDto";
import { MoviesRepository } from "../../app/repository/movies.repository";
import { MovieEntity } from "../../domain/entity/movie.entity";

const moviesSchema = new mongoose.Schema({
    title: String,
    release: { $date: String },
    duration: Number,
    thumbnailUrl: String,
    shortDescription: String,
    longDescription: String,
    status: String,
    directors: [String],
    cast: [String],
    categories: [String],
    embedding: [Number],
});

const Movies = mongoose.model('movies', moviesSchema);

class MoviesRepositoryMongoose implements MoviesRepository {
    create(dto: MovieDto) {
        const movies = new Movies(dto);
        return movies.save();
    }

    async search(
        find: string,
        embedding: number[],
        matchMovies: any,
    ): Promise<MovieEntity[] | null> {
        const response = await Movies.aggregate([
            {
                $vectorSearch: {
                    index: 'embedding',
                    path: 'embedding',
                    queryVector: embedding,
                    numCandidates: 20,
                    limit: 10,
                },
            },
            {
                $match: {
                    $or: [
                        { title: new RegExp(matchMovies.title, 'i') },
                        { directors: new RegExp(matchMovies.directors, 'i') },
                        { categories: new RegExp(matchMovies.categories, 'i') },
                        { longDescription: new RegExp(matchMovies.longDescription, 'i') },
                        { cast: new RegExp(matchMovies.cast, 'i') },
                    ],
                }
            },
            {
                $project: {
                    _id: 1,
                    title: 1,
                    release: 1,
                    duration: 1,
                    thumbnailUrl: 1,
                    shortDescription: 1,
                    longDescription: 1,
                    status: 1,
                    directors: 1,
                    cast: 1,
                    categories: 1,
                    score: { $meta: 'vectorSearchScore' },
                },
            },
        ]);

        return response;
    }

    async update(dto: MovieDto, id: string): Promise<MovieEntity | null> {
        const response = await Movies.findByIdAndUpdate(id, dto);
        return response ? response.toObject() : null;
    }
}

export { MoviesRepositoryMongoose };  