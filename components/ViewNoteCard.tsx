import { Edit2Icon, Trash2Icon} from "lucide-react";
import React from "react";

const ViewNoteCard = () => {
  return (
    <div className="border p-8 w-1/4 flex justify-between">
      <div className=" flex flex-col gap-4">
        <h1 className="text-xl font-semibold">Note Title</h1>
        <p className="text-gray-500">Note Description</p>
      </div>
      <div className="flex gap-4">
        <Edit2Icon className="w-4 h-4 text-blue-400 cursor-pointer" />
        <Trash2Icon className="w-4 h-4 text-red-400 cursor-pointer" />
      </div>
    </div>
  );
};

export default ViewNoteCard;
