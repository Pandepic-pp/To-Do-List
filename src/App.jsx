import React, { useState } from "react";
import {Trash2} from "lucide-react"


function TodoApp() {
  const [notes, setNotes] = useState([]);

  const handleCreateNote = () => {
    setNotes((prevNotes) => ["", ...prevNotes]);
  };

  const handleChangeNote = (index, event) => {
    const newNotes = [...notes];
    newNotes[index] = event.target.value;
    setNotes(newNotes);
  };

  const handleDeleteNote = (index) => {
    setNotes((prevNotes) => prevNotes.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-gradient-to-tr from-indigo-900 flex justify-center to-purple-900 min-h-screen ">
      <div className="min-h-screen w-[60%] flex flex-col pt-[4%] items-start gap-5">
        <h1 className="text-5xl font-semibold text-white">To Do App</h1>
        <button
          className="bg-blue-950 text-white w-[20%] h-[50px] rounded-lg font-semibold"
          onClick={handleCreateNote}
        >
          Create Note
        </button>
        <ul>
          {notes.map((note, index) => (
            <li
              key={index}
              className="bg-white p-4 flex items-end rounded-lg gap-3 mt-5"
            >
              <textarea
                value={note}
                onChange={(e) => handleChangeNote(index, e)}
                rows={4}
                cols={50}
                className="p-2"
              />
              <button onClick={() => handleDeleteNote(index)} className="text-gray-700 ">
                <Trash2 />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoApp;
