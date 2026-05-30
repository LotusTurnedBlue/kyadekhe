import Image from "next/image";
import Link from "next/link";

import type { Content } from "@/types/content";
import { Play } from "lucide-react";

type ContentWhereToWatchProps = {
  content: Content;
};

export default function ContentWhereToWatch({
  content,
}: ContentWhereToWatchProps) {
  const providers = content.watchProviders ?? [];

  return (
    <section
      id="WhereToWatch"
      className="mx-auto max-w-[1200px] scroll-mt-24 px-5 pb-6 pt-2 md:px-10"
    >
      <div className="overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.025] p-5 shadow-2xl md:p-6">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.25em] text-orange-400">
              Where to watch?
            </p>

            <h2 className="mt-2 text-3xl font-black text-white">
              {providers.length > 0
                ? "Available in India"
                : content.platform}
            </h2>

            <p className="mt-2 text-sm text-zinc-400">
              {providers.length > 0
                ? "Streaming availability powered by TMDB watch providers."
                : "Streaming availability shown from current KyaDekhe data."}
            </p>
          </div>

          {content.watchOnKyaDekhe && content.kyadekheWatchUrl && (
            <Link
              href={content.kyadekheWatchUrl}
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-orange-500 to-pink-600 px-5 py-3 text-sm font-black text-white transition hover:scale-[1.02] md:w-auto"
            >
              <Play className="h-5 w-5 fill-white" />
              Watch on KyaDekhe?
            </Link>
          )}
        </div>

        {providers.length > 0 ? (
          <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
            {providers.map((provider) => (
              <Link
                key={`${provider.name}-${provider.type}`}
                href={content.providerLink || "#"}
                target="_blank"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/25 p-3 transition hover:border-orange-400/40 hover:bg-white/[0.07]"
              >
                {provider.logo ? (
                  <Image
                    src={provider.logo}
                    alt={provider.name}
                    width={46}
                    height={46}
                    className="h-11 w-11 rounded-xl object-cover"
                  />
                ) : (
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-xs font-black">
                    OTT
                  </div>
                )}

                <div>
                  <p className="line-clamp-1 text-sm font-black text-white">
                    {provider.name}
                  </p>
                  <p className="text-xs capitalize text-zinc-500">
                    {provider.type}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="mt-5 text-sm text-zinc-500">
            No verified Indian OTT provider found yet.
          </p>
        )}
      </div>
    </section>
  );
}