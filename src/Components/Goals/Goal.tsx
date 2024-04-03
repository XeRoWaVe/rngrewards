type Props = {
  goal: string;
};

const Goal = ({ goal }: Props) => {
  return (
    <div className="flex justify-between border-2">
      <span>{goal}</span>
    </div>
  );
};

export default Goal;
