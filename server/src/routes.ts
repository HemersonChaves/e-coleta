import express from 'express';
import PointController from './controllers/pointController';
import ItemsController from "./controllers/itemController";

const pointController = new PointController();
const itemController = new ItemsController();

const routes = express.Router();

routes.get("/items", itemController.index);

routes.post('/points', pointController.create);

routes.get("/points", pointController.index);

routes.get("/points/:id", pointController.show);

export default routes;