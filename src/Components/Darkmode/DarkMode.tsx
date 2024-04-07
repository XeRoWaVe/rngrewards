import { Theme } from "../../App";

type Props = {
  theme: Theme
  setTheme: React.Dispatch<React.SetStateAction<Theme>>
};

const DarkMode = ({theme, setTheme}: Props) => {

  const toggleTheme = () => {
    if (theme === 'light'){
      setTheme('dark')
      document.documentElement.classList.add('dark')
    } else if (theme === 'dark') {
      setTheme('light')
      document.documentElement.classList.remove('dark')
    }
  }
  return (
    <div>
      <button type="button" onClick={toggleTheme}>
      {theme}Mode
      </button>
    </div>
  );
};

export default DarkMode;
