export default function Game() {
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