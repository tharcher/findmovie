import { z } from "zod";

const movieSchema = z.object({
    title: z.string(),
    release: z.object({
        $date: z.date(),
    }),
    duration: z.number(),    
    thumbnailUrl: z.string(),
    shortDescription: z.string().optional(),
    longDescription: z.string().optional(),
    status: z.string(),
    directors: z.array(z.string()),
    cast: z.array(z.string()),
    categories: z.array(z.string()),
})

type Movie = z.infer<typeof movieSchema>;

export type MovieDto = Movie;