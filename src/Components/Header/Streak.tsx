import { useEffect, useState } from "react";
import { streaks } from "../../util";

type Props = {
  streak: number
}

const Streak = ({streak, }: Props) => {
  const [styledStreak, setStyledStreak] = useState('')
  
   const filteredStreaks = streaks.slice(0, streak) // show streak icons based on how many streaks are set in state

  useEffect(() => { // change the animation based on how many streaks are added
if (streak > 1 && streak < 3) {
      setStyledStreak('animate-pulse')
    } else if (streak >= 4 && streak < 6) {
      setStyledStreak('animate-bounce')
    } else if (streak >= 6 && streak < 9) {
      setStyledStreak('animate-spin')
    } else if (streak >= 9) {
      setStyledStreak('animate-ping')
    }
  }, [streak])
  
  return <div className=" bg-[#424549] rounded-2xl ">
    <ul className="flex">
      {filteredStreaks.map((streaks) => (
        <li key={streaks.id}><svg xmlns="http://www.w3.org/2000/svg" fill={`${streaks.fill}`} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`${styledStreak} w-6 h-6`}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
      </svg>
       </li>
      ))}
    </ul>
  </div>;
};

export default Streak;
