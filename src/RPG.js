
// Store State equivalent
export const storeState = (initialStats = {}) => {
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

// export const changeState = (prop) =>  {
//   return (value) => {
//     return (state) => {
//       if (typeof(value) === "number") ({
//       ...state,
//       [prop] : (state[prop] || 0) + value
//       }); else ({
//         [prop]: value
//       })
//     };
//   }
// }

const addFunction = (prop) => {
  return (functionToAdd) => {
    return (state) => ({
      ...state,
      [prop]: functionToAdd
    });
  }
}

// instantiate player
const initialStats = { hunger: 10, sun: 10, health: 10, maxHealth: 10, attack: 5, defense: 5, leafCount: 1 };
const playerPlant = storeState(initialStats)
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


export const handleCombatModule = function(enemyAttackValue) {
      const damage = enemyAttackValue - this.defense;
      return damage;
}

export const addCombatHandler = addFunction("handleCombat")(handleCombatModule);

//const newPlant = myPlant(addCombatHandler);

//const aphid = storeState({health: 5, attack: 2, defense: 3});


// playerPlant vs aphid



// function handleCombat (attacker, defender) {

//   const attackerAttackVal = attacker().attack;
//   const plantDefenseVal = defender().defense;
//   const damage = attackerAttackVal - plantDefenseVal;
  
//   for (let i = 0; i <= damage; i++) {
//     defender(decrementHealth);
//   }
// }

// canDefend = stateChange("health")

// myPlant = {
//   attack: 5,
//   defense: 5,
//   handleCombat: (enemyAttackValue) => {
//     const damage = enemyAttackValue - defense;
//     this.health -= damage;
//   }
// }

// export const decreaseHealth = changeState("health");

// const newHealth = myPlant().handleCombat(3);
// myPlant(decreaseHealth(damage));

// const canDefend = function (entity) {
//   const obj = {
//     defend: function(enemyAttack) {
//       return enemyAttack - this.defense;
//     }
//   }
//   return obj;
// }

// const myPlant(canDefend); 

// const loseHealth("health");

// loseHealth(int)(plant);


// const blueFlower = plantCreator(initialStats);
// const newBlueFlowerState = blueFlower(stateChangingFunction);
