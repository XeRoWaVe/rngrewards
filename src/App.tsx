import { useEffect, useState } from "react";
import Reward from "./Components/Header/Reward";
import Streak from "./Components/Header/Streak";
import DarkMode from "./Components/Darkmode/DarkMode";

import TimerParent from "./Components/Timer/TimerParent";
import GoalsParent from "./Components/Goals/GoalsParent";

export type Reward = true | false | null;

export type Theme = 'light' | 'dark'

export type Goaltype = {
  id: number
  name: string
  description: string
  done: boolean
}

function App() {
  const [reward, setReward] = useState<Reward>(null);
  const [streak, setStreak] = useState(0);
  const [theme, setTheme] = useState<Theme>('light')
  // const [extraBreak, setExtraBreak] = useState(false)

  useEffect(() => {
    if (streak < 1) {
      const savedStreaks = Number(localStorage.getItem("streak"));
      setStreak(savedStreaks);
    }
  }, []);
 

  const clearLocalStorage = () => localStorage.clear(); // clear localstorage dev use only

  return (
    <div 
    className="min-h-screen relative bg-[#4a4c51]">
      <div
        className="m-auto absolute inset-1/4 bg- rounded-2xl  h-fit"
      >
        <div className="flex justify-center items-center border-black  border-2 relative bg-[#1e2124] rounded-2xl h-24">
          <Reward reward={reward} />
          <div className="absolute top-9 right-0 rounded-2xl">
            <Streak streak={streak} />
          </div>
        </div>
        <div className="flex justify-center rounded-2xl w-full h-[590px]">
          <div className="w-full h-full border-2 rounded-2xl border-black max-h-full overflow-auto text-stone-200 font-bold relative bg-[#36393e]">
            <GoalsParent streak={streak} setStreak={setStreak} setReward={setReward} />
          </div>
          <div className="w-full h-full relative text-stone-200 font-bold rounded-2xl bg-[#36393e]">
            <TimerParent />
          </div>
        </div>
        <div className="flex justify-center font-bold rounded-2xl items-center">
          <DarkMode setTheme={setTheme} theme={theme} />
          <button onClick={clearLocalStorage}>clear</button>
        </div>
      </div>
    </div>
  );
}

export default App;
