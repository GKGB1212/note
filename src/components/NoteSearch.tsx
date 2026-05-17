interface NoteSearchProps {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}
export function NoteSearch({
  placeholder = "Search notes...",
  value,
  onChange,
}: NoteSearchProps) {
  return (
    <input
      type="search"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="focus:outline-none focus:ring-2 focus:border-yellow-200  px-3 py-2 rounded-lg border border-gray-300 text-sm placeholder:text-gray-400 w-full transition-all duration-100"
    />
  );
}
