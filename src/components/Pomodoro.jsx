// Components
import TitleRun from "./titleRun/TitleRun";
import Timer from "./Timer/Timer";
import Settings from "./settings/Settings";
import StudyData from "./data/data";

// General
import { createContext, useState } from "react";

export const TimerContext = createContext();

export default function Pomodoro() {
  const [time, setTime] = useState(localStorage.getItem("time") ?? 1800);

  return (
    <div className="pomodoro-container">
      <TitleRun />
      <TimerContext.Provider value={[time, setTime]}>
        <Settings />
        <Timer />
      </TimerContext.Provider>
      <StudyData />
    </div>
  );
}
