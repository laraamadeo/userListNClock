import { useEffect, useState } from "react"
import Button from "./Button"
import Clock from "./Clock"
import { useNavigate } from "react-router-dom"
import moment from "moment"

export default () => {
    const [count, setCount] = useState(0)
    const navigate = useNavigate()
    const [currentTime, setCurrentTime] = useState(moment().format("HH:mm:ss"))
    const [isRunning, setIsRunning] = useState(true)
    const [stoppedTime, setStoppedTime] = useState(null)

    useEffect(() => {
        if (isRunning) {
            const timer = setInterval(() => {
                setCurrentTime(moment().format("HH:mm:ss"))
            }, 1000)
            return () => clearInterval(timer)
        }
    }, [])
    const handleStop = () => {
        setStoppedTime(moment().format("HH:mm:ss"))
        setIsRunning(false)
    }

    const handleResume = () => {
        setCurrentTime(moment().format("HH:mm:ss"))
        setIsRunning(true)
    }
    return <>
        <div className="w-full border rounded-md px-6 py-4 flex flex-col sm:flex-row sm:justify-between items-center gap-2">
            <div className="flex gap-8 items-center">
                <p className="cursor-pointer" onClick={() => navigate("/home")}>Home</p>
                <p className="cursor-pointer" onClick={() => navigate("/profile")}>Profile</p>
            </div>
            <div className="flex gap-4 justify-center items-center">
                <Button label={"-"} onclick={() => setCount(count - 1)} />
                <p>{count}</p>
                <Button label={"+"} onclick={() => setCount(count + 1)} />
            </div>

            <div className="flex sm:flex-row flex-col gap-4 justify-center items-center">
                <Clock currentTime={currentTime} isRunning={isRunning} stoppedTime={stoppedTime} />
                <Button label={"play"} onclick={handleResume} />
                <Button label={"stop"} onclick={handleStop} />
            </div>

        </div>
    </>
}