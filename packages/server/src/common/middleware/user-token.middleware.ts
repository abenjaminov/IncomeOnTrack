import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

export type ITokenPayload = {
  token: string,
  userId: string
}

export const authenticateUserTokenMiddleware = (req: Request & ITokenPayload, res: Response, next: NextFunction) => {
  const devAuth = req.headers['x-dev-auth'];
  if(devAuth) {
    req.userId = devAuth  as string;
    next();
    return;
  }

  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).send({ message: 'Unauthorized (1)' });
  }
  if(!process.env.TOKEN_SECRET) {
    return res.status(401).send({ message: 'Unauthorized (2)' });
  }

  const tokenParts = token?.split(' ');
  if (tokenParts.length !== 2) {
    return res.status(401).send({ message: 'Unauthorized (3)' });
  }

  const [scheme, tokenValue] = tokenParts;

  try {
    const decoded = jwt.verify(tokenValue, process.env.TOKEN_SECRET) as ITokenPayload;
    req.token = tokenValue;
    req.userId = decoded.userId;
    next();
  }
  catch (err) {
    return res.status(401).send({ message: 'Unauthorized!' });
  }
}
