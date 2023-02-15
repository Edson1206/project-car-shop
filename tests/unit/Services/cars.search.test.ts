import { expect } from 'chai';
import { Model } from 'mongoose';
import Sinon from 'sinon';
import CarService from '../../../src/Services/CarService';

describe('Test the endpoint GET /cars', function () {
  it('Is possible list all cars through the route "/cars"', async function () {
    // arrange
    const output = [
      {
        id: '634852326b35b59438fbea2f',
        model: 'Civic',
        year: 1994,
        color: 'White',
        status: true,
        buyValue: 25.990,
        doorsQty: 2,
        seatsQty: 5,
      },
      {
        id: '634852326b35b59438fbea31',
        model: 'Prelude',
        year: 1995,
        color: 'Red',
        status: true,
        buyValue: 45.300,
        doorsQty: 2,
        seatsQty: 4,
      },
    ];
    Sinon.stub(Model, 'find').resolves(output);
    // act
    const service = new CarService();
    const result = await service.getAll();
    // assert
    expect(result).to.be.deep.equal(output);
  });
  it('Is possible list an especific car through the route "/cars/id"', async function () {
    // arrange
    const output = {
      id: '634852326b35b59438fbea31',
      model: 'Prelude',
      year: 1995,
      color: 'Red',
      status: true,
      buyValue: 45.300,
      doorsQty: 2,
      seatsQty: 4,
    };
    const id = '634852326b35b59438fbea31';
    Sinon.stub(Model, 'findById').resolves(output);
    // act
    const service = new CarService();
    const result = await service.getById(id);
    // assert
    expect(result).to.be.deep.equal(output);
  });
});