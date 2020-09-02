
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

// const loseHealth("health");

// loseHealth(int)(plant);


// const blueFlower = plantCreator(initialStats);
// const newBlueFlowerState = blueFlower(stateChangingFunction);
