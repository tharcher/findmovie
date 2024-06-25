import { z } from "zod";

const movieSchema = z.object({
    title: z.string(),
    isbn: z.string(),
    pageCount: z.number(),
    publishedDate: z.object({
        $date: z.date(),
    }),
    thumbnailUrl: z.string(),
    shortDescription: z.string().optional(),
    longDescription: z.string().optional(),
    status: z.string(),
    authors: z.array(z.string()),
    categories: z.array(z.string()),
})

type Movie = z.infer<typeof movieSchema>;

export type MovieDto = Movie;