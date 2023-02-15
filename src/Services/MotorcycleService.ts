import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleModel from '../Models/MotorcycleModel';

class MotorcycleService {
  private model = new MotorcycleModel();

  public async create(motorcycle: IMotorcycle) {
    const newCar = await this.model.create(motorcycle);
    return new Motorcycle(newCar);
  }
}

export default MotorcycleService;