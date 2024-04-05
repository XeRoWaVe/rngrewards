import { createContext } from "react";

type timerContext = {
  workMinutes: number;
  breakMinutes: number;
  setWorkMinutes: React.Dispatch<React.SetStateAction<number>>;
  setBreakMinutes: React.Dispatch<React.SetStateAction<number>>;
  setShowTimerSettings: React.Dispatch<React.SetStateAction<boolean>>
};

type goalContext = {
  goalAmount: number;
  setGoalAmount: React.Dispatch<React.SetStateAction<number>>;
};

export const timerSettingsContext = createContext<timerContext>({workMinutes: 0, breakMinutes: 0, setWorkMinutes: () => {}, setBreakMinutes: () => {}, setShowTimerSettings: () => {}});
export const goalsSettingsContext = createContext<goalContext>({goalAmount: 0, setGoalAmount: () => {}});

export const streaks = [
  {
    id: 1,
    fill: 'none'
  },
  {
    id: 2,
    fill: 'none'
  },
  {
    id: 3,
    fill: 'none'
  },
  {
    id: 4,
    fill: 'none'
  },
  {
    id: 5,
    fill: 'none'
  },
  {
    id: 6,
    fill: 'none'
  },
  {
    id: 7,
    fill: 'none'
  }
]