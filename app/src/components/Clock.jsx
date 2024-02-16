import { useEffect, useState } from "react"
import Button from "./Button"
import { MemoryRouter } from "react-router-dom"
import moment from "moment";


export default ({ currentTime, isRunning, stoppedTime }) => {
    return <>

        <div className="w-[80px]">
            <p>{isRunning ? currentTime : stoppedTime}</p>
        </div>

    </>
}