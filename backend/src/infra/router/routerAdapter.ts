import { NextFunction, Request, Response } from "express"
import { errorMiddleware } from "../middlewares/error.middleware";

export const routerAdapter = ( controller: any, method: string ) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const httpRequest: HttpRequest = {
            body: req?.body,
            headers: req?.headers,
            params: req?.params,
            query: req?.query,
        };

        const HttpResponse = await controller[method](httpRequest);

        if (HttpResponse.status >= 200 && HttpResponse.status <= 299){
            return res.status(HttpResponse.status).json(HttpResponse);
        } else {
            return errorMiddleware(HttpResponse, req, res, next);
        }
    }
}