import { createContext } from "react";

type timerContext = {
  workMinutes: number;
  breakMinutes: number;
  setWorkMinutes: React.Dispatch<React.SetStateAction<number>>;
  setBreakMinutes: React.Dispatch<React.SetStateAction<number>>;
};

type goalContext = {
  goalAmount: number;
  setGoalAmount: React.Dispatch<React.SetStateAction<number>>;
};

export const timerSettingsContext = createContext<timerContext | null>(null);
export const goalsSettingsContext = createContext<goalContext | null>(null);
