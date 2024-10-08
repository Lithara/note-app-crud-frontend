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

  const fetchNotes = async () => {
    try {
      const fetchedNotes = await getAllNotesAPI();
      const mappedNotes = fetchedNotes.map((note: any) => ({
        id: note._id,
        title: note.title,
        description: note.description,
      }));
      console.log(mappedNotes);
      setNotes(mappedNotes);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleNoteAdded = (note: any) => {
    setNotes((prevNotes:any) => {
      if (selectedNote) {
        return prevNotes.map((n:any) => (n.id === note.id ? note : n));
      } else {
        return [...prevNotes, note];
      }
    });
    setSelectedNote(null);
  };

  return (
    <Container>
      <div className="w-full">
        <div className="my-12 flex flex-col lg:flex-row gap-4">
          <div className="w-full md:w-1/4">
            <AddNotesForm
              selectedNote={selectedNote}
              onNoteAdded={handleNoteAdded}
              fetchNotes={fetchNotes} // Pass fetchNotes to refresh the notes after an action
            />
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
