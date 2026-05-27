import { SearchX } from "lucide-react";

type EmptyStateProps = {
  title: string;
  description?: string;
};

export default function EmptyState({
  title,
  description,
}: EmptyStateProps) {
  return (
    <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.04] p-8 text-center">
      <SearchX className="mx-auto h-8 w-8 text-zinc-600" />

      <h3 className="mt-4 text-lg font-black text-white">
        {title}
      </h3>

      {description && (
        <p className="mt-2 text-sm text-zinc-400">
          {description}
        </p>
      )}
    </div>
  );
}