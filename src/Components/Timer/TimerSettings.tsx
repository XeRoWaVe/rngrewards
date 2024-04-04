type Props = {
  workMinutes: number
  breakMinutes: number
  setWorkMinutes: React.Dispatch<React.SetStateAction<number>>
  setBreakMinutes: React.Dispatch<React.SetStateAction<number>>
  setShowTimerSettings: React.Dispatch<React.SetStateAction<boolean>>
};

const TimerSettings = ({workMinutes, breakMinutes, setWorkMinutes, setBreakMinutes, setShowTimerSettings}: Props) => {


  const handleClick = () => {
    setShowTimerSettings((k: any) => !k);
  };

  return (
    <div className="w-full text-center">
      Timer Settings
      <label className="block">
        Work {workMinutes} :00
        <input
          className=""
          type="range"
          min="1"
          max="90"
          value={workMinutes}
          onChange={(e) =>
            setWorkMinutes(e.currentTarget.valueAsNumber)
          }
        />
      </label>
      <label className="block">
        Break Minutes: {breakMinutes}:00
        <input
          type="range"
          min="1"
          max="5"
          value={breakMinutes}
          onChange={(e) =>
            setBreakMinutes(e.currentTarget.valueAsNumber)
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
