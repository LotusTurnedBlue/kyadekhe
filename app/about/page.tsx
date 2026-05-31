import AppShell from "@/components/layout/AppShell";

export default function AboutPage() {
  return (
    <AppShell>
      <div className="relative mx-auto max-w-[1100px] px-5 pb-5 pt-8 md:px-10 md:pb-10">
        <section className="rounded-[32px] border border-white/10 bg-[#07101d] p-6 md:p-10">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-orange-400">
            About to be named
          </p>

          <h1 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
            Finding what to watch should feel exciting, not exhausting.
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-300">
            to be named is built for people who love movies and shows
            but hate endless scrolling. We help you discover content
            across platforms through mood, genre and curated discovery —
            making entertainment feel fun again.
          </p>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <h2 className="text-2xl font-black text-white">
              Why KyaDekhe Exists
            </h2>

            <p className="mt-4 leading-8 text-zinc-400">
              Today, entertainment is everywhere — and that is exactly
              the problem. Too many platforms, too many choices and too
              much time spent deciding.
            </p>

            <p className="mt-4 leading-8 text-zinc-400">
              to be named exists to make discovering movies, TV shows and
              web series easier, smarter and more enjoyable.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <h2 className="text-2xl font-black text-white">
              Our Vision
            </h2>

            <p className="mt-4 leading-8 text-zinc-400">
              To become India’s most trusted and enjoyable entertainment
              discovery platform.
            </p>

            <p className="mt-4 leading-8 text-zinc-400">
              Not another streaming app — but a place that helps people
              discover what truly matches their mood.
            </p>
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-8">
          <h2 className="text-3xl font-black text-white">
            Our Mission
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Mood-first discovery",
              "Premium OTT-style browsing",
              "Indian audience focused",
              "Cross-platform exploration",
              "Less searching, more watching",
              "Hidden gems and smart discovery",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-[#030811] px-4 py-4 text-sm font-bold text-zinc-200"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-orange-500/15 bg-gradient-to-br from-orange-500/10 to-pink-500/10 p-6 md:p-8">
          <h2 className="text-3xl font-black text-white">
            What Makes KyaDekhe Different
          </h2>

          <p className="mt-4 leading-8 text-zinc-300">
            Instead of endless scrolling and confusing recommendations,
            to be named focuses on discovery that feels natural.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {[
              "Mood discovery",
              "Genre exploration",
              "Platform browsing",
              "Cast & creator pages",
              "Curated picks",
              "Faster decisions",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-semibold text-zinc-200"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-12 text-center">
          <h2 className="text-4xl font-black md:text-5xl">
            Jo mood, woh <span className="bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent">movie.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-zinc-400">
            That is the idea behind to be named —
            not just content, but the right content.
          </p>
        </section>
      </div>
    </AppShell>
  );
}