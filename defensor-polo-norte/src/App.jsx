import { useContext } from "react";
import { CookieContext, CookieProvider } from "./cookieContext";
import {Game} from "./Game"
import laserImg from "./assets/arbol_laser.png";
import turronImg from "./assets/canion_turron.png";
import carameloImg from "./assets/caramelo_sangriento.png";
import multiplicadorImg from "./assets/multiplicador.png";
import cohetesImg from "./assets/reno_lanza_cohetes.png";
import torreImg from "./assets/torre.png";


export default function App() {
  return (
    <CookieProvider>
      <Game />
    </CookieProvider>
  );
}