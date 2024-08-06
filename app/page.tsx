"use client";

import Container from "@/components/common/Container";
import { AddNotesForm } from "@/components/forms/AddNotesForm";
import ViewNoteCard from "@/components/ViewNoteCard";
import React, { useState } from "react";

export default function Home() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "Note Title 1",
      description: "Note Description 1",
    },
    {
      id: 2,
      title: "Note Title 2",
      description: "Note Description 2",
    },
    {
      id: 3,
      title: "Note Title 3",
      description: "Note Description 3",
    },
    {
      id: 4,
      title: "Note Title 4",
      description: "Note Description 4",
    }
  ]);
  return (
    <Container>
      <div className="w-full">
        <div className="my-12 flex flex-col lg:flex-row gap-4">
          <div className="w-full md:w-1/4 ">
          <AddNotesForm />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full md:w-3/4">
            <ViewNoteCard />
            <ViewNoteCard />
            <ViewNoteCard />
          </div>
        </div>
      </div>
    </Container>
  );
}
