import { notFound } from "next/navigation";
import {
  Clapperboard,
  Film,
  MonitorPlay,
  Sparkles,
  UserRound,
} from "lucide-react";

import AppShell from "@/components/layout/AppShell";
import ContentPosterCard from "@/components/content/ContentPosterCard";

import {
  getContentByPerson,
  getPersonBySlug,
} from "@/lib/content";

type PageProps = {
  params: Promise<{
    role: string;
    slug: string;
  }>;
};

function isValidRole(
  role: string
): role is "cast" | "director" | "writer" {
  return (
    role === "cast" ||
    role === "director" ||
    role === "writer"
  );
}

function formatRole(role: string) {
  if (role === "cast") return "Actor";
  if (role === "director") return "Director";
  return "Writer";
}

function getTopValue(values: string[]) {
  const counts = values.reduce<Record<string, number>>(
    (acc, value) => {
      acc[value] = (acc[value] || 0) + 1;
      return acc;
    },
    {}
  );

  return (
    Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0] ??
    "Mixed"
  );
}

export default async function PersonPage({
  params,
}: PageProps) {
  const { role, slug } = await params;

  if (!isValidRole(role)) {
    notFound();
  }

  const person = getPersonBySlug(role, slug);
  const content = getContentByPerson(role, slug);

  if (!person) {
    notFound();
  }

  const formattedRole = formatRole(role);

  const platforms = Array.from(
    new Set(content.map((item) => item.platform))
  );

  const topGenres = content.flatMap((item) => item.tags);

  const knownFor = content
    .slice(0, 3)
    .map((item) => item.title)
    .join(", ");

  const stats = [
    {
      label: "Titles",
      value: content.length.toString(),
      icon: Clapperboard,
    },
    {
      label: "Top Genre",
      value: getTopValue(topGenres),
      icon: Sparkles,
    },
    {
      label: "Top Platform",
      value: getTopValue(platforms),
      icon: MonitorPlay,
    },
    {
      label: "Role",
      value: formattedRole,
      icon: UserRound,
    },
  ];

  return (
    <AppShell>
      <div className="mx-auto max-w-[1540px] px-5 pb-28 pt-6 md:px-10 md:pb-10">
        <section className="rounded-[28px] border border-white/10 bg-[#07101d] p-5 md:p-7">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="flex gap-5">
              <img
                src={person.image}
                alt={person.name}
                className="h-32 w-32 rounded-2xl object-cover md:h-40 md:w-40"
              />

              <div>
          
                <h1 className="text-4xl font-black text-white md:text-6xl">
                  {person.name}
                </h1>

                <p className="mt-1 text-sm font-black text-orange-400">{formattedRole}</p>

                {knownFor && (
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-400">
                    Known for <span className="font-bold text-zinc-200">{knownFor}</span>.
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {stats.map(({ label, value }) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-[#030811] px-4 py-3">
                  <p className="text-[10px] font-bold uppercase text-zinc-500">{label}</p>
                  <p className="mt-1 text-sm font-black capitalize text-white">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {role === "cast" && (
          <section className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-5 md:p-6">
            <h2 className="text-2xl font-black text-white">
              Character Credits
            </h2>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {content.map((item) => {
                const castCredit = item.starCast.find(
                  (member) => member.name === person.name
                );

                return (
                  <div
                    key={item.slug}
                    className="rounded-xl border border-white/10 bg-[#030811] p-4"
                  >
                    <p className="text-sm font-black text-white">
                      {item.title}
                    </p>

                    {castCredit && (
                      <p className="mt-1 text-xs text-zinc-400">
                        as {castCredit.characterName}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        <section className="mt-10">
          <h2 className="text-2xl font-black text-white">
            Titles with {person.name}
          </h2>

          <p className="mt-2 text-sm text-zinc-400">
            Browse content connected to this{" "}
            {formattedRole.toLowerCase()}.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-6">
            {content.map((item) => (
              <ContentPosterCard key={item.slug} item={item} />
            ))}
          </div>
        </section>
      </div>
    </AppShell>
  );
}