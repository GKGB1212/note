import { useCallback, useEffect, useRef, useState } from "react";
import type { Note } from "../types/note";
import { getNoteDataFromStorage, saveNoteToStorage } from "../utils/storage";

export function useNote() {
  const [notes, setNotes] = useState(() => getNoteDataFromStorage());
  const isFirstRender = useRef(true);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return; // bỏ qua lần mount đầu — dữ liệu vừa đọc từ storage, không cần ghi lại
    }
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
  const editNote = useCallback((id: string, title: string, content: string) => {
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
  }, []);
  const deleteNote = useCallback((id: string) => {
    setNotes((prev) => prev.filter((note) => note.id != id));
  }, []);
  const filterNotes = useCallback(
    (search: string): Note[] => {
      if (!search) return notes;
      const searchLowerCase = search.toLowerCase();
      return notes.filter(
        (note) =>
          note.content.toLowerCase().includes(searchLowerCase) ||
          note.title.toLowerCase().includes(searchLowerCase),
      );
    },
    [notes],
  );
  return { notes, addNote, editNote, deleteNote, filterNotes };
}
