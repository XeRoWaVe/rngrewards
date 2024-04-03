// import ReactSlider from "react-slider";
import { timerSettingsContext } from "../../util";
import { useContext} from "react";

type Props = {
};

const TimerSettings = ({}: Props) => {
  const timerSettingsInfo: any = useContext(timerSettingsContext);

  const handleClick = () => {
    timerSettingsInfo.setShowTimerSettings((k: any) => !k);
  };

  return (
    <div className="w-full text-center">
      Timer Settings
      <label className="block">
        Work {timerSettingsInfo.workMinutes} :00
        <input
          className=""
          type="range"
          min="1"
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
          min="1"
          max="5"
          value={timerSettingsInfo.breakMinutes}
          onChange={(e) =>
            timerSettingsInfo.setBreakMinutes(e.currentTarget.valueAsNumber)
          }
        />
      </label>
      <button onClick={handleClick}><svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg></button>
    </div>
  );
};

export default TimerSettings;
