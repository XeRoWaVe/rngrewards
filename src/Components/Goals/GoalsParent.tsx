import { useEffect, useState } from "react";
import Goals from "./Goals";
import { Goaltype, Reward } from "../../App";

type Props = {
    streak: number
    setStreak: React.Dispatch<React.SetStateAction<number>>
    setReward: React.Dispatch<React.SetStateAction<Reward>>
}

const GoalsParent = ({streak, setStreak, setReward}: Props) => {
    const [goals, setGoals] = useState<Goaltype[]>([]);
    const [showGoalsSettings, setShowGoalsSettings] = useState(false);
    const [goalAmount, setGoalAmount] = useState(10);


    useEffect(() => {
        // save goals to local storage when state gets updated
        if (goals.length > 0) localStorage.setItem("goals", JSON.stringify(goals));
      }, [goals]);
    
      useEffect(() => {
        // retrieve goals from local storage upon app mounting
        if (localStorage.length > 0) {
          const parsedGoals = JSON.parse(localStorage.getItem("goals") || "");
          if (goals.length === 0) {
            setGoals(parsedGoals);
          }
        }
      }, []);
    

  return (
    <>
        <Goals
              goals={goals}
              setGoals={setGoals}
              setShowGoalsSettings={setShowGoalsSettings}
              showGoalSettings={showGoalsSettings}
              setReward={setReward}
              goalAmount={goalAmount}
              setGoalAmount={setGoalAmount}
              setStreak={setStreak}
              streak={streak}
            />
            </>
  )
}

export default GoalsParent