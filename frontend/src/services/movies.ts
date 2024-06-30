import axios from "axios";

export const searchMovies = async (input: string) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/movies`, {
            params: {
                search: input,
            },
        });

        return response.data.data;
    } catch (error) {
        return null;
    }
};