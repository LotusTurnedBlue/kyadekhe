import Link from "next/link";

type PaginationProps = {
  currentPage: number;
  totalPages?: number;
  basePath: string;
};

export default function Pagination({
  currentPage,
  totalPages = 500,
  basePath,
}: PaginationProps) {
  const prevPage = Math.max(currentPage - 1, 1);
  const nextPage = currentPage + 1;

  return (
    <div className="mt-10 flex items-center justify-center gap-3">
      <Link
        href={`${basePath}?page=${prevPage}`}
        className={`rounded-2xl border border-white/10 px-5 py-3 text-sm font-black transition ${
          currentPage === 1
            ? "pointer-events-none opacity-40"
            : "hover:border-orange-400/40 hover:bg-white/[0.06]"
        }`}
      >
        Previous
      </Link>

      <span className="rounded-2xl bg-white/[0.06] px-5 py-3 text-sm font-black text-white">
        Page {currentPage}
      </span>

      <Link
        href={`${basePath}?page=${nextPage}`}
        className="rounded-2xl border border-white/10 px-5 py-3 text-sm font-black transition hover:border-orange-400/40 hover:bg-white/[0.06]"
      >
        Next
      </Link>
    </div>
  );
}