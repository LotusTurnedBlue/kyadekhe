import { notFound } from "next/navigation";
import { getContentBySlug, getVidkingEmbedUrl } from "@/lib/content";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function WatchPage({ params }: PageProps) {
  const { slug } = await params;
  const content = getContentBySlug(slug);

  if (!content) {
    notFound();
  }

  const embedUrl = getVidkingEmbedUrl(content);

  if (!embedUrl) {
    notFound();
  }

  return (
    <main className="min-h-dvh bg-black">
      <div className="h-dvh w-full">
        <iframe
          src={embedUrl}
          width="100%"
          height="100%"
          allowFullScreen
          allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
          className="h-full w-full border-0"
        />
      </div>
    </main>
  );
}