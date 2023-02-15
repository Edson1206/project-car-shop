import { NextFunction, Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';

const mongoMessage = 'Invalid mongo id';
const carMessage = 'Car not found';

class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;
  
  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  public async create() {
    const car: ICar = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
    };

    try {
      const newCar = await this.service.create(car);
      return this.res.status(201).json(newCar);
    } catch (error) {
      this.next(error);
    }
  }

  public async getAll() {
    try {
      const getAllCars = await this.service.getAll();
      return this.res.status(200).json(getAllCars);
    } catch (error) {
      this.next(error);
    }
  }

  public async getById() {
    try {
      const { id } = this.req.params;
      if (!isValidObjectId(id)) return this.res.status(422).json({ message: mongoMessage });
  
      const getCar = await this.service.getById(id);
      if (!getCar) return this.res.status(404).json({ message: carMessage });
  
      return this.res.status(200).json(getCar);
    } catch (error) {
      this.next(error);
    }
  }

  public async update() {
    try {
      const { id } = this.req.params;
      if (!isValidObjectId(id)) return this.res.status(422).json({ message: mongoMessage });
      
      const getCar = await this.service.getById(id);
      if (!getCar) return this.res.status(404).json({ message: carMessage });
      
      const car: ICar = this.req.body;
      const result = await this.service.updateCar(id, car);
      
      return this.res.status(200).json(result);
    } catch (error) {
      this.next(error);
    }
  }

  public async delete() {
    try {
      const { id } = this.req.params;
      if (!isValidObjectId(id)) return this.res.status(422).json({ message: mongoMessage });

      const getCar = await this.service.getById(id);
      if (!getCar) return this.res.status(404).json({ message: carMessage });

      await this.service.deleteById(id);

      return this.res.status(204).json();
    } catch (error) {
      this.next(error);
    }
  }
}

export default CarController;