import { useContext } from "react";
import { CookieContext, CookieProvider } from "./cookieContext";

import cookieImg from "./assets/arbol_laser.png";
import cursorImg from "./assets/canion_turron.png";
import grandmaImg from "./assets/caramelo_sangriento.png";
import multiplierImg from "./assets/multiplicador.png";
import cohetesImg from "./assets/reno_lanza_cohetes.png";
import torreImg from "./assets/torre.png";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div className='container'>
      <div className='row justify-content-center'>
        <h1 className='col-12'>{Math.round(state.cookies)} 🍪</h1>

        <button className='col-5' onClick={() => dispatch({ type: "CLICK_COOKIE" })}>
          <img className='img-fluid' src={cookieImg} style={{ width: "100px", height: "100px" }} />
        </button>
      </div>

      <div className='row justify-content-center'>
        <button className='col-md-2 col-12' onClick={() => dispatch({ type: "BUY_CURSOR" })}>
          <img className='img-fluid' src={cursorImg} style={{ width: "100px", height: "100px" }} />
          x{state.cursorCount}
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
