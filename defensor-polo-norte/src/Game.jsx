import { useContext } from "react";
import { CookieContext, CookieProvider } from "./cookieContext";

import laserImg from "./assets/arbol_laser.png";
import turronImg from "./assets/canion_turron.png";
import carameloImg from "./assets/caramelo_sangriento.png";
import multiplicadorImg from "./assets/multiplicador.png";
import cohetesImg from "./assets/reno_lanza_cohetes.png";
import torreImg from "./assets/torre.png";


export default function Game() {
  const { state, dispatch } = useContext(CookieContext);

  console.log(state)

  return (
    <>
      <div className='row justify-content-center'>
        <p className='col-md-2 col-12'>{state.caramels} 🍪</p>

        <button className='col-5' onClick={() => dispatch({ type: "CLICK_SHOOT" })}>
          <img className='img-fluid' src={turronImg} style={{ width: "100px", height: "100px" }} />
        </button>
        <p className='col-md-2 col-12'>{state.waveNumber} 🍪</p>
        <p className='col-md-2 col-12'>{state.waveGoal} 🍪</p>
      </div>
    </>
  )
}