import { Bolt, OctagonX } from "lucide-react";
import { useState, useContext } from "react";
import { TimerContext } from "./Pomodoro";

export default function Settings() {
  const [isActive, setActive] = useState(false);

  const [time, setTime] = useContext(TimerContext)

  function handleClick(time) {
    setTime(time);
    localStorage.setItem('time', time)
  }

  return (
    <>
      {isActive ? (
        <div className="settingDiv">
          <h1>Settings</h1>

          <button onClick={() => setActive(false)} className="leaveSettingsButton">
            <OctagonX />
          </button>

          <div className="choosePomodoro">
            <span>Tempo de pomodoro: </span>

            <div className="pomodoroBtns">
              <button onClick={() => handleClick(1800)} className="pomodoroBtn">30</button>
              <button onClick={() => handleClick(2700)} className="pomodoroBtn">45</button>
              <button onClick={() => handleClick(3600)} className="pomodoroBtn">60</button>
            </div>
          </div>
        </div>
      ) : (
        <>
          <button onClick={() => setActive(true)} className="settingButton">
            <Bolt />
          </button>
        </>
      )}
    </>
  );
}
