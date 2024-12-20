import React from 'react'
import "./CDTimer.css"

export default function CDTimer({seconds, minutes, hours, changeSeconds, changeMinutes, changeHours}) {
    return (
        <div className="timer">
            <div className="d-flex flex-column">
                <label>hr </label>
                <input className="timerinput" value={hours} onChange={changeHours}/>
            </div> {" "}
            <div className="d-flex flex-column">
                <label>min </label>
                <input className="timerinput" value={minutes} onChange={changeMinutes}/>
            </div>{" "}
            <div className="d-flex flex-column">
                <label>sec </label>
                <input className="timerinput" value={seconds} onChange={changeSeconds}/>
            </div>
        </div>
        
    )
}