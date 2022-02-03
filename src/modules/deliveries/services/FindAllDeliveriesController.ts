import { Request, Response } from "express";
import { FindAllDeliveriesService } from "./FindAllDeliveriesService";

export class FindAllDeliveriesController {
  async handle(request: Request, response: Response) {
    const findAllDeliveriesService = new FindAllDeliveriesService();
    
    const deliveries = await findAllDeliveriesService.execute();

    return response.json(deliveries);
  }
}