import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export async function ensureAuthClient( request: Request, response: Response, next: NextFunction) {
  const authHeader = request.headers.authorization;

  if(!authHeader) {
    return response.status(401).json({
      message: "Token is missing",
    });
  }

  // Bearer e string do token
  // [0] - Bearer
  // [1] - String do token
  const [, token] = authHeader.split(" ");

  try {
    const { sub } = verify(token, "f9104c649c25423a30e2968573899f48") as IPayload;

    request.id_client = sub;

    return next();
  } catch (err) {
    return response.status(401).json({
      message: "Invalid token",
    });
  }
}