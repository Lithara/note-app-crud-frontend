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
import { useEffect } from "react";

const FormSchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().min(1).max(1500),
});

function AddNotesForm({ addNote, updateNote, selectedNote }:any) {
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

  const handleSubmit = (data: z.infer<typeof FormSchema>) => {
    if (selectedNote) {
      updateNote({
        ...selectedNote,
        title: data.title,
        description: data.description,
      });
    } else {
      addNote({
        title: data.title,
        description: data.description,
      });
    }
    form.reset();
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
          <Button type="submit" className="w-full">
            {selectedNote ? "Update Note" : "+ Add Note"}
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default AddNotesForm;
