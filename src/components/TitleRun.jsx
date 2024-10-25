import { Pencil, SquareCheck } from "lucide-react";
import { useState } from "react";

export default function TitleRun() {

  const [title, setTitle] = useState(localStorage.getItem('title') ?? 'Programador 2024'); // If the first value was undefined, the 
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
