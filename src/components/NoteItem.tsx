import type { Note } from "../types/note";

type Props = {
  note: Note;
  onDelete: (id: string) => void;
};

export function NoteItem({ note, onDelete }: Props) {
  return (
    <div className="border p-3 bg-amber-100 border-gray-400 shadow-2xl ">
      <h3 className="font-bold mb-1">{note.title}</h3>
      <p>{note.content}</p>

      <button
        onClick={() => onDelete(note.id)}
        className="bg-red-500 text-white px-3 py-1 mt-2"
      >
        Delete
      </button>
    </div>
  );
}
