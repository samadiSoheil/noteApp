function NoteList({ notes, onDeleteNote }) {
  return (
    <div className="note-container">
      {notes.map((item) => (
        <NoteItem key={item.id} note={item} onDeleteNote={onDeleteNote} />
      ))}
    </div>
  );
}

export default NoteList;

function NoteItem({ note, onDeleteNote }) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <div className="note-item">
      <div className="note-item__header">
        <div>
          <p className="title">{note.title}</p>
          <p className="desc">{note.description}</p>
        </div>
        <div className="actions">
          <button onClick={() => onDeleteNote(note.id)}>X</button>
          <input type="checkbox" />
        </div>
      </div>
      <div className="note-item__footer">
        {new Date(note.createdAt).toLocaleDateString("en-US", options)}
      </div>
    </div>
  );
}
