import { useState, useEffect, useRef, useCallback, useContext, useMemo } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import StartTimer from "./StartTimer";
import PauseTimer from "./PauseTimer";
import ResetTimer from "./ResetTimer";
import TimerSettingsButton from "./TimerSettingsButton";
import TimerSettings from "./TimerSettings";
import { timerSettingsContext } from "../../util";
type Props = {}

type Modes = 'work' | 'break'

const Timer = ({}: Props) => {
  const [isPaused, setIsPaused] = useState(true)
  const [mode, setMode] = useState<Modes>('work')
  const [secondsLeft, setSecondsLeft] = useState(0)
  const timerInfo = useContext(timerSettingsContext)
  const [showTimerSettings, setShowTimerSettings] = useState(false);
  const secondsLeftRef = useRef(secondsLeft)
  const isPausedRef = useRef(isPaused)
  const modeRef = useRef(mode)
  // if (isPaused === false) {
  //   isPausedRef.current = false
  // }
  useEffect(() => { // handles life cycle of timer and switches to break when work time runs out
    
    const switchMode = () => {
      const nextMode = modeRef.current === 'work' ? 'break' : 'work'
      const nextSeconds = (nextMode === 'work' ? timerInfo.workMinutes : timerInfo.breakMinutes) * 60

      setMode(nextMode)
      modeRef.current = nextMode

      setSecondsLeft(nextSeconds)
      secondsLeftRef.current = nextSeconds
    }

    secondsLeftRef.current = timerInfo.workMinutes * 60
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

  }, [timerInfo])

  const tick = () => { // lowers seconds to count timer down
    secondsLeftRef.current--
    setSecondsLeft(secondsLeftRef.current)
  }
  
  const handleStart = useCallback(() => {
    setIsPaused(false)
    isPausedRef.current = false
  }, [])

  const handlePause = useCallback(() => {
    setIsPaused(true)
    isPausedRef.current = true
  }, [])

  const handleReset = useCallback(() => {
    setIsPaused(true)
    isPausedRef.current = true
    secondsLeftRef.current = timerInfo.workMinutes * 60
    setSecondsLeft(secondsLeftRef.current)
  }, [])

  const totalSeconds = mode === 'work' 
  ? timerInfo.workMinutes * 60 
  : timerInfo.breakMinutes * 60

  const percentage = useMemo(() => Math.round(secondsLeft / totalSeconds * 100), [secondsLeft, totalSeconds]) 

  const minutes = Math.floor(secondsLeft / 60)
  let seconds: string | number = secondsLeft % 60
  if (seconds < 10 ) seconds = '0'+seconds

  return (
   <>
    {!!showTimerSettings ? <TimerSettings setShowTimerSettings={setShowTimerSettings} /> : <div className="flex  p-4 flex-col items-center rounded-2xl border-2 border-black ">
      <span>Timer</span>
      <CircularProgressbar value={percentage} text={`${minutes}:${seconds}`} className="text-[#7289da]" styles={buildStyles({
        textColor:'',
        pathColor:mode === 'work' ? '#1e2124' : '#7289da',
        trailColor:'#424549'
        
      })} />

      <div className="flex m-4">
        {isPaused ? <StartTimer handleStart={handleStart} /> : <PauseTimer handlePause={handlePause} />}
        <ResetTimer handleReset={handleReset} />
      </div>
      <div className="w-auto ">
        <TimerSettingsButton setShowTimerSettings={setShowTimerSettings} />
      </div>
    </div>}
   </>
  );
};

export default Timer;
