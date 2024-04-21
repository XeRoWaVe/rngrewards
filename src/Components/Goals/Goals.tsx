import { useEffect, useState } from "react";
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
  const [editName, setEditName] = useState("");
  const [goalEditing, setGoalEditing] = useState<null | number>(null);

  console.log(goals);

  const removeGoal = (index: number) => {
    const removedGoal = goals.filter((g) => g.id !== index);
    const removedStorage = JSON.parse(localStorage.getItem("goals") || "");
    removedStorage.splice(index, 1);
    localStorage.setItem("goals", JSON.stringify(removedStorage));
    setGoals(removedGoal);
  };

  const completeGoal = (index: number) => {
    const completedGoal = goals.filter((g) => g.id !== index);
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
    if (nameInput) {
      const newGoal = {
        id: new Date().getTime(),
        name: nameInput,
        done: false,
      };

      setGoals((prev) => [...prev, newGoal]);
      setNameInput("");

    }
  };

  const handleUpdateGoal = (id: number, name: string) => {
    if (!name) {
      return;
    }
    const updatedGoals = goals.map((e) => {
      if (e.id === id) {
        e.name = name;
      }
      return e;
    });
    setGoals(updatedGoals);
  };

  useEffect(() => {
    setEditName("");
  }, [goalEditing]);

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
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    createGoal();
                  }
                }}
              />
              {/* <input
                className="text-black m-2 w-fit"
                type="text"
                value={descriptionInput}
                placeholder="Enter description here.."
                onChange={(e) => setDescriptionInput(e.currentTarget.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    createGoal();
                  }
                }}
              /> */}
              <button
                className="border-2 shadow-md shadow-black border-black hover:-translate-y-0.5 active:translate-y-0 active:bg-[#4f5f98] rounded-lg px-4 active:shadow-inner hover:bg-[#7289da] active:border-2"
                onClick={createGoal}
              >
                Create goal
              </button>
              <div className="">
            <GoalsSettingsButton setShowGoalsSettings={setShowGoalsSettings} />
          </div>
            </>
          )}
          {!!goals.length &&
            goals
              .map((goal) => (
                <div key={goal.id} className="w-full m-8 ">
                  {goalEditing === goal.id ? (
                    <div
                      key={goal.id}
                      className={`relative w-full bg-[#424549] shadow-black shadow-inner p-1 flex justify-center`}
                    >
                        <input
                          className={`text-white text-lg m-1 p-1 bg-[#424549] shadow-black shadow-inner w-[95%]`}
                          value={editName}
                          type="text"
                          placeholder={goal.name}
                          onChange={(e) => setEditName(e.currentTarget.value)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              handleUpdateGoal(goal.id, editName);
                              setGoalEditing(null);
                            }
                          }}
                        />
                        {/* <input
                          className="text-white text-md bg-[#424549] shadow-black shadow-inner w-full"
                          value={editDesc}
                          type="text"
                          placeholder={goal.description}
                          onChange={(e) => setEditDesc(e.currentTarget.value)}
                          
                        /> */}
                     
                      <button
                        className="border-2 absolute right-16 -bottom-10 shadow-md shadow-black border-black hover:-translate-y-0.5 active:translate-y-0 active:bg-[#4f5f98] rounded-lg px-4 active:shadow-inner hover:bg-[#7289da] active:border-2"
                        onClick={() => {
                          handleUpdateGoal(goal.id, editName),
                            setGoalEditing(null);
                        }}
                      >
                        Update
                      </button>
                      <button
                        className="border-2 absolute -right-4 -bottom-10 shadow-md shadow-black border-black hover:-translate-y-0.5 active:translate-y-0 active:bg-[#4f5f98] rounded-lg px-3 active:shadow-inner hover:bg-[#7289da] active:border-2"
                        onClick={() => {
                          removeGoal(goal.id), setGoalEditing(null);
                        }}
                      >
                        Remove
                      </button>
                      <button
                        className="border-2 absolute right-[9.4rem] -bottom-10 shadow-md shadow-black border-black hover:-translate-y-0.5 active:translate-y-0 active:bg-[#4f5f98] rounded-lg px-3 active:shadow-inner hover:bg-[#7289da] active:border-2"
                        onClick={() => setGoalEditing(null)}
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <div className={`p-2 relative bg-[#424549] shadow-black shadow-md`}>
                      <h1 className={`bg-[#424549] shadow-black p-1 shadow-md w-[99%] flex justify-center`}>
                        {goal.name}
                      </h1>
                      {/* <p className="bg-[#424549] shadow-black shadow-inner w-full">
                        Description: {goal.description}
                      </p> */}
                      <button
                        className="border-2 absolute right-20 -bottom-10 shadow-md shadow-black border-black hover:-translate-y-0.5 active:translate-y-0 active:bg-[#4f5f98] rounded-lg px-4 active:shadow-inner hover:bg-[#7289da] active:border-2"
                        onClick={() => {
                          setGoalEditing(goal.id);
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className="border-2 absolute -right-4 -bottom-10 shadow-md shadow-black border-black hover:-translate-y-0.5 active:translate-y-0 active:bg-[#4f5f98] rounded-lg px-3 active:shadow-inner hover:bg-[#7289da] active:border-2"
                        onClick={() => completeGoal(goal.id)}
                      >
                        Complete
                      </button>
                    </div>
                  )}
                </div>
              ))
              .slice(0, goalAmount)}

          
        </div>
      )}
    </>
  );
};

export default Goals;
