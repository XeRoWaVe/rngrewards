type Props = {
  reward: true | false | null;
};

const Reward = ({ reward }: Props) => {
  return (
    <div>
      {reward ? (
        <h1 className="text-green">CELEBRATE</h1>
      ) : reward === false ? (
        <h1 className="text-red">NEXT TIME</h1>
      ) : (
        <h1><br></br></h1>
      )}
    </div>
  );
};

export default Reward;
