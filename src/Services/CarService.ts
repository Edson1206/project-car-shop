import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarModel from '../Models/CarModel';

class CarService {
  private model = new CarModel();

  public async create(car: ICar) {
    const newCar = await this.model.create(car);
    return new Car(newCar);
  }

  public async getAll() {
    const search = await this.model.getAll();
    const getAllCars = search.map((car) => new Car(car));
    return getAllCars;
  }

  public async getById(id: string) {
    const search = await this.model.getById(id);
    const [getCarById] = search.map((car) => new Car(car)).filter((car) => id === car.id); 
    return getCarById;
  }

  public async updateCar(id: string, body: ICar) {
    const updatedInfo = await this.model.update(id, body);
    if (updatedInfo !== null) return new Car(updatedInfo);
  }

  public async deleteById(id: string) {
    await this.model.delete(id);
  }
}

export default CarService;