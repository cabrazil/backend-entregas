import { Request, Response } from "express";
import { AuthDeliverymanService } from "./AuthDeliverymanService";

export class AuthDeliverymanController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body;

    const authDeliverymanService = new AuthDeliverymanService();
    const result = await authDeliverymanService.execute({
      username,
      password,
    });

    return response.json(result);
  }
}