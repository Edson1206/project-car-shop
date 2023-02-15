import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleModel from '../Models/MotorcycleModel';

class MotorcycleService {
  private model = new MotorcycleModel();

  public async create(motorcycle: IMotorcycle) {
    const newMotorcycle = await this.model.create(motorcycle);
    return new Motorcycle(newMotorcycle);
  }

  public async getAll() {
    const search = await this.model.getAll();
    const getAllMotorcycles = search.map((motorcycle) => new Motorcycle(motorcycle));
    return getAllMotorcycles;
  }

  public async getById(id: string) {
    const search = await this.model.getById(id);
    const [getMotorcycleById] = search
      .map((car) => new Motorcycle(car))
      .filter((car) => id === car.id); 
    return getMotorcycleById;
  }
}

export default MotorcycleService;