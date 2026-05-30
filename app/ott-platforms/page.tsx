import Link from "next/link";

import AppShell from "@/components/layout/AppShell";
import EmptyState from "@/components/ui/EmptyState";
import { ottPlatforms } from "@/lib/ott-platforms";

export default function PlatformPage() {
  return (
    <AppShell>
      <div className="relative mx-auto max-w-[1540px] px-5 pb-28 pt-6 md:px-10 md:pb-10">
        <h1 className="text-3xl font-black md:text-5xl">Platforms</h1>

        <p className="mt-2 text-sm text-zinc-400">
          Browse movies, TV shows and web series by streaming platform.
        </p>

        {ottPlatforms.length === 0 ? (
          <EmptyState
            title="No platforms found"
            description="Platforms will appear here soon."
          />
        ) : (
          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-5">
            {ottPlatforms.map((platform) => (
              <Link
                key={platform.slug}
                href={`/ott-platforms/${platform.slug}`}
                className="rounded-2xl border border-[#162338] bg-[#07101d] p-5 text-sm font-black text-white transition hover:border-orange-500"
              >
                {platform.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </AppShell>
  );
}