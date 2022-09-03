import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { BaseMiddleware } from "inversify-express-utils";
import { decode } from "jsonwebtoken";
import { ParsedQs } from "qs";

export class TokenValidationMiddleware extends BaseMiddleware {

    handler(req: Request, res: Response, next: NextFunction): void {
        const bearerHeader = req.header('Authorization');
        const token = bearerHeader?.split(' ')[1];

        if (!bearerHeader || !token) {
            res.sendStatus(StatusCodes.UNAUTHORIZED);
        }

        const decodedToken = decode(token, { json: true });

        if (!decodedToken) {
            res.sendStatus(StatusCodes.UNAUTHORIZED);
        }
        else {
            const reqAsAny = req as any;

            reqAsAny['token'] = token;
            Object.entries(decodedToken).map(([key, value]) => {
                reqAsAny[key] = value;
            });
    
            next();
        }
    }

}