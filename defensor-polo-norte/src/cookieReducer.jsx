export const initialState = {
  caramels: 20,
  damageDealt: 0,
  waveGoal: 100,
  damagePerShot: 1,
  autoShotsPerSecond: 1 ,
  upgrades: [],


  clickMultiplier: 1,
  multiplierPrice: 50,
  multiplierPriceIncrement: 1.2,

  canionCount: 0,
  canionPrice: 15,
  canionPriceIncrement: 1.15,

  renosCount: 0,
  renosPrice: 30,
  renosPriceIncrement: 1.2,

  arbolCount: 0,
  arbolPrice: 50,
  arbolPriceIncrement: 1.2,
};

export function cookieReducer(state, action) {
    let newState = state;

    if (action.type === "CLICK_SHOOT") {
    newState = {
      ...state,
      danio: state.danio + state.clickMultiplier,
    };
  } 

  else if (action.type === "AUTO_SHOOT" && state.cookies >= state.multiplierPrice) {
    newState = {
      ...state,
      clickMultiplier: state.clickMultiplier + 1,
      cookies: state.cookies - state.multiplierPrice,
      multiplierPrice: Math.round(state.multiplierPrice * state.multiplierPriceIncrement),
    };
  }
  else if (action.type === "BUY_MULTIPLIER" && state.cookies >= state.multiplierPrice) {
    newState = {
      ...state,
      clickMultiplier: state.clickMultiplier + 1,
      cookies: state.cookies - state.multiplierPrice,
      multiplierPrice: Math.round(state.multiplierPrice * state.multiplierPriceIncrement),
    };
  }
  else if (action.type === "BUY_DAMAGE_UPGRADE" && state.cookies >= state.multiplierPrice) {
    newState = {
      ...state,
      clickMultiplier: state.clickMultiplier + 1,
      cookies: state.cookies - state.multiplierPrice,
      multiplierPrice: Math.round(state.multiplierPrice * state.multiplierPriceIncrement),
    };
  }
  else if (action.type === "NEXT_WAVE" && state.cookies >= state.multiplierPrice) {
    newState = {
      ...state,
      clickMultiplier: state.clickMultiplier + 1,
      cookies: state.cookies - state.multiplierPrice,
      multiplierPrice: Math.round(state.multiplierPrice * state.multiplierPriceIncrement),
    };
  }
}