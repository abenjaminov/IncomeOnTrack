import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

export type ITokenPayload = {
  userId: string
}

export const authenticateUserTokenMiddleware = (req: Request & ITokenPayload, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).send({ message: 'Unauthorized (1)' });
  }
  if(!process.env.TOKEN_SECRET) {
    return res.status(401).send({ message: 'Unauthorized (2)' });
  }

  try {
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET) as ITokenPayload;
    req.userId = decoded.userId;
    next();
  }
  catch (err) {
    return res.status(401).send({ message: 'Unauthorized!' });
  }
}
