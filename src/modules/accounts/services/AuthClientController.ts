import { Request, Response } from "express";
import { AuthClientService } from "./AuthClientService";

export class AuthClientController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body;

    const authClientService = new AuthClientService();
    const result = await authClientService.execute({
      username,
      password,
    });

    return response.json(result);
  }
}