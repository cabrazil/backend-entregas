import { Request, Response } from "express";
import { UpdateDeliverymanService } from "./UpdateDeliverymanService";


export class UpdateDeliverymanController {
  async handle(request: Request, response: Response) {
    const { id_deliveryman } = request;
    const { id: id_delivery } = request.params;

    const updateDeliverymanService = new UpdateDeliverymanService();
    const delivery = await updateDeliverymanService.execute({
      id_deliveryman,
      id_delivery,
    });

    return response.json(delivery);
  }
}