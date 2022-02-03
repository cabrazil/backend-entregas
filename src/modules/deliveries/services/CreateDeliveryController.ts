import { Request, Response } from "express";
import { CreateDeliveryService } from "./CreateDeliveryService";


export class CreateDeliveryController {
  async handle(request: Request, response: Response) {
    const { item_name } = request.body;
    const { id_client } = request;
    const createDeliveryService = new CreateDeliveryService();

    const delivery = await createDeliveryService.execute({
      id_client,
      item_name,
    });

    return response.json(delivery);
  }
}