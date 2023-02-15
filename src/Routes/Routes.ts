import { Router } from 'express';
import CarController from '../Controllers/CarController';

const route = Router();

route.post(
  '/cars',
  (req, res, next) => new CarController(req, res, next).create(),
);

route.get(
  '/cars',
  (req, res, next) => new CarController(req, res, next).getAll(),
);

route.get(
  '/cars/:id',
  (req, res, next) => new CarController(req, res, next).getById(),
);

export default route;