import { Model } from 'mongoose';
import { expect } from 'chai';
import sinon from 'sinon';
import ICar from '../../../src/Interfaces/ICar';
import Car from '../../../src/Domains/Car';
import CarService from '../../../src/Services/CarService';

describe('Test the endpoint POST /cars', function () {
  it('Is possible create a new car successfully', async function () {
    // arrange
    const newCarInput: ICar = {
      model: 'Civic',
      year: 1994,
      color: 'White',
      status: true,
      buyValue: 25.990,
      doorsQty: 2,
      seatsQty: 5,
    };
    const newCarOutput: Car = new Car({
      id: '6348513f34c397abcad040b2',
      model: 'Civic',
      year: 1994,
      color: 'White',
      status: true,
      buyValue: 25.990,
      doorsQty: 2,
      seatsQty: 5,
    });
    sinon.stub(Model, 'create').resolves(newCarOutput);
    // act
    const service = new CarService();
    const result = await service.create(newCarInput);

    // assert
    expect(result).to.be.deep.equal(newCarOutput);
  });
});