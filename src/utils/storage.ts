import type { Note } from "../types/note";

const NOTE_KEY = "note:data";
export function getNoteDataFromStorage(): Note[] {
  try {
    const rawData = localStorage.getItem(NOTE_KEY);
    if (!rawData) return [];
    const parse = JSON.parse(rawData);
    return Array.isArray(parse) ? parse : [];
  } catch {
    return [];
  }
}
export function saveNoteToStorage(notes: Note[]) {
  localStorage.setItem(NOTE_KEY, JSON.stringify(notes));
}
