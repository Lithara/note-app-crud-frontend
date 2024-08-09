"use client";

import { getAllNotesAPI } from "@/api/notes/notesAPI";
import Container from "@/components/common/Container";
import AddNotesForm from "@/components/forms/AddNotesForm";
import ViewNoteCard from "@/components/ViewNoteCard";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);

  const handleNoteClick = (note: any) => {
    setSelectedNote(note);
  };

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const fetchedNotes = await getAllNotesAPI();
        const mappedNotes = fetchedNotes.map((note: any) => ({
          id: note.id,
          title: note.title,
          description: note.description,
        }));
        setNotes(mappedNotes);
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    };

    fetchNotes();
  }, []);

  return (
    <Container>
      <div className="w-full">
        <div className="my-12 flex flex-col lg:flex-row gap-4">
          <div className="w-full md:w-1/4">
            <AddNotesForm selectedNote={selectedNote} />
          </div>
          <div className="w-full md:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {notes.map((note: any) => (
              <ViewNoteCard
                key={note.id}
                title={note.title}
                description={note.description}
                onClickEdit={() => handleNoteClick(note)}
                onClickDelete={() =>
                  setNotes(notes.filter((n: any) => n.id !== note.id))
                }
                id={note.id}
              />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
