import { Pencil, SquareCheck } from "lucide-react";
import './TitleRun.css'
import { useState } from "react";

export default function TitleRun() {
  
  const [title, setTitle] = useState(localStorage.getItem('title') ?? 'dev 2024');
  const [editMode, setMode] = useState(false);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleClick = () => {
    if (editMode) {
      localStorage.setItem('title', title);
    }

    setMode(!editMode)
  }

  return (
    <div className="titleDiv flex-center">
      {editMode ? (
        <>
          <input className="input-changer" type="text" value={title} onChange={handleChange} />
          <button onClick={handleClick}>
            <SquareCheck color="#fff" />
          </button>
        </>
      ) : (
        <>
          <h1 className="titlePage">{title}</h1>

          <button onClick={handleClick}>
            <Pencil color="#fff" />
          </button>
        </>
      )}
    </div>
  );
}
