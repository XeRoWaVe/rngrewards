import { useState } from "react";
import Goal from "./Goal";
import GoalsSettingsButton from "./GoalsSettingsButton";
import { Goaltype, Reward } from "../../App";
import GoalsSettings from "./GoalsSettings";

type Props = {
  goals: Goaltype[];
  setGoals: React.Dispatch<React.SetStateAction<Goaltype[]>>;
  setShowGoalsSettings: React.Dispatch<React.SetStateAction<boolean>>;
  setReward: React.Dispatch<React.SetStateAction<Reward>>;
  goalAmount: number;
  setGoalAmount: React.Dispatch<React.SetStateAction<number>>;
  showGoalSettings: boolean;
  setStreak: React.Dispatch<React.SetStateAction<number>>;
  streak: number;
};

const Goals = ({
  goals,
  setGoals,
  setShowGoalsSettings,
  setReward,
  goalAmount,
  setGoalAmount,
  showGoalSettings,
  setStreak,
  streak,
}: Props) => {
  const [nameInput, setNameInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");
  const [edit, setEdit] = useState(false);

  console.log(goals);
  let nextId = 0;

  const removeGoal = (index: number) => {
    const removedGoal = goals.filter((_, i) => i !== index);
    const removedStorage = JSON.parse(localStorage.getItem("goals") || "");
    removedStorage.splice(index, 1);
    localStorage.setItem("goals", JSON.stringify(removedStorage));
    setGoals(removedGoal);
  };

  const completeGoal = async (index: number) => {
    const completedGoal = goals.filter((_, i) => i !== index);
    const addStorage = JSON.parse(localStorage.getItem("goals") || "");
    addStorage.splice(index, 1);
    localStorage.setItem("goals", JSON.stringify(addStorage));
    setGoals(completedGoal);
    setStreak((prev) => prev + 1);
    localStorage.setItem("streak", `${streak + 1}`);
    randomizeDopamine();
    setTimeout(() => {
      setReward(null);
    }, 10000);
  };

  const randomizeDopamine = () => {
    const number = Math.floor(Math.random() * 100) + 1;
    return number % 2 === 0 ? setReward(true) : setReward(false);
  };

  const createGoal = () => {
    if (nameInput && descriptionInput) {
      setGoals((prev) => [
        ...prev,
        {
          id: nextId++,
          name: nameInput,
          description: descriptionInput,
          done: false,
        },
      ]);
      setNameInput("");
      setDescriptionInput("");
    }
  };

  const handleUpdateGoal = (id: number, name: string, description: string) => {
    if (!name && !description) {
      return;
    }
    const updatedGoals = goals.map((e) => {
      if (e.id === id) {
        e.name = name;
        e.description = description;
      }
      return e;
    });
    setGoals(updatedGoals);
  };

  return (
    <>
      {showGoalSettings ? (
        <GoalsSettings
          setShowGoalsSettings={setShowGoalsSettings}
          goalAmount={goalAmount}
          setGoalAmount={setGoalAmount}
        />
      ) : (
        <div className="flex p-4 flex-col items-center">
          <h1>Daily Goal list</h1>
          <h2>Goal limit: {goalAmount}</h2>
          {goals.length < goalAmount && (
            <>
              <input
                className="text-black m-2 w-fit"
                type="text"
                value={nameInput}
                placeholder="Enter goal name here"
                onChange={(e) => setNameInput(e.currentTarget.value)}
              />
              <input
                className="text-black m-2 w-fit"
                type="text"
                value={descriptionInput}
                placeholder="Enter description here.."
                onChange={(e) => setDescriptionInput(e.currentTarget.value)}
              />
              <button
                className="border-2 shadow-md shadow-black border-black hover:-translate-y-0.5 active:translate-y-0 active:bg-[#4f5f98] rounded-lg px-4 active:shadow-inner hover:bg-[#7289da] active:border-2"
                onClick={createGoal}
              >
                Create goal
              </button>
            </>
          )}
          {!!goals.length &&
            goals
              .map((goal, i) => (
                <div className="w-full m-4">
                  <Goal
                    name={goal.name}
                    id={i}
                    description={goal.description}
                    done={goal.done}
                    edit={edit}
                    updateGoal={handleUpdateGoal}
                    removeGoal={removeGoal}
                    setEdit={setEdit}
                    completeGoal={completeGoal}
                  />
                  {/* <button className="border-2 absolute right-24 shadow-md shadow-black border-black hover:-translate-y-0.5 active:translate-y-0 active:bg-[#4f5f98] rounded-lg px-4 active:shadow-inner hover:bg-[#7289da] active:border-2" onClick={() => setEdit(!edit)}>Edit</button>
            <button className="border-2 absolute right-0  shadow-md shadow-black border-black hover:-translate-y-0.5 active:translate-y-0 active:bg-[#4f5f98] rounded-lg px-3 active:shadow-inner hover:bg-[#7289da] active:border-2" onClick={() => completeGoal(i)}>Complete</button> */}
                </div>
              ))
              .slice(0, goalAmount)}

          <div className="">
            <GoalsSettingsButton setShowGoalsSettings={setShowGoalsSettings} />
          </div>
        </div>
      )}
    </>
  );
};

export default Goals;
