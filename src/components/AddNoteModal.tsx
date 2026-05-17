import { useState } from "react";

interface AddNoteModalProps {
  onAdd: (title: string, content: string) => void;
  onClose: () => void;
}
export function AddNoteModal({ onAdd, onClose }: AddNoteModalProps) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const handleSubmit = () => {
    if (!title.trim()) return;
    onAdd(title, content);
    onClose();
  };
  return (
    <div className="fixed flex justify-center items-center bg-black/30 inset-0">
      <div className="rounded-lg p-4 bg-white">
        <h1 className="font-bold text-2xl pb-4">Add new note</h1>
        <div className="flex flex-col gap-2">
          <input
            autoComplete="true"
            aria-label="title"
            className="focus:outline-none focus:ring-2 focus:border-yellow-200  px-3 py-2 rounded-lg border border-gray-300 text-sm placeholder:text-gray-400 w-full transition-all duration-100"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title"
          />
          <textarea
            aria-label="content"
            className="focus:outline-none  focus:ring-2 focus:border-yellow-200  px-3 py-2 rounded-lg border border-gray-300 text-sm placeholder:text-gray-400 w-full transition-all duration-100"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Enter content"
          />
          <div className="flex gap-2 justify-between items-center">
            <button
              className="rounded-b-sm px-3 py-2 focus:outline-0 "
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              className="rounded-b-sm px-3 py-2 focus:outline-0 bg-blue-600 text-white"
              onClick={handleSubmit}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
