import React from 'react';
import Note from './Note';

function NoteList({ notes, deleteNote }) {
  return (
    <div className="note-list">
      {notes.map(note => (
        <Note key={note.id} note={note} deleteNote={deleteNote} />
      ))}
    </div>
  );
}

export default NoteList;
