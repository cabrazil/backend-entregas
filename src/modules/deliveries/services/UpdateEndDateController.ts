import { Request, Response } from "express";
import { UpdateEndDateService } from "./UpdateEndDateService";

export class UpdateEndDateController {
  async handle(request: Request, response: Response) {
    const { id_deliveryman } = request;
    const { id: id_delivery } = request.params;

    const updateEndDateService = new UpdateEndDateService();
    const delivery = await updateEndDateService.execute({
      id_deliveryman,
      id_delivery,
    });

    return response.json(delivery);
  }
}