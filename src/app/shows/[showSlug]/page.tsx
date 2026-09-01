import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { ShowName } from "@/components/ShowName";
import { getShow, shows } from "@/lib/shows";

export function generateStaticParams() {
  return shows.map((show) => ({ showSlug: show.slug }));
}

export default async function ShowPage(props: PageProps<"/shows/[showSlug]">) {
  const { showSlug } = await props.params;
  const show = getShow(showSlug);
  if (!show) notFound();

  return (
    <Container className="py-16">
      <ShowName className="text-4xl">{show.name}</ShowName>
      <p className="mt-4 max-w-copy text-lg text-offwhite/90">{show.tagline}</p>
      <p className="mt-6 max-w-copy text-grey">{show.description}</p>

      <h2 className="mt-16 text-2xl text-gold">Seasons</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {show.seasons.map((season) => (
          <Link
            key={season.slug}
            href={`/shows/${show.slug}/${season.slug}`}
            className="rounded-lg border border-border bg-panel p-6 transition-colors hover:border-gold"
          >
            <p className="text-lg text-offwhite">{season.label}</p>
            <p className="mt-2 text-grey">{season.description}</p>
            <span className="mt-4 inline-block capitalize text-gold">{season.status}</span>
          </Link>
        ))}
      </div>
    </Container>
  );
}
