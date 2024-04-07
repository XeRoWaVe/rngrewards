import Timer from "./Timer"
import { timerSettingsContext } from "../../util"
import { useState } from "react";
type Props = {
  
}

const TimerParent = ({}: Props) => {
  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState(15);

  return (
    <div 
    >
      <timerSettingsContext.Provider value={{workMinutes, breakMinutes, setWorkMinutes, setBreakMinutes}}>
        <Timer />
      </timerSettingsContext.Provider>
    </div>
  )
}

export default TimerParent