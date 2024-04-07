type Props = {
  handleStart: () => void }

const StartTimer = ({handleStart}: Props) => {


  return (
    <button onClick={handleStart} className="border-2 shadow-md shadow-black border-black hover:-translate-y-0.5 active:translate-y-0 active:bg-[#4f5f98] rounded-lg px-4 active:shadow-inner hover:bg-[#7289da] active:border-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path
          fillRule="evenodd"
          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
};

export default StartTimer;
