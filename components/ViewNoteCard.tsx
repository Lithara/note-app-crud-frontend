import { Edit2Icon, Trash2Icon } from "lucide-react";
import React from "react";

interface ViewNoteCardProps {
  title: string;
  description: string;
  onClickEdit: () => void;
  onClickDelete: () => void;
}
const ViewNoteCard = ({ title, description, onClickEdit, onClickDelete }: ViewNoteCardProps) => {
  return (
    <div className="border p-8 w-full flex justify-between">
      <div className="flex flex-col gap-4">
        <h1 className="text-xl font-semibold">{title}</h1>
        <p className="text-gray-500">{description}</p>
      </div>
      <div className="flex gap-4">
        <Edit2Icon className="w-4 h-4 text-blue-400 cursor-pointer" onClick={onClickEdit}/>
        <Trash2Icon className="w-4 h-4 text-red-400 cursor-pointer" onClick={onClickDelete}/>
      </div>
    </div>
  );
};

export default ViewNoteCard;
