import { Play, ExternalLink } from "lucide-react";
import Link from "next/link";

import WatchlistButton from "@/components/content/WatchlistButton";

type ContentActionsProps = {
  slug: string;
  watchOnKyaDekhe?: boolean;
  kyadekheWatchUrl?: string;
  trailerUrl?: string;
};

export default function ContentActions({
  slug,
  watchOnKyaDekhe,
  kyadekheWatchUrl,
  trailerUrl,
}: ContentActionsProps) {
  return (
    <div className="mt-8 flex flex-wrap gap-3">

      {kyadekheWatchUrl && (
        <Link
          href={kyadekheWatchUrl}
          className="group inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-black text-black transition hover:scale-[1.02] hover:bg-zinc-200"
        >
          <Play className="h-5 w-5 fill-black transition group-hover:scale-110" />
          Watch on KyaDekhe?
        </Link>
      )}

      {trailerUrl && (
        <Link
          href={trailerUrl}
          target="_blank"
          className="group inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-3 text-sm font-black text-white transition hover:border-orange-500/30 hover:bg-white/[0.09]"
        >
          <Play className="h-5 w-5 transition group-hover:scale-110" />
          Watch Trailer
        </Link>
      )}

      <Link
        href="#WhereToWatch"
        className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-3 text-sm font-black text-white transition hover:border-orange-500/30 hover:bg-white/[0.09]"
      >
        <ExternalLink className="h-4 w-4" />
        Where to Watch
      </Link>

      <WatchlistButton slug={slug} />
    </div>
  );
}