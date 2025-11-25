export const initialState = {
  monedas: 20,

  danio: 0,
  oleadaVida: 100,


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
}