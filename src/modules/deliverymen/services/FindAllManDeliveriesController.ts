import { Request, Response } from "express";
import { FindAllManDeliveriesService } from "./FindAllManDeliveriesService"

export class FindAllManDeliveriesController {
  async handle(request: Request, response: Response) {
    const { id_deliveryman } = request;

    const findAllManDeliveriesService = new FindAllManDeliveriesService();
    const manDeliveries = await findAllManDeliveriesService.execute(id_deliveryman);

    return response.json(manDeliveries);

  }
}