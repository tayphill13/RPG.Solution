// import { plantCreator } from '../src/RPG.js';
import * as RPG from '../src/RPG.js';

describe('RPG', () => {

  test('should create a new plant character', () => {
    const initialStats = { hunger: 10, sun: 10, health: 10, defense: 5, leafCount: 1 }
    const myPlant = RPG.plantCreator(initialStats);
    expect(myPlant()).toMatchObject({ hunger: 10, sun: 10, health: 10, defense: 5, leafCount: 1 });
  });

});