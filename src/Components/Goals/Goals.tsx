import { useContext, useState } from "react";
import Goal from "./Goal";
import GoalsSettingsButton from "./GoalsSettingsButton";
import { goalsSettingsContext } from "../../util";

type Props = {
  goals: string[];
  setGoals: React.Dispatch<React.SetStateAction<string[]>>;
  setShowGoalsSettings: React.Dispatch<React.SetStateAction<boolean>>;
};

const Goals = ({ goals, setGoals, setShowGoalsSettings }: Props) => {
  const goalsSettingsInfo: any = useContext(goalsSettingsContext);
  const [input, setInput] = useState("");

  const removeGoal = (index: number) => {
    const removedGoal = goals.filter((_, i) => i !== index);
    const removedStorage = JSON.parse(localStorage.getItem("goals") || "");
    removedStorage.splice(index, 1);
    localStorage.setItem("goals", JSON.stringify(removedStorage));
    setGoals(removedGoal);
  };

  return (
    <div className="flex flex-col items-center">
      <h1>Daily Goal list</h1>
      <h2>Goal limit: {goalsSettingsInfo.goalAmount}</h2>
      {(goals.length < goalsSettingsInfo.goalAmount) && <input
        className="text-black m-2 w-fit"
        type="text"
        value={input}
        placeholder="Enter goal here..."
        onChange={(e) => setInput(e.currentTarget.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setGoals((prev) => [...prev, input]);
            setInput("");
          }
        }}
      />}
      {!!goals.length &&
        goals
          .map((goal, i) => (
            <div key={i} className="w-full m-2">
              <Goal goal={goal} />
              <button onClick={() => removeGoal(i)}>❌</button>
              <button>✔</button>
            </div>
          ))
          .slice(0, goalsSettingsInfo.goalAmount)}
      <div>
        <GoalsSettingsButton setShowGoalsSettings={setShowGoalsSettings} />
      </div>
    </div>
  );
};

export default Goals;
