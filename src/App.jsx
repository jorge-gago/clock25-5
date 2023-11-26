import { useState } from 'react'
import './App.css'
import CountButtons from './components/CountsButtons.jsx'
import ActionButtons from './components/ActionButtoms.jsx'
import TimerCount from './components/TimerCount.jsx'

function App() {
  const [session, setSession] = useState(25)
  const [pause, setPause] = useState(5)
  const [active, setActive] = useState(false)
  const [reset, setReset] = useState(false)

  return (
    <div className='container  grid times-box'> 
      <span>
        <TimerCount id = "timer-label" times = {[ session, pause]} state = {active}   reset = {reset}/>
      </span>

      <span className='flex'>
        <CountButtons componentName = "break" value = {pause} set = {setPause} act =  {setActive}/>

        <span className='flex flex-allcenter button-states'>
          <ActionButtons id = "reset" vals = {[[setSession, 25], [setPause, 5],   [setActive, false], [setReset, !reset] ]} text="reset"/>
          

          <ActionButtons id = "start_stop" vals = {[[setActive, !active]]} />
        </span>

        <CountButtons componentName = "session" value = {session} set = {setSession}    act = {setActive}/>  
      </span>
    </div>
  )
}

export default App
