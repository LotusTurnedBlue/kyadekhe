import type { Content } from "@/types/content";

type ContentWhyWatchProps = {
  content: Content;
};

export default function ContentWhyWatch({ content }: ContentWhyWatchProps) {
  const moods = content.tags.slice(0, 4);

  return (
    <section className="mx-auto max-w-[1200px] px-5 pb-8 md:px-10">
      <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5 md:p-6">
        <h2 className="text-xs font-black uppercase tracking-[0.25em] text-orange-400">
          Why watch this?
        </h2>

        <p className="mt-3 max-w-4xl text-base leading-7 text-zinc-300">
          Watch this if you want something with a{" "}
          <span className="font-bold text-white">
            {content.tags.slice(0, 3).join(", ")}
          </span>{" "}
          vibe and a story that matches your current mood.
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {moods.map((mood) => (
            <span
              key={mood}
              className="rounded-full border border-blue/40 bg-black/10 px-3 py-1 text-sm font-bold text-blue-400"
            >
              {mood}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}