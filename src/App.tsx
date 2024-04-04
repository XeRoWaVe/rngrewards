import { useEffect, useState } from "react";
import Goals from "./Components/Goals/Goals";
import Reward from "./Components/Header/Reward";
import Streak from "./Components/Header/Streak";
import Timer from "./Components/Timer/Timer";
import DarkMode from "./Components/Darkmode/DarkMode";

export type Reward = true | false | null;

function App() {
  const [goals, setGoals] = useState<string[]>([]);
  const [showGoalsSettings, setShowGoalsSettings] = useState(false);
  const [goalAmount, setGoalAmount] = useState(1);
  const [reward, setReward] = useState<Reward>(null);

  useEffect(() => {
    // save goals to local storage when state gets updated
    if (goals.length > 0) localStorage.setItem("goals", JSON.stringify(goals));
    console.log(localStorage);
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

  const clearLocalStorage = () => localStorage.clear(); // clear localstorage dev use only

  return (
    <div className="min-h-screen relative ">
      <div className="m-auto absolute inset-1/4 bg-white h-fit">
        <div className="flex justify-center border-black rounded-md border-2 relative">
          <Reward reward={reward} />
          <div className="absolute top-1 right-0">
            <Streak />
          </div>
        </div>
        <div className="flex justify-center rounded-md w-full h-[590px]">
          <div className="w-full h-full border-2 border-black">
                <Goals
                  goals={goals}
                  setGoals={setGoals}
                  setShowGoalsSettings={setShowGoalsSettings}
                  showGoalSettings={showGoalsSettings}
                  setReward={setReward}
                  goalAmount={goalAmount}
                  setGoalAmount={setGoalAmount}
                />
          </div>
          <div className="w-full h-full">
                <Timer />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <DarkMode />
          <button onClick={clearLocalStorage}>clear</button>
        </div>
      </div>
    </div>
  );
}

export default App;
