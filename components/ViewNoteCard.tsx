import { Edit2Icon, Trash2Icon } from "lucide-react";
import React from "react";
import { deleteNoteAPI } from "../api/notes/notesAPI";

interface ViewNoteCardProps {
  id: string;
  title: string;
  description: string;
  onClickEdit: () => void;
  onClickDelete: () => void;
}

const ViewNoteCard = ({ id, title, description, onClickEdit, onClickDelete }: ViewNoteCardProps) => {
  const handleDelete = async () => {
    // try {
    //   await deleteNoteAPI(id);
    //   onClickDelete();
    // } catch (error) {
    //   console.error(`Error deleting note with id ${id}:`, error);
    // }
  };

  return (
    <div className="border p-8 w-full flex justify-between">
      <div className="flex flex-col gap-4">
        <h1 className="text-xl font-semibold">{title}</h1>
        <p className="text-gray-500">{description}</p>
      </div>
      <div className="flex gap-4">
        <Edit2Icon className="w-4 h-4 text-blue-400 cursor-pointer" onClick={onClickEdit} />
        <Trash2Icon className="w-4 h-4 text-red-400 cursor-pointer" onClick={handleDelete} />
      </div>
    </div>
  );
};

export default ViewNoteCard;
