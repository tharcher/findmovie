import OpenAI from "openai";
import { HttpException } from "../../../interfaces/HttpException";
import { AIResponse } from "../../../app/useCases/movies.usecase";

export async function searchEmbeddings(input: string, categories: string[] = []): Promise<AIResponse> {
    const openAi = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
    });

    let systemContent = `
        - Realizar a busca em Português, somente.
        - Não retorne nada fora dos dados fornecidos.
        - Não invente ou altere nenhuma informação das já mencionadas no banco.
        - Enviar a resposta no formato JSON.
        - Lista de categorias: ['Ação', 'Aventura', 'Comédia', 'Terror', 'Ficção', 'Drama', 'Biografia'].        
        - Formato de saída para o retorno do JSON: { title: string, directors: string, categories: string, cast: string, longDescription: string }
        - Ordenar por score.
    `;

    if (categories && categories.length > 0) {
        systemContent += `
            - Incluir apenas filmes que tenham no campo categories as categorias: [${categories}].
            - Não trazer nenhum filme que não tenha as categorias no campo categories.
            - Realizar a busca somente por categories.
            - Não altere nenhuma informação.
        `;
    } else {
        systemContent += `
            - Realizar uma busca por title, directors, categories, cast e longDescription.
        `;
    }

    

    try {
        const response = await openAi.chat.completions.create({
            messages: [
                {
                    role: 'system',
                    content: systemContent,
                },
                {
                    role: 'user',
                    content: input,
                }
            ],
            response_format: {
                type: 'json_object',
            },
            model: 'gpt-3.5-turbo-1106',
        });

        console.log("Searching...");
        const output = JSON.parse(response.choices[0].message.content!);
        console.log("Result OPENAI: ", output);
        return output;
    } catch (error: any) {
        throw new HttpException(500, error.message);
    }
}
