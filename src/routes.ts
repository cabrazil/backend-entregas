import { Router } from "express";
import { AuthClientController } from "./modules/accounts/services/AuthClientController";
import { AuthDeliverymanController } from "./modules/accounts/services/AuthDeliverymanController";
import { CreateClientController } from "./modules/clients/services/CreateClientController";
import { CreateDeliverymanController } from "./modules/deliverymen/services/CreateDeliberymanController";
import { CreateDeliveryController } from "./modules/deliveries/services/CreateDeliveryController";
import { ensureAuthClient } from "./middlewares/ensureAuthClient";
import { ensureAuthDeliveryman } from "./middlewares/ensureAuthDeliveryman";
import { FindAllDeliveriesController } from "./modules/deliveries/services/FindAllDeliveriesController";
import { UpdateDeliverymanController } from "./modules/deliveries/services/UpdateDeliverymanController";
import { FindAllClientDeliveriesController } from "./modules/clients/services/FindAllClientDeliveriesController";
import { FindAllManDeliveriesController } from "./modules/deliverymen/services/FindAllManDeliveriesController";
import { UpdateEndDateController } from "./modules/deliveries/services/UpdateEndDateController";

const routes = Router();

const createClientController = new CreateClientController();
const authClientController = new AuthClientController();
const authDeliverymanController = new AuthDeliverymanController();
const createDeliverymanController = new CreateDeliverymanController();
const createDeliveryController = new CreateDeliveryController();
const findAllDeliveriesController = new FindAllDeliveriesController();
const findAllClientDeliveriesController = new FindAllClientDeliveriesController();
const findAllManDeliveriesController = new FindAllManDeliveriesController();
const updateDeliverymanController = new UpdateDeliverymanController();
const updateEndDateController = new UpdateEndDateController();

routes.post("/client/authenticate", authClientController.handle);
routes.post("/deliveryman/authenticate", authDeliverymanController.handle);

routes.post("/client", createClientController.handle);

routes.post("/deliveryman", createDeliverymanController.handle);

routes.post("/delivery", ensureAuthClient, createDeliveryController.handle);
routes.get("/delivery/available", ensureAuthDeliveryman, findAllDeliveriesController.handle);
routes.get("/client/deliveries", ensureAuthClient, findAllClientDeliveriesController.handle);
routes.get("/deliveryman/deliveries", ensureAuthDeliveryman, findAllManDeliveriesController.handle);

routes.put("/delivery/updateDeliveryman/:id", ensureAuthDeliveryman, updateDeliverymanController.handle);
routes.put("/delivery/updateEndDate/:id", ensureAuthDeliveryman, updateEndDateController.handle);

export { routes };