"use client";

import Container from "@/components/common/Container";
import AddNotesForm from "@/components/forms/AddNotesForm";
import ViewNoteCard from "@/components/ViewNoteCard";
import React, { useState } from "react";

export default function Home() {
  const [notes, setNotes] = useState<any[]>([]);
  const [selectedNote, setSelectedNote] = useState(null);

  const addNote = (note: any) => {
    setNotes([...notes, { id: notes.length + 1, ...note }]);
  };

  const updateNote = (note: any) => {
    setNotes(notes.map(n => n.id === note.id ? note : n));
  };

  const handleNoteClick = (note: any) => {
    setSelectedNote(note);
  };

  return (
    <Container>
      <div className="w-full">
        <div className="my-12 flex flex-col lg:flex-row gap-4">
          <div className="w-full md:w-1/4">
            <AddNotesForm addNote={addNote} updateNote={updateNote} selectedNote={selectedNote} />
          </div>
          <div className="w-full md:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {notes.map((note:any) => (
              <div key={note.id} className="w-full">
                <ViewNoteCard
                  title={note.title}
                  description={note.description}
                  onClickEdit={() => handleNoteClick(note)}
                  onClickDelete={() => setNotes(notes.filter(n => n.id !== note.id))}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
