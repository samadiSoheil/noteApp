import { useState } from "react";
import "./App.css";
import AddNewNote from "./components/AddNewNote";
function App() {
  const [notes, setNotes] = useState([]);
  const handleAddNotes = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  return (
    <div className="container">
      <div className="note-header"></div>
      <div className="note-app">
        <AddNewNote onAddNote={handleAddNotes} />
        <div className="note-container"></div>
      </div>
    </div>
  );
}

export default App;
