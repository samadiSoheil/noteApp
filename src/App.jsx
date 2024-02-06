import { useState } from "react";
import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";

function App() {
  const [notes, setNotes] = useState([]);
  const handleAddNotes = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  const handleDeleteNote = (elemId) =>
    setNotes((prevNotes) => prevNotes.filter((n) => n.id != elemId));

  return (
    <div className="container">
      <div className="note-header"></div>
      <div className="note-app">
        <AddNewNote onAddNote={handleAddNotes} />
        <NoteList notes={notes} onDeleteNote={handleDeleteNote} />
      </div>
    </div>
  );
}

export default App;
