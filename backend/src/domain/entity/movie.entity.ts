type MovieEntityProps = {
    title?: string | null | undefined;
    release: Date | null;
    duration: number | null | undefined;
    thumbnailUrl?: string | null | undefined;
    shortDescription?: string | null | undefined;
    longDescription?: string | null | undefined;
    status?: string | null | undefined;
    directors: string[];
    cast: string[];
    categories: string[];
    embedding?: number[] | null | undefined;

};

class MovieEntity {
    title?: string | null | undefined;
    release: Date | null;
    duration: number | null | undefined;
    thumbnailUrl?: string | null | undefined;
    shortDescription?: string | null | undefined;
    longDescription?: string | null | undefined;
    status?: string | null | undefined;
    directors: string[];
    cast: string[];
    categories: string[];
    embedding?: number[] | null | undefined; 

    constructor(props: MovieEntityProps) {
        this.title = props.title;
        this.release = props.release;
        this.duration = props.duration;
        this.thumbnailUrl = props.thumbnailUrl;
        this.shortDescription = props.shortDescription;
        this.longDescription = props.longDescription;
        this.status = props.status;
        this.directors = props.directors;
        this.cast = props.cast;
        this.categories = props.categories;
        this.embedding = props.embedding; 
    }
}

export { MovieEntity };
