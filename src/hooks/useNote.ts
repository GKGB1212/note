import { useEffect, useState } from "react";
import type { Note } from "../types/note";
import { getNoteDataFromStorage, saveNoteToStorage } from "../utils/storage";

export function useNote() {
  const [notes, setNotes] = useState(() => getNoteDataFromStorage());
  useEffect(() => {
    saveNoteToStorage(notes);
  }, [notes]);
  const addNote = (title: string, content: string) => {
    const newNote: Note = {
      id: crypto.randomUUID(),
      title,
      content,
      createdAt: Date.now(),
    };
    setNotes((prev) => [...prev, newNote]);
  };
  const editNote = (id: string, title: string, content: string) => {
    setNotes((prev) => {
      return prev.map((note) =>
        note.id === id
          ? {
              ...note,
              title: title,
              content: content,
            }
          : note,
      );
    });
  };
  const deleteNote = (id: string) => {
    setNotes((prev) => prev.filter((note) => note.id != id));
  };
  const filterNotes = (search: string): Note[] => {
    if (!search) return notes;
    const searchLowerCase = search.toLowerCase();
    return notes.filter(
      (note) =>
        note.content.toLowerCase().includes(searchLowerCase) ||
        note.title.toLowerCase().includes(searchLowerCase),
    );
  };
  return { notes, addNote, editNote, deleteNote, filterNotes };
}
