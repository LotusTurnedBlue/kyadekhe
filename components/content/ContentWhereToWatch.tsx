import type { Content } from "@/types/content";
import { Play } from "lucide-react";

type ContentWhereToWatchProps = {
  content: Content;
};

export default function ContentWhereToWatch({ content }: ContentWhereToWatchProps) {
  return (
    <section id="WhereToWatch" className="mx-auto max-w-[1200px] px-5 pb-6 pt-2 md:px-10">
      <div className="overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.025] p-5 shadow-2xl md:p-6">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.25em] text-orange-400">
              Where to watch?
            </p>

            <h2 className="mt-2 text-3xl font-black text-white">
              {content.platform}
            </h2>
          </div>

          <button className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-orange-500 to-pink-600 px-5 py-3 text-md font-bold text-white transition hover:scale-[1.02] md:w-auto">
            <Play className="h-5 w-5 fill-white" />
            Watch Now
          </button>
        </div>
      </div>
    </section>
  );
}