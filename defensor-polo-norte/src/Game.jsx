import { useContext } from "react";
import { CookieContext, CookieProvider } from "./cookieContext";

export default function Game() {
  const { state, dispatch } = useContext(CookieContext);

  console.log(state)

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