import { Play, Pause, Square } from "lucide-react";
import { useState, useRef, useContext } from "react";
import { TimerContext } from "../Pomodoro";
import './Timer.css'

export default function Timer() {

  const intervalRef = useRef(null);
  const [time, setTime] = useContext(TimerContext);
  const [isRunning, setRunning] = useState(false);
  
  const minutes = time / 60;
  const seconds = time % 60;

  function timer() {
    if (isRunning) {
      clearInterval(intervalRef.current);
  
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => {
          // Atualiza o tempo no contexto
          const newTime = prevTime - 1;
  
          // Atualiza o localStorage com o tempo estudado acumulado
          const minutesStudied = parseInt(localStorage.getItem('minutesStudied')) || 0;
          localStorage.setItem('minutesStudied', minutesStudied + 1);
  
          return newTime;
        });
      }, 1000);
  
      if (time === 0) {
        clearInterval(intervalRef.current);
        const audio = new Audio('./notificationEnds.mp3');
        audio.currentTime = 5;
        audio.volume = 0.5;
        audio.play();
      }
    } else {
      clearInterval(intervalRef.current);
    }
  }

  timer();

  const handleStart = () => setRunning(true);
  const handlePause = () => setRunning(false);
  const handleReset = () => {
    setRunning(false);
    setTime(localStorage.getItem('time') ?? 1800)
  };

  return (
    <div>
      <div className="clock flex-center">
        <p className="displayTime">
          {Math.floor(minutes)}:{seconds.toString().padStart(2, "0")}
        </p>
      </div>

      <div className="controlButtons flex-center">
        <button onClick={handleStart}>
          <Play color="#ffffff" size={35} />
        </button>
        <button onClick={handlePause}>
          <Pause color="#ffffff" size={35} />
        </button>
        <button onClick={handleReset}>
          <Square color="#ffffff" size={35} />
        </button>
      </div>
    </div>
  );
}
