import { Goaltype } from "../../App";


const Goal = ({ name, id, description, done }: Goaltype) => {
  return (
    <div key={id} className="flex flex-col items-center bg-[#424549] shadow-black shadow-inner">
      <h1>{name}</h1>
      <p>{description}</p>
      <button>{done}</button>
    </div>
  );
};

export default Goal;
