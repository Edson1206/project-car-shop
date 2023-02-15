import { Model } from 'mongoose';
import { expect } from 'chai';
import sinon from 'sinon';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import Motorcycle from '../../../src/Domains/Motorcycle';
import MotorcycleService from '../../../src/Services/MotorcycleService';

describe('Test the endpoint POST /motorcycles', function () {
  it('Is possible create a new motorcycle successfully', async function () {
    sinon.restore();
    // arrange
    const newMotorcycleInput: IMotorcycle = {
      model: 'Honda Cb 600f Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    };
    const newMotorcycleOutput: Motorcycle = new Motorcycle({
      id: '6348513f34c397abcad040b2',
      model: 'Honda Cb 600f Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    });
    sinon.stub(Model, 'create').resolves(newMotorcycleOutput);
    // act
    const service = new MotorcycleService();
    const result = await service.create(newMotorcycleInput);

    // assert
    expect(result).to.be.deep.equal(newMotorcycleOutput);
  });
});