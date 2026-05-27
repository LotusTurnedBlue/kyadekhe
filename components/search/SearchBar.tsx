"use client";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchBar({
  value,
  onChange,
}: SearchBarProps) {
  return (
    <div className="relative">

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search movies, shows, web series, genres..."
        className="w-full rounded-2xl border border-[#162338] bg-[#07101d] px-4 py-4 text-base font-semibold text-white outline-none transition placeholder:text-zinc-500 focus:border-orange-500 focus:bg-[#0b1626]"
      />
    </div>
  );
}