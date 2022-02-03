import { prisma } from "../../../database/prismaClient";

export class FindAllManDeliveriesService {
  async execute(id_deliveryman: string) {
    const manDeliveries = await prisma.deliveryman.findMany({
      where: {
        id: id_deliveryman
      },
      select: {
        deliveries: true,
        id: true,
        username: true,
      },
    });

    return manDeliveries;
  }
}