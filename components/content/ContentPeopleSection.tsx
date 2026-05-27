import type { CastMember, CrewMember } from "@/types/content";
import Link from "next/link";

type ContentPeopleSectionProps = {
  title: string;
  people: CastMember[] | CrewMember[];
  type: "cast" | "crew";
};

export default function ContentPeopleSection({
  title,
  people,
  type,
}: ContentPeopleSectionProps) {
  if (people.length === 0) return null;

  const role =
    type === "cast"
      ? "cast"
      : title.toLowerCase().includes("director")
        ? "director"
        : "writer";

  return (
    <section className="mx-auto max-w-[1200px] px-5 pb-8 md:px-10">
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-orange-400">
            {title}
          </h2>
        </div>

        <p className="hidden text-sm text-zinc-500 md:block">
          {people.length} listed
        </p>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {people.map((person) => (
          <Link
            key={`${title}-${person.name}`}
            href={`/people/${role}/${person.name
              .toLowerCase()
              .replaceAll(" ", "-")}`}
            className="group w-[150px] shrink-0 rounded-[24px] border border-white/10 bg-white/[0.04] p-3 text-center transition hover:-translate-y-1 hover:border-orange-500/40 hover:bg-white/[0.07]"
          >
            <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-full border border-white/10 bg-zinc-900">
              <img
                src={person.image}
                alt={person.name}
                className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
              />
            </div>

            <h3 className="mt-3 line-clamp-2 text-sm font-black leading-5 text-white">
              {person.name}
            </h3>

            {type === "cast" && "characterName" in person ? (
              <p className="mt-1 line-clamp-2 text-xs leading-5 text-blue-400">
                as {person.characterName}
              </p>
            ) : (
              <p className="mt-1 text-xs capitalize text-blue-400">
                {role}
              </p>
            )}
          </Link>
        ))}
      </div>
    </section>
  );
}