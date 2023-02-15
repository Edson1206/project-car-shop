import { Router } from 'express';
import CarController from '../Controllers/CarController';
import MotorcycleController from '../Controllers/MotorcycleController';

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

route.put(
  '/cars/:id',
  (req, res, next) => new CarController(req, res, next).update(),
);

route.post(
  '/motorcycles',
  (req, res, next) => new MotorcycleController(req, res, next).create(),
);

route.get(
  '/motorcycles',
  (req, res, next) => new MotorcycleController(req, res, next).getAll(),
);

route.get(
  '/motorcycles/:id',
  (req, res, next) => new MotorcycleController(req, res, next).getById(),
);

export default route;