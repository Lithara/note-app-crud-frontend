"use client";

import Container from "@/components/common/Container";
import AddNotesForm from "@/components/forms/AddNotesForm";
import ViewNoteCard from "@/components/ViewNoteCard";
import React, { useState } from "react";

export default function Home() {
  const [notes, setNotes] = useState<any[]>([]);

  const addNote = (note: any) => {
    setNotes([...notes, { id: notes.length + 1, ...note }]);
  };

  return (
    <Container>
      <div className="w-full">
        <div className="my-12 flex flex-col lg:flex-row gap-4">
          <div className="w-full md:w-1/4">
            <AddNotesForm addNote={addNote} />
          </div>
          <div className="w-full md:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {notes.map((note) => (
              <div key={note.id} className="w-full">
                <ViewNoteCard
                  title={note.title}
                  description={note.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
