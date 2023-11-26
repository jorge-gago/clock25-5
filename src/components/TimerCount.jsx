import { useState,useEffect } from "react";
import DisplayTime from "./DisplayTime.jsx";

const TimerCount = ({id = null , times = [0, 0], state = false, reset=null}) => {

    const [time, setTime] = useState((times[0]*60*1000))
    const [timer, setTimer] = useState(time)
    const [relax, setRelax] = useState(false)
    const [play, setPlay] = useState(false)

    const IntervalTime = 50

    useEffect( () => {
        if ( state && timer > 0) {
            updateTimer()
        }

        else if ( state && timer <= 0){
            updateTimes()
        }
    }, [timer, time])
 
    useEffect( () => {
        setTime(Date.now() + timer)
        }
    , [state])

    useEffect( () => {
        setRelax(false)
        setTimer((times[0]*60*1000))
    }, [times[0], times[1]])

    useEffect( () => {
        setTime(times[0]*60*1000)
        setRelax(false)
        setPlay(false)
        setTimeout( () => {
            setTimer(times[0]*60*1000)
        }, IntervalTime)
    }
    , [reset])

    const updateTimer = () => {
        const inter = setInterval( () => { 
            clearInterval(inter)
            setTimer(time - Date.now())     
        }
        ,IntervalTime)
    }

    const updateTimes = () => {
        const element = document.querySelector("#beep")
        element.load()
        element.play() 
        setPlay(true)
        setTimeout(() => {
            setRelax(!relax)
            setPlay(false)
            setTime((times[!relax*1]*60*1000) + Date.now() )
            setTimer(time)
        }
        , 1000)
    }

    return (
        <div className="flex flex-allcenter">
            <span className="flex-c">
                <div id = {id}  className="grid-center time-number">{!relax?"session":"break"}</div>
            
                <DisplayTime time={timer}/>
                
                <audio id = "beep" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio>
            </span> 
        </div>
        )
}

export default TimerCount