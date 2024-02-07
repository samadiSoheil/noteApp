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

  const [sortBy, setSortBy] = useState("latest");
  const handleSort = (e) => {
    setSortBy(e.target.value);
  };
  let sortedNotes = notes;
  if (sortBy === "latest")
    sortedNotes = [...notes].sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    );
  if (sortBy === "earliest")
    sortedNotes = [...notes].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
  if (sortBy === "completed")
    sortedNotes = [...notes].sort((a, b) => Number(b.completed) - Number(a.completed));

  return (
    <div className="container">
      <NoteHeader notes={notes} onSort={handleSort} sortBy={sortBy} />
      <div className="note-app">
        <AddNewNote onAddNote={handleAddNotes} />
        <NoteList
          notes={sortedNotes}
          onDeleteNote={handleDeleteNote}
          onCompleteNote={handleCompeleteNote}
        />
      </div>
    </div>
  );
}

export default App;
