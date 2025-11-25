export const initialState = {
  caramels: 20,
  caramelosObtenidos:10,
  waveNumber: 1,
  damageDealt: 0,
  waveGoal: 100,
  damagePerShot: 1,
  autoShotsPerSecond: 1 ,
  upgrades: [],
};

export function cookieReducer(state, action) {
    let newState = state;

    if (action.type === "CLICK_SHOOT") {
    newState = {
      ...state,
      danio: state.danio + state.damageDealt + state.autoShotsPerSecond,
    };
  } 

  else if (action.type === "AUTO_SHOOT" && state.cookies >= state.multiplierPrice) {
    newState = {
      ...state,
    };
  }
  else if (action.type === "BUY_MULTIPLIER" && state.cookies >= state.multiplierPrice) {
    newState = {
      ...state,
    };
  }
  else if (action.type === "BUY_DAMAGE_UPGRADE" && state.cookies >= state.multiplierPrice) {
    newState = {
      ...state,
    };
  }
  else if (action.type === "NEXT_WAVE" && state.damageDealt >= state.waveGoal) {
    newState = {
      ...state,
      waveGoal: state.waveGoal * 1.1,
      caramelosObtenidos: state.cookies - state.multiplierPrice,
      multiplierPrice: Math.round(state.multiplierPrice * state.multiplierPriceIncrement),
    };
  }
}