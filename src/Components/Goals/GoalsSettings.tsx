import { useContext } from "react";
import { goalsSettingsContext } from "../../util";

type Props = {
  setShowGoalsSettings: React.Dispatch<React.SetStateAction<boolean>>;
};

const GoalsSettings = ({ setShowGoalsSettings }: Props) => {
  const goalSettingsInfo: any = useContext(goalsSettingsContext);

  const handleClick = () => {
    setShowGoalsSettings((k) => !k);
  };

  return (
    <div className="w-full h-4/6 flex flex-col items-center">
      Goal Settings
      <label>
        Daily Goal Limit: {goalSettingsInfo.goalAmount}
        <input
          type="range"
          min="1"
          max="10"
          value={goalSettingsInfo.goalAmount}
          onChange={(e) =>
            goalSettingsInfo.setGoalAmount(e.currentTarget.valueAsNumber)
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
