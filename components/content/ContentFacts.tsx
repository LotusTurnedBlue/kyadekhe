import type { Content } from "@/types/content";

type ContentFactsProps = {
  content: Content;
};

export default function ContentFacts({ content }: ContentFactsProps) {
  const facts = [
    ["Released", content.releasedOn],
    ["Runtime", content.runtime],
    ["Type", content.type.replaceAll("-", " ")],
    ["Platform", content.platform],
    ["Genres", content.tags.slice(0, 4).join(", ")],
  ];

  return (
    <section className="mx-auto max-w-[1200px] px-5 pb-8 md:px-10">
      <div className="rounded-[28px] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.025] p-5 md:p-6">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-xs font-black uppercase tracking-[0.25em] text-orange-400">
              Details
            </h2>
          </div>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-5">
          {facts.map(([label, value]) => (
            <div
              key={label}
              className="rounded-2xl border border-white/10 bg-black/25 p-4 transition hover:border-blue-400/40 hover:bg-white/[0.06]"
            >
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-blue-400">
                {label}
              </p>

              <p className="mt-2 line-clamp-2 text-sm font-black capitalize leading-6 text-white">
                {value || "—"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}