import { useContext } from "react";
import { CookieContext, CookieProvider } from "./cookieContext";

import laserImg from "./assets/arbol_laser.png";
import turronImg from "./assets/canion_turron.png";
import carameloImg from "./assets/caramelo_sangriento.png";
import multiplicadorImg from "./assets/multiplicador.png";
import cohetesImg from "./assets/reno_lanza_cohetes.png";
import torreImg from "./assets/torre.png";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div className='container'>
      <div className='row justify-content-center'>
        <h1 className='col-12'>{Math.round(state.caramels)} 🍪</h1>

        <button className='col-5' onClick={() => dispatch({ type: "CLICK_SHOOT" })}>
          <img className='img-fluid' src={turronImg} style={{ width: "100px", height: "100px" }} />
        </button>
      </div>

      <div className='row justify-content-center'>
        <p className='col-md-2 col-12'>{state.cursorPrice} 🍪</p>
        <p className='col-md-2 col-12'>{state.multiplierPrice} 🍪</p>
        <p className='col-md-2 col-12'>{state.grandmaPrice} 🍪</p>
      </div>
    </div>
    </>
  )
}

export default App
