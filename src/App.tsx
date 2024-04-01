import Goals from "./Components/Goals"
import Reward from "./Components/Reward"
import Settings from "./Components/Settings"
import Streak from "./Components/Streak"
import Timer from "./Components/Timer"

function App() {

  return (
    <>
    <div className="flex justify-center border-black border-2 relative">
      <Reward />
      <Streak />
      </div>
      <div className="flex justify-between">
        <Goals />
        <Timer />
      </div>
      <div className="flex justify-center border-black border-2">
      <Settings />
    </div>
    </>
  )
}

export default App
