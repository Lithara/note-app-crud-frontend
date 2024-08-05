"use client";

import Container from "@/components/common/Container";
import { AddNotesForm } from "@/components/forms/AddNotesForm";
import ViewNoteCard from "@/components/ViewNoteCard";
import React from "react";

export default function Home() {
  return (
    <Container>
      <div className="">
        <div className="my-12 flex gap-4">
          <AddNotesForm />
          <ViewNoteCard />
        </div>
      </div>
    </Container>
  );
}
