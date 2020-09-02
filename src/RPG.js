
// Store State equivalent
const plantCreator = (initialStats = {}) => {
  let currentState = initialStats;
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}

const blueFlower = plantCreator(initialStats);
const newBlueFlowerState = blueFlower(stateChangingFunction);
