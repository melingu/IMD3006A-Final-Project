import React, {useState, useEffect} from "react";
import CDTimer from "./CDTimer";
import "./CDTimer.css"

export default function Countdown(){
    const [hours, setHours]=useState(0);
    const [minutes, setMinutes]=useState(0);
    const [seconds, setSeconds]=useState(0);

    const [isRunning, setIsRunning] = useState(null);

    useEffect(() => {
        let interval;
        if(isRunning){
            interval = setInterval (() => {
                if(seconds>0){
                    setSeconds((seconds) => seconds - 1);
                }
                else if(minutes>0){
                    setMinutes((minutes) => minutes - 1);
                    setSeconds(59);
                }
                else if(hours>0){
                    setHours((hours) => hours - 1);
                    setMinutes(59);
                    setSeconds(59);
                }
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [seconds, minutes, hours, isRunning]);

    function startTimer(){
        if(hours !==0 || minutes !==0 || seconds !== 0){
            setIsRunning(true);
        }
        else {
            window.alert("No time entered in countdown!")
        }
    }
    function pauseTimer(){
            setIsRunning(false);
    }
    function stopTimer(){
        resetTimer();    
    }
    function resetTimer(){
        setIsRunning(false);
        setSeconds(0);
        setMinutes(0);
        setHours(0);
    }

    const changeSeconds=(e)=>{
        setSeconds(e.target.value)
    }
    const changeMinutes=(e)=>{
        setMinutes(e.target.value)
    }
    const changeHours=(e)=>{
        setHours(e.target.value)
    }

    return (
        <div className="countdown">
            <CDTimer seconds={seconds} minutes={minutes} hours={hours}
            changeSeconds={changeSeconds} changeMinutes={changeMinutes} changeHours={changeHours}/>
        
        <br />
            <div className="timer">
            {!isRunning && (<button className="start-button" onClick={startTimer}>Start</button>)}
            {isRunning && (<button className="stop-button" onClick={pauseTimer}>Pause</button>)}
            <button className="reset-button" onClick={stopTimer}>Reset</button>
            </div>
        </div>
    );
}