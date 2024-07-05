import axios from "axios";

export const searchMovies = async (input: string,  categories?: string[]) => {
    

    try {
        const params = {
            search: input,
            categories: categories && categories.length > 0 ? categories.join(', ') : undefined,
        };

        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/movies`, { params });
        
        console.log("teste front: ", response.data.data);
        return response.data.data;
    } catch (error) {
        return null;
    }
};
