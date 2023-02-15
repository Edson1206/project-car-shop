import { expect } from 'chai';
import { Model } from 'mongoose';
import Sinon from 'sinon';
import MotorcycleService from '../../../src/Services/MotorcycleService';

describe('Test the endpoint GET /motorcycles', function () {
  it('Is possible list all motorcycles through the route "/motorcycles"', async function () {
    // arrange
    const output = [
      {
        id: '634852326b35b59438fbea2f',
        model: 'Honda Cb 600f Hornet',
        year: 2005,
        color: 'Yellow',
        status: true,
        buyValue: 30.000,
        category: 'Street',
        engineCapacity: 600,
      },
      {
        id: '634852326b35b59438fbea31',
        model: 'Honda Bis 125cc',
        year: 2022,
        color: 'Red',
        status: false,
        buyValue: 15.300,
        category: 'Street',
        engineCapacity: 125,
      },
    ];
    Sinon.stub(Model, 'find').resolves(output);
    // act
    const service = new MotorcycleService();
    const result = await service.getAll();
    // assert
    expect(result).to.be.deep.equal(output);
  });
  it(
    'Is possible list an especific motorcycle through the route "/motorcycles/id"', 
    async function () {
    // arrange
      const output = {
        id: '634852326b35b59438fbea31',
        model: 'Honda Bis 125cc',
        year: 2022,
        color: 'Red',
        status: false,
        buyValue: 15.300,
        category: 'Street',
        engineCapacity: 125,
      };
      const id = '634852326b35b59438fbea31';
      Sinon.stub(Model, 'findById').resolves(output);
      // act
      const service = new MotorcycleService();
      const result = await service.getById(id);
      // assert
      expect(result).to.be.deep.equal(output);
    },
  );
});