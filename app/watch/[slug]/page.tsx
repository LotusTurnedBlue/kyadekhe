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
    <main className="min-h-screen bg-black">

      <iframe
        src={embedUrl}
        width="100%"
        height="550"
        allowFullScreen
        className="h-screen w-full border-0"
      />
    </main>
  );
}