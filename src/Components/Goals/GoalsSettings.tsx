type Props = {
  setShowGoalsSettings: React.Dispatch<React.SetStateAction<boolean>>;
  goalAmount: number
  setGoalAmount: React.Dispatch<React.SetStateAction<number>>
};

const GoalsSettings = ({ setShowGoalsSettings, goalAmount, setGoalAmount }: Props) => {

  const handleClick = () => {
    setShowGoalsSettings((k) => !k);
  };

  return (
    <div className="w-full h-4/6 flex flex-col items-center">
      Goal Settings
      <label>
        Daily Goal Limit: {goalAmount}
        <input
          type="range"
          min="1"
          max="10"
          value={goalAmount}
          onChange={(e) =>
            setGoalAmount(e.currentTarget.valueAsNumber)
          }
        />
      </label>
      <button onClick={handleClick}>
        <svg
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
        </svg>
      </button>
    </div>
  );
};

export default GoalsSettings;
