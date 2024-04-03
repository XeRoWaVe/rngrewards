// import ReactSlider from "react-slider";
import { timerSettingsContext } from "../../util";
import { useContext, useState } from "react";

type Props = {
  setShowTimerSettings: React.Dispatch<React.SetStateAction<boolean>>;
};

const TimerSettings = ({ setShowTimerSettings }: Props) => {
  const timerSettingsInfo: any = useContext(timerSettingsContext);

  const handleClick = () => {
    setShowTimerSettings((k) => !k);
  };

  return (
    <div className="w-full text-center">
      Timer Settings
      <label className="block">
        Work {timerSettingsInfo.workMinutes} :00
        <input
          className=""
          type="range"
          min="15"
          max="90"
          value={timerSettingsInfo.workMinutes}
          onChange={(e) =>
            timerSettingsInfo.setWorkMinutes(e.currentTarget.valueAsNumber)
          }
        />
      </label>
      <label className="block">
        Break Minutes: {timerSettingsInfo.breakMinutes}:00
        <input
          type="range"
          min="5"
          max="25"
          value={timerSettingsInfo.breakMinutes}
          onChange={(e) =>
            timerSettingsInfo.setBreakMinutes(e.currentTarget.valueAsNumber)
          }
        />
      </label>
      <button onClick={handleClick}>Close</button>
    </div>
  );
};

export default TimerSettings;
