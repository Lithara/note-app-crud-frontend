"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { useEffect, useState } from "react";
import { createNoteAPI, updateNoteAPI } from "@/api/notes/notesAPI";

const FormSchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().min(1).max(1500),
});

function AddNotesForm({ selectedNote, onNoteAdded, fetchNotes }: any) {
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  useEffect(() => {
    if (selectedNote) {
      form.reset({
        title: selectedNote.title,
        description: selectedNote.description,
      });
    }
  }, [selectedNote, form]);

  const handleSubmit = async (data: z.infer<typeof FormSchema>) => {
    setLoading(true);
    try {
      if (selectedNote) {
        await updateNoteAPI(selectedNote.id, data);
      } else {
        await createNoteAPI(data);
      }
      onNoteAdded();
      fetchNotes();
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border p-8 rounded-md w-full shadow-sm">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="w-full space-y-6"
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Enter Title</FormLabel>
                <FormControl>
                  <Input placeholder="Note Title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Enter Description</FormLabel>
                <FormControl>
                  <Textarea placeholder="Note Description" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" loading={loading}>
            {selectedNote ? "Update Note" : "+ Add Note"}
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default AddNotesForm;
