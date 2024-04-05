import { useState } from "react";
import Goal from "./Goal";
import GoalsSettingsButton from "./GoalsSettingsButton";
import { Reward } from "../../App";
import GoalsSettings from "./GoalsSettings";



type Props = {
  goals: string[];
  setGoals: React.Dispatch<React.SetStateAction<string[]>>;
  setShowGoalsSettings: React.Dispatch<React.SetStateAction<boolean>>;
  setReward: React.Dispatch<React.SetStateAction<Reward>>
  goalAmount: number
  setGoalAmount: React.Dispatch<React.SetStateAction<number>>
  showGoalSettings: boolean
  setStreak: React.Dispatch<React.SetStateAction<number>>
  streak: number
};

const Goals = ({ goals, setGoals, setShowGoalsSettings, setReward, goalAmount, setGoalAmount, showGoalSettings, setStreak, streak }: Props) => {
  const [input, setInput] = useState("");

  const removeGoal = (index: number) => {
    const removedGoal = goals.filter((_, i) => i !== index);
    const removedStorage = JSON.parse(localStorage.getItem("goals") || "");
    removedStorage.splice(index, 1);
    localStorage.setItem("goals", JSON.stringify(removedStorage));
    setGoals(removedGoal);
  };

  const completeGoal = (index: number) => {
    const completedGoal = goals.filter((_, i) => i !== index);
    const addStorage = JSON.parse(localStorage.getItem("goals") || "");
    addStorage.splice(index, 1);
    localStorage.setItem("goals", JSON.stringify(addStorage));
    setGoals(completedGoal);
    setStreak(prev => prev + 1)
    localStorage.setItem('streak', JSON.stringify(streak))
    randomizeDopamine()
    setTimeout(() => {
      setReward(null)
    }, 5000)
  }

  const randomizeDopamine = () => {
    const number = Math.floor(Math.random() * 100) + 1
    return (number % 2 === 0) ? setReward(true) : setReward(false)
}

  return (
    <>{showGoalSettings ? <GoalsSettings setShowGoalsSettings={setShowGoalsSettings} goalAmount={goalAmount} setGoalAmount={setGoalAmount} /> : <div className="flex flex-col items-center">
    <h1>Daily Goal list</h1>
    <h2>Goal limit: {goalAmount}</h2>
    {(goals.length < goalAmount) && <input
      className="text-black m-2 w-fit"
      type="text"
      value={input}
      placeholder="Enter goal here..."
      onChange={(e) => setInput(e.currentTarget.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          if (input !== '')
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
            <button onClick={() => completeGoal(i)}>✔</button>
          </div>
        ))
        .slice(0, goalAmount)}
    <div>
      <GoalsSettingsButton setShowGoalsSettings={setShowGoalsSettings} />
    </div>
  </div>}</>
  );
};

export default Goals;
