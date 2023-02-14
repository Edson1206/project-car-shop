import ICar from '../Interfaces/ICar';
import Vehicle from './Vehicle';

class Car extends Vehicle {
  private doorsQty: number;
  private seatsQty: number;
  
  constructor(attributes: ICar) {
    super(
      attributes.id,
      attributes.model,
      attributes.year,
      attributes.color,
      attributes.status,
      attributes.buyValue,
    );
    this.doorsQty = attributes.doorsQty;
    this.seatsQty = attributes.seatsQty;
  }
}

export default Car;