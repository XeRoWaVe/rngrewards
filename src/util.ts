import { createContext } from "react";

type timerContext = {
  workMinutes: number;
  breakMinutes: number;
  setWorkMinutes: React.Dispatch<React.SetStateAction<number>>;
  setBreakMinutes: React.Dispatch<React.SetStateAction<number>>;
  // setShowTimerSettings: React.Dispatch<React.SetStateAction<boolean>>
  // showTimerSettings: boolean
};

type goalContext = {
  goalAmount: number;
  setGoalAmount: React.Dispatch<React.SetStateAction<number>>;
};

type Streaks = {
  id: number
  fill: string
}



export const timerSettingsContext = createContext<timerContext>({workMinutes: 0, breakMinutes: 0, setWorkMinutes: () => {}, setBreakMinutes: () => {}});
export const goalsSettingsContext = createContext<goalContext>({goalAmount: 0, setGoalAmount: () => {}});

export const streaks: Streaks[] = [
{
  id: 1,
  fill: 'orange'
},
{
  id: 2,
  fill: 'orange'
},
{
  id: 3,
  fill: 'orange'
},
{
  id: 4,
  fill: 'orange'
},
{
  id: 5,
  fill: 'orange'
},
{
  id: 6,
  fill: 'orange'
},
{
  id: 7,
  fill: 'orange'
},
{
  id: 8,
  fill: 'orange'
},
{
  id: 9,
  fill: 'orange'
},
{
  id: 10,
  fill: 'orange'
},

]