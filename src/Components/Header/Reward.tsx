type Props = {
  reward: true | false | null;
};

const Reward = ({ reward }: Props) => {
  return (
    <div className="bg-[#36393e] w-96 h-4/6 flex rounded-2xl justify-center items-center">
      {reward ? (
        <h1 className="text-white text-2xl flex justify-center items-center w-96 rounded-2xl p-2 bg-[#7289da]">🎈DOPAMINE✨</h1>
      ) : reward === false ? (
        <h1 className=""></h1>
      ) : (
        <h1><br></br></h1>
      )}
    </div>
  );
};

export default Reward;
