import { prisma } from "../../../database/prismaClient";

export class FindAllDeliveriesService {
  async execute() {
    const allDeliveries = await prisma.deliveries.findMany({
      where: {
        end_at: null,
        id_deliveryman: null,
      }, 
    });

    return allDeliveries;
  }
}