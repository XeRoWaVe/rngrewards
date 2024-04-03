import { useState, useEffect, useContext, useRef, useCallback } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import StartTimer from "./StartTimer";
import PauseTimer from "./PauseTimer";
import ResetTimer from "./ResetTimer";
import TimerSettingsButton from "./TimerSettingsButton";
import { timerSettingsContext } from "../../util";

type Props = {}

type Modes = 'work' | 'break'

const purple = '#600BDB';
const silver = '#C0C0C0';

const Timer = ({}: Props) => {
  const timerSettingsInfo = useContext(timerSettingsContext)
  const [isPaused, setIsPaused] = useState(true)
  const [mode, setMode] = useState<Modes>('work')
  const [secondsLeft, setSecondsLeft] = useState(0)
  console.log(isPaused)
  const secondsLeftRef = useRef(secondsLeft)
  const isPausedRef = useRef(isPaused)
  const modeRef = useRef(mode)
  // if (isPaused === false) {
  //   isPausedRef.current = false
  // }
  useEffect(() => {

    const switchMode = () => {
      const nextMode = modeRef.current === 'work' ? 'break' : 'work'
      const nextSeconds = (nextMode === 'work' ? timerSettingsInfo.workMinutes : timerSettingsInfo.breakMinutes) * 60

      setMode(nextMode)
      modeRef.current = nextMode

      setSecondsLeft(nextSeconds)
      secondsLeftRef.current = nextSeconds
    }

    secondsLeftRef.current = timerSettingsInfo.workMinutes * 60
    setSecondsLeft(secondsLeftRef.current)

   const interval = setInterval(() => {
      if (isPausedRef.current){
        return;
      }
      if (secondsLeftRef.current === 0) {
       return switchMode()
      }

      tick()

    }, 1000)

    return () => clearInterval(interval)

  }, [timerSettingsInfo])



  const tick = () => {
    secondsLeftRef.current--
    setSecondsLeft(secondsLeftRef.current)
  }
  
  const handleStart = () => {
    setIsPaused(false)
    isPausedRef.current = false
  }

  const handlePause = () => {
    setIsPaused(true)
    isPausedRef.current = true
  }

  const handleReset = () => {
    setIsPaused(true)
    isPausedRef.current = true
    secondsLeftRef.current = timerSettingsInfo.workMinutes * 60
    setSecondsLeft(secondsLeftRef.current)
  }

  const totalSeconds = mode === 'work' 
  ? timerSettingsInfo.workMinutes * 60 
  : timerSettingsInfo.breakMinutes * 60

  const percentage = Math.round(secondsLeft / totalSeconds * 100) 

  const minutes = Math.floor(secondsLeft / 60)
  let seconds: string | number = secondsLeft % 60
  if (seconds < 10 ) seconds = '0'+seconds

  return (
    <div className="flex flex-col items-center border-2 border-black ">
      <span>Timer</span>
      <CircularProgressbar value={percentage} text={`${minutes}:${seconds}`} styles={buildStyles({
        textColor:'',
        pathColor:mode === 'work' ? purple : silver,
        trailColor:'rgba(255,255,255,.2)'
      })} />

      <div className="flex m-4">
        {isPaused ? <StartTimer handleStart={handleStart} /> : <PauseTimer handlePause={handlePause} />}
        <ResetTimer handleReset={handleReset} />
      </div>
      <div className="w-auto ">
        <TimerSettingsButton />
      </div>
    </div>
  );
};

export default Timer;
