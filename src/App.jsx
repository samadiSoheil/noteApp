import { useState } from "react";
import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import NoteHeader from "./components/NoteHeader";

function App() {
  const [notes, setNotes] = useState([]);
  const handleAddNotes = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  const handleDeleteNote = (elemId) =>
    setNotes((prevNotes) => prevNotes.filter((n) => n.id != elemId));

  const handleCompeleteNote = (elemId) => {
    console.log("true shode!");
    setNotes((prevNotes) =>
      prevNotes.map((n) => (n.id == +elemId ? { ...n, completed: !n.completed } : n))
    );
  };

  return (
    <div className="container">
      <NoteHeader notes={notes} />
      <div className="note-app">
        <AddNewNote onAddNote={handleAddNotes} />
        <NoteList
          notes={notes}
          onDeleteNote={handleDeleteNote}
          onCompleteNote={handleCompeleteNote}
        />
      </div>
    </div>
  );
}

export default App;
