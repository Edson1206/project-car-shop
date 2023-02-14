import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarModel from '../Models/CarModel';

class CarService {
  private model = new CarModel();

  public async create(car: ICar) {
    const newCar = await this.model.create(car);
    return new Car(newCar);
  }
}

export default CarService;