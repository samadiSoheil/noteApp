import NoteStatus from "./NoteStatus";

function NoteList({ notes, onDeleteNote, onCompleteNote }) {
  return (
    <div className="note-container">
      <NoteStatus notes={notes} />
      {notes.map((item) => (
        <NoteItem
          key={item.id}
          note={item}
          onDeleteNote={onDeleteNote}
          onCompleteNote={onCompleteNote}
        />
      ))}
    </div>
  );
}

export default NoteList;

function NoteItem({ note, onDeleteNote, onCompleteNote }) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <div className={`note-item ${note.completed ? "completed" : ""}`}>
      <div className="note-item__header">
        <div>
          <p className="title">{note.title}</p>
          <p className="desc">{note.description}</p>
        </div>
        <div className="actions">
          <button onClick={() => onDeleteNote(note.id)}>X</button>
          <input onChange={() => onCompleteNote(note.id)} type="checkbox" />
        </div>
      </div>
      <div className="note-item__footer">
        {new Date(note.createdAt).toLocaleDateString("en-US", options)}
      </div>
    </div>
  );
}
