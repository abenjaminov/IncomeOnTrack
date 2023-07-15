import {NextFunction, Request, Response} from "express";
import { AnyZodObject, ZodError } from 'zod';
import {fromZodError} from "zod-validation-error";

export const zodValidationMiddleware = (schema: AnyZodObject) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    const parsedRequest = await schema.parseAsync({
      body: req.body,
      query: req.query,
      params: req.params,
    });
    req.body = parsedRequest.body;
    req.query = parsedRequest.query;
    req.params = parsedRequest.params;
    return next();
  } catch (error) {
    console.log(error);
    const zodErrorMessage = fromZodError(error as ZodError);
    return res.status(400).send(zodErrorMessage);
  }
};
