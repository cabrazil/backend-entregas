import { prisma } from "../../../database/prismaClient";

export class FindAllClientDeliveriesService {
  async execute(id_client: string) {
    const clientDeliveries = await prisma.clients.findMany({
      where: {
        id: id_client
      },
      select: {
        deliveries: true,
        id: true,
        username: true,
      },
    });

    return clientDeliveries;
  }
}