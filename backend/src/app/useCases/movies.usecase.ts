import { generateEmbeddings } from "../../infra/services/openai/generateEmbeddings";
import { searchEmbeddings } from "../../infra/services/openai/search";
import { MovieDto } from "../dto/movieDto";
import { MoviesRepository } from "../repository/movies.repository";

export type AIResponse = {
    title: string;
    directors: string;
    categories: string;
    cast: string;
    longDescription: string;
}

class MoviesUseCase {
    private moviesRepository: MoviesRepository;
    constructor(moviesRepository: MoviesRepository) {
        this.moviesRepository = moviesRepository;
    }

    async createMovie(dto: MovieDto) {
        const dataEmbedding = {
            title: dto.title,
            categories: dto.categories,
            directors: dto.directors,
            cast: dto.cast,
            longDescription: dto.longDescription,
        };

        const generateEmbedding = await generateEmbeddings(
            JSON.stringify(dataEmbedding)
        );

        return this.moviesRepository.create({
            ...dto,
            embedding: generateEmbedding,
        });
    }

    async searchMovies(search: string) {        
        const generateEmbedding = await generateEmbeddings(search);
        const searchResponse: AIResponse = await searchEmbeddings(search);
        const matchMovies = this.matchMovies(searchResponse);
        
        return this.moviesRepository.find(search, generateEmbedding, searchResponse);
    }

    async updateMovie(dto: MovieDto, id: string) {
        const dataEmbedding = {
            title: dto.title,
            categories: dto.categories,
            directors: dto.directors,
            cast: dto.cast,
            longDescription: dto.longDescription,
        };

        const generateEmbedding = await generateEmbeddings(
            JSON.stringify(dataEmbedding)
        );

        return this.moviesRepository.update({
            ...dto,
            embedding: generateEmbedding,
        }, id);
    }

    private matchMovies(search: AIResponse): Record<string, any> {
        const matchMovies = { $match: {} }

        if (search.title) {
            matchMovies.$match = {
                title: search.title,
            };
        }

        if(search.directors) {
            matchMovies.$match = {
                directors: search.directors,
            };
        }

        if (search.categories) {
            matchMovies.$match = {
                categories: search.categories,
            };
        }

        if (search.cast) {
            matchMovies.$match = {
                cast: search.cast,
            };
        }

        if (search.longDescription) {
            matchMovies.$match = {
                longDescription: search.longDescription,
            };
        }
        
        return matchMovies;
    }
}

export { MoviesUseCase };