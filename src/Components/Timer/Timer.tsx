import { useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import StartTimer from "./StartTimer";
import PauseTimer from "./PauseTimer";
import ResetTimer from "./ResetTimer";
import TimerSettingsButton from "./TimerSettingsButton";

type Props = {
  setShowTimerSettings: React.Dispatch<React.SetStateAction<boolean>>;
};

const Timer = ({ setShowTimerSettings }: Props) => {
  const [time, setTime] = useState("00:00:00");

  let value = 0;

  return (
    <div className="flex flex-col items-center border-2 border-black ">
      <span>Timer</span>
      <CircularProgressbar value={value} text={`${time}`} />

      <div className="flex m-4">
        <StartTimer />
        <PauseTimer />
        <ResetTimer />
      </div>
      <div className="w-auto ">
        <TimerSettingsButton setShowTimerSettings={setShowTimerSettings} />
      </div>
    </div>
  );
};

export default Timer;
