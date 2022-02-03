import { Request, Response } from "express";
import { FindAllClientDeliveriesService } from "./FindAllClientDeliveriesService";

export class FindAllClientDeliveriesController {
  async handle(request: Request, response: Response) {
    const { id_client } = request;

    const findAllClientDeliveriesService = new FindAllClientDeliveriesService();
    const clientDeliveries = await findAllClientDeliveriesService.execute(id_client);

    return response.json(clientDeliveries);

  }
}