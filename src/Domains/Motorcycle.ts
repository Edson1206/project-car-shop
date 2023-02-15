import IMotorcycle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

class Motorcycle extends Vehicle {
  private category: string;
  private engineCapacity: number;
  
  constructor(attributes: IMotorcycle) {
    super(
      attributes.id,
      attributes.model,
      attributes.year,
      attributes.color,
      attributes.status,
      attributes.buyValue,
    );
    this.category = attributes.category;
    this.engineCapacity = attributes.engineCapacity;
  }
}

export default Motorcycle;