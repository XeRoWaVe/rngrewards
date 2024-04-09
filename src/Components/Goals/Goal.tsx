import { useEffect, useState } from "react";

type Props = {
  name: string;
  id: number;
  description: string;
  done: boolean;
  edit: boolean;
  updateGoal: (id: number, name: string, description: string) => void;
  removeGoal: (index: number) => void;
  completeGoal: (index: number) => Promise<void>;
  setEdit: React.Dispatch<React.SetStateAction<boolean>>;
};

const Goal = ({
  name,
  id,
  description,
  done,
  edit,
  updateGoal,
  removeGoal,
  completeGoal,
  setEdit,
}: Props) => {
  const [editName, setEditName] = useState("");
  const [editDesc, setEditDesc] = useState("");

  useEffect(() => {
    setEditDesc(description);
    setEditName(name);
  }, [edit]);

  return (
    <>
      {edit ? (
        <>
          <div className="flex flex-col items-center bg-[#424549] shadow-black shadow-inner relative">
            <input
              type="text"
              className="bg-[#424549]"
              value={editName}
              placeholder={name}
              onChange={(e) => setEditName(e.currentTarget.value)}
            />
            <input
              type="text"
              className="bg-[#424549]"
              value={editDesc}
              placeholder={description}
              onChange={(e) => setEditDesc(e.currentTarget.value)}
            />
          </div>{" "}
          <button
            className="border-2 absolute right-24 shadow-md shadow-black border-black hover:-translate-y-0.5 active:translate-y-0 active:bg-[#4f5f98] rounded-lg px-4 active:shadow-inner hover:bg-[#7289da] active:border-2"
            onClick={() => {
              if ((editName !== '') && (editDesc !== ''))
              updateGoal(id, editName, editDesc), setEdit(!edit)
              else {
                alert('Please enter something')
              };
            }}
          >
            Update
          </button>
          <button
            className="border-2 absolute right-0  shadow-md shadow-black border-black hover:-translate-y-0.5 active:translate-y-0 active:bg-[#4f5f98] rounded-lg px-3 active:shadow-inner hover:bg-[#7289da] active:border-2"
            onClick={() => removeGoal(id)}
          >
            Remove
          </button>
        </>
      ) : (
        <>
          <div
            key={id}
            className="flex flex-col items-center bg-[#424549] shadow-black shadow-inner"
          >
            <h1>{name}</h1>
            <p className="font-normal">{description}</p>
          </div>
          <button
            className="border-2 absolute right-24 shadow-md shadow-black border-black hover:-translate-y-0.5 active:translate-y-0 active:bg-[#4f5f98] rounded-lg px-4 active:shadow-inner hover:bg-[#7289da] active:border-2"
            onClick={() => setEdit(!edit)}
          >
            Edit
          </button>
          <button
            className="border-2 absolute right-0  shadow-md shadow-black border-black hover:-translate-y-0.5 active:translate-y-0 active:bg-[#4f5f98] rounded-lg px-3 active:shadow-inner hover:bg-[#7289da] active:border-2"
            onClick={() => completeGoal(id)}
          >
            Complete
          </button>
        </>
      )}
    </>
  );
};

export default Goal;
