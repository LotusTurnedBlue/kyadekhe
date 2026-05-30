import type { Content } from "@/types/content";

import ContentActions from "@/components/content/ContentActions";
import ContentMeta from "@/components/content/ContentMeta";
import BackButton from "@/components/ui/BackButton";
import Link from "next/link";

type ContentHeroProps = {
  content: Content;
};

export default function ContentHero({
  content
}: ContentHeroProps) {
  return (
    <div className="relative mx-auto max-w-[1200px] px-5 py-8 md:px-10">
      <BackButton />

      <div className="grid gap-8 md:grid-cols-[320px_1fr] md:items-start">
        <img
          src={content.img}
          alt={content.title}
          className="w-full rounded-[24px] border border-white/10 object-cover shadow-2xl"
        />

        <div className="pt-1">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-orange-400">
            {content.type.replaceAll("-", " ")}
          </p>

          <h1 className="mt-3 text-4xl font-black leading-tight md:text-6xl">
            {content.title}
          </h1>

          <ContentMeta content={content} />

          <div className="mt-4 flex flex-wrap gap-2">
            {content.starCast.slice(0, 6).map((person) => (
              <Link
                key={person.name}
                href={`/people/cast/${person.name.toLowerCase().replaceAll(" ", "-")}`}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-zinc-300 transition hover:border-orange-500 hover:text-white"
              >
                {person.name}
              </Link>
            ))}
          </div>

          {content.plot && (
            <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-300">
              {content.plot}
            </p>
          )}

          <ContentActions
            slug={content.slug}
            watchOnKyaDekhe
            kyadekheWatchUrl={`/watch/${content.slug}`}
            trailerUrl={content.trailerUrl}
          />
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-5 md:p-6">
        <h2 className="text-xs font-black uppercase tracking-[0.25em] text-orange-400">
          Storyline
        </h2>

        <p className="mt-3 max-w-6xl text-base leading-7 text-zinc-300">
          {content.storyline}
        </p>
      </div>
    </div>
  );
}