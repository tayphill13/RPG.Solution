
// Store State equivalent
export const plantCreator = (initialStats = {}) => {
  let currentState = initialStats;
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}

export const changeState = (prop) =>  {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    });
  }
}

// instantiate player
const initialStats = { hunger: 10, sun: 10, health: 10, defense: 5, leafCount: 1 };
const playerPlant = plantCreator(initialStats)
console.log(`Base display ${playerPlant()}`);

// changeState function declarations
export const decrementHunger = changeState("hunger")(-1);
export const incrementHunger = changeState("hunger")(1);

console.log(`Decrease hunger ${playerPlant(decrementHunger)}`);

export const decrementleafCount = changeState("leafCount")(-1);
export const incrementleafCount = changeState("leafCount")(1);

export const decrementHealth = changeState("health")(-1);
export const incrementHealth = changeState("health")(1);

export const decrementSun = changeState("sun")(-1);
export const incrementSun = changeState("sun")(1);

export const decrementDefense = changeState("defense")(-1);
export const incrementDefense = changeState("defense")(1);






// const loseHealth("health");

// loseHealth(int)(plant);


// const blueFlower = plantCreator(initialStats);
// const newBlueFlowerState = blueFlower(stateChangingFunction);
