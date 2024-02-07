function NoteStatus({ notes }) {
  let allNotes = notes.length;
  let completedNotes = notes.filter((n) => n.completed).length;
  let openNotes = allNotes - completedNotes;

  if (!allNotes) return <h2>Please Enter A Note</h2>;

  return (
    <ul className="note-status">
      <li>
        All <span>{allNotes}</span>
      </li>
      <li>
        Completed <span>{completedNotes}</span>
      </li>
      <li>
        Open <span>{openNotes}</span>
      </li>
    </ul>
  );
}

export default NoteStatus;
