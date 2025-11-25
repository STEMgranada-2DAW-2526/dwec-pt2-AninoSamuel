import { useEffect, useReducer } from 'react'
import './App.css'

import laserImg from "./assets/arbol_laser.png";
import turronImg from "./assets/canion_turron.png";
import carameloImg from "./assets/caramelo_sangriento.png";
import multiplicadorImg from "./assets/multiplicador.png";
import cohetesImg from "./assets/reno_lanza_cohetes.png";
import torreImg from "./assets/torre.png";


export const initialState = {
  caramels: 20,
  waveNumber: 1,
  damageDealt: 0,
  waveGoal: 100,
  damagePerShot: 1,
  damagePerShotPrice: 10,
  autoShotsPerSecond: 1 ,
  upgrades: [],
};

export default function App() {

 function cookieReducer(state, action) {
    let newState = state;

    if (action.type === "CLICK_SHOOT") {
    newState = {
      ...state,
      damageDealt: state.damageDealt + state.damagePerShot,
    };
  } 

  else if (action.type === "AUTO_SHOOT" ) {
    newState = {
      ...state,
      damageDealt: state.damageDealt + state.autoShotsPerSecond ,
    };
  }
  else if (action.type === "BUY_MULTIPLIER" && state.caramels >= state.damagePerShotPrice) {
    newState = {
      ...state,
        damagePerShot: state.damagePerShot + 1 ,
        damagePerShotPrice: Math.round(state.damagePerShotPrice * 1.2),
        caramels: state.caramels - Math.round(state.damagePerShotPrice),
    };
  }
  else if (action.type === "BUY_DAMAGE_UPGRADE1" && state.caramels >= 15) {
    newState = {
      ...state,
      autoShotsPerSecond: state.autoShotsPerSecond + 2,
      caramels: state.caramels - 15,
    }; 
  }
  else if (action.type === "BUY_DAMAGE_UPGRADE2" && state.caramels >= 30) {
    newState = {
      ...state,
      autoShotsPerSecond: state.autoShotsPerSecond + 5,
      caramels: state.caramels - 30,
    }; 
  }
  else if (action.type === "BUY_DAMAGE_UPGRADE3" && state.caramels >= 50) {
    newState = {
      ...state,
      autoShotsPerSecond: state.autoShotsPerSecond + 10,
      caramels: state.caramels - 50,
    }; 
  }
  else if (action.type === "NEXT_WAVE" && state.damageDealt >= state.waveGoal) {
    newState = {
      ...state,
      waveGoal: Math.round(state.waveGoal * 1.1),
      waveNumber: state.waveNumber + 1,
      caramels: state.caramels + 10,
      damageDealt: 0,
    };
  }
  return newState;
}


  const [state, dispatch] = useReducer(cookieReducer, initialState);

  useEffect(() => {
    const timer = setInterval(() => {
        dispatch({ type: "AUTO_SHOOT" });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

 return (
    <>
      <div className='row justify-content-center'>
        <p className='col-md-2 col-12'>Tienes {state.caramels} caramelos 
          <br />
           <img className='img-fluid' src={carameloImg} style={{ width: "100px", height: "100px" }} />
        </p>

        <button className='col-5' onClick={() => dispatch({ type: "CLICK_SHOOT" })}>
          <img className='img-fluid' src={turronImg} style={{ width: "100px", height: "100px" }} />
        </button>

        <button className='col-md-2 col-12' onClick={() => dispatch({ type: "BUY_MULTIPLIER" })}>
          <img className='img-fluid' src={multiplicadorImg} style={{ width: "100px", height: "100px" }} />
        </button>

        <button className='col-md-2 col-12' onClick={() => dispatch({ type: "NEXT_WAVE" })}>
          🚚<p>Cambiar Oleada</p>
        </button>
        <p className='col-md-2 col-12'>{state.waveNumber} NUMERO DE OLEADA</p>
        <p className='col-md-2 col-12'>{state.waveGoal} MARCADOR OLEADA</p>
        <p className='col-md-2 col-12'>{state.damageDealt}/{state.waveGoal} DAÑO TOTAL HECHO</p>
        <p className='col-md-2 col-12'>{state.damagePerShot} DAÑO POR CLICK</p>
        <p className='col-md-2 col-12'>{state.autoShotsPerSecond} DAÑO POR SEGUNDO </p>
        <p className='col-md-2 col-12'>{state.damagePerShotPrice} PRECIO MULTIPLICADOR  </p>
        

        <button className='col-md-2 col-12' onClick={() => dispatch({ type: "BUY_DAMAGE_UPGRADE1" })}>
          <img className='img-fluid' src={laserImg} style={{ width: "100px", height: "100px" }} />
          Precio: 15 Caramelos  
        </button>

        <button className='col-md-2 col-12' onClick={() => dispatch({ type: "BUY_DAMAGE_UPGRADE2" })}>
          <img className='img-fluid' src={cohetesImg} style={{ width: "100px", height: "100px" }} />
          Precio: 30 Caramelos
        </button>

        <button className='col-md-2 col-12' onClick={() => dispatch({ type: "BUY_DAMAGE_UPGRADE3" })}>
          <img className='img-fluid' src={torreImg} style={{ width: "100px", height: "100px" }} />
          Precio: 50 Caramelos
        </button>

      </div>
    </>
  )

}