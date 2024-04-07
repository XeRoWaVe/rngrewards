import { useContext } from "react";
import { timerSettingsContext } from "../../util";

type Props = {
  setShowTimerSettings: React.Dispatch<React.SetStateAction<boolean>>
};

const TimerSettings = ({setShowTimerSettings}: Props) => {
const timerInfo = useContext(timerSettingsContext)

  const handleClick = () => {
    setShowTimerSettings((k: any) => !k);
  };

  return (
    <div className="w-full text-center">
      Timer Settings
      <label className="block">
        Work {timerInfo.workMinutes} :00
        <input
          className=""
          type="range"
          min="1"
          max="90"
          value={timerInfo.workMinutes}
          onChange={(e) =>
            timerInfo.setWorkMinutes(e.currentTarget.valueAsNumber)
          }
        />
      </label>
      <label className="block">
        Break Minutes: {timerInfo.breakMinutes}:00
        <input
          type="range"
          min="1"
          max="5"
          value={timerInfo.breakMinutes}
          onChange={(e) =>
            timerInfo.setBreakMinutes(e.currentTarget.valueAsNumber)
          }
        />
      </label>
      <button className="border-2 shadow-md shadow-black border-black hover:-translate-y-0.5 active:translate-y-0 active:bg-[#4f5f98] rounded-lg px-4 active:shadow-inner hover:bg-[#7289da] active:border-2" onClick={handleClick}><svg
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
