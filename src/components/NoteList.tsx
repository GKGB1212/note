import type { Note } from "../types/note";
import { NoteItem } from "./NoteItem";

interface NoteListProps {
  notes: Note[];
  onDelete: (id: string) => void;
}
export function Notelist({ notes, onDelete }: NoteListProps) {
  if (notes.length === 0) {
    return <p className="text-gray-500">No notes found</p>;
  }
  return (
    <div className="w-full">
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} onDelete={onDelete} />
      ))}
    </div>
  );
}
