import { useMemo, useState } from "react";
import { AddNoteModal } from "../components/AddNoteModal";
import { Notelist } from "../components/NoteList";
import { NoteSearch } from "../components/NoteSearch";
import { useDebounce } from "../hooks/useDebounce";
import { useNote } from "../hooks/useNote";

export function NotePage() {
  const { addNote, deleteNote, filterNotes } = useNote();
  const [search, setSearch] = useState<string>("");
  const debounceSearch = useDebounce(search);
  const [open, setOpen] = useState(false);
  const filteredNote = useMemo(() => {
    return filterNotes(debounceSearch);
  }, [debounceSearch, filterNotes]);
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex items-center justify-between w-full mb-3">
        <h1 className="font-bold text-3xl mb-4">Notes App</h1>
        <button
          onClick={() => setOpen(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          + Add Note
        </button>
      </div>
      {/* note search */}
      <div className="flex flex-col gap-2">
        <NoteSearch value={search} onChange={(v) => setSearch(v)} />
        <Notelist notes={filteredNote} onDelete={deleteNote} />
      </div>

      {open && <AddNoteModal onAdd={addNote} onClose={() => setOpen(false)} />}
    </div>
  );
}
