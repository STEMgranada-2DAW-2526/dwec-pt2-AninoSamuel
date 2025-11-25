import { useContext } from "react";
import { CookieContext, CookieProvider } from "./cookieContext";

import laserImg from "./assets/arbol_laser.png";
import turronImg from "./assets/canion_turron.png";
import carameloImg from "./assets/caramelo_sangriento.png";
import multiplicadorImg from "./assets/multiplicador.png";
import cohetesImg from "./assets/reno_lanza_cohetes.png";
import torreImg from "./assets/torre.png";

function Game() {
  const { state, dispatch } = useContext(CookieContext);

  return (
    <>
      <div className='row justify-content-center'>
        <p className='col-md-2 col-12'>{state.caramels} 🍪</p>
        <p className='col-md-2 col-12'>{state.waveNumber} 🍪</p>
        <p className='col-md-2 col-12'>{state.waveGoal} 🍪</p>
      </div>
    </>
  )
}

export default function App() {
  return (
    <CookieProvider>
      <Game />
    </CookieProvider>
  );
}