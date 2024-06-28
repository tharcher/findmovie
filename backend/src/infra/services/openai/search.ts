import OpenAI from "openai";
import { HttpException } from "../../../interfaces/HttpException";
import { AIResponse } from "../../../app/useCases/movies.usecase";

export async function searchEmbeddings(input: string): Promise<AIResponse> {
    const openAi = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
    });

    try {
        const response = await openAi.chat.completions.create({
            messages: [
                {
                    role: 'system',
                    content:
                        `
                - Não retorne nada fora dos dados fornecidos.
                - Não acrescente nenhuma informação além das já existentes nos dados fornecidos.
                - Não invente ou altere nenhuma informação.
                - Enviar a resposta no formato JSON.
                - Lista de categorias: ['Ação', 'Aventura', 'Comédia', 'Terror', 'Ficção', 'Drama', 'Biografia'].
                - Verificar de a mensagem do usuário corresponde a alguma das categorias em portugês ou inglês. Caso não seja, envie a categoria do livre encontrado.
                - Realizar uma busca por title, directors, categories, cast e longDescription.
                - Formato de saída para o retorno do JSON: { title: string, directors: string, categories: string, cast: string, longDescription: string }
                `,
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
        const output = JSON.parse(response.choices[0].message.content!)
        console.log("Result: ", output);
        return output;
    } catch (error: any) {
        throw new HttpException(500, error.message);
    }
}