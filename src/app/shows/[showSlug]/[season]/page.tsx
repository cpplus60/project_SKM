import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { ShowName } from "@/components/ShowName";
import { buttonClasses } from "@/components/Button";
import { getSeason, shows } from "@/lib/shows";

export function generateStaticParams() {
  return shows.flatMap((show) =>
    show.seasons.map((season) => ({ showSlug: show.slug, season: season.slug }))
  );
}

export default async function SeasonPage(props: PageProps<"/shows/[showSlug]/[season]">) {
  const { showSlug, season: seasonSlug } = await props.params;
  const result = getSeason(showSlug, seasonSlug);
  if (!result) notFound();
  const { show, season } = result;

  return (
    <Container className="py-16">
      <p className="text-grey">{show.name}</p>
      <ShowName className="mt-2 text-3xl">{season.label}</ShowName>
      <p className="mt-6 max-w-copy text-offwhite/90">{season.description}</p>
      <div className="mt-10 flex flex-wrap gap-4">
        <Link href={`/shows/${show.slug}/${season.slug}/register`} className={buttonClasses("primary")}>
          Register
        </Link>
        <Link href={`/shows/${show.slug}/${season.slug}/card`} className={buttonClasses("outline")}>
          View sample card
        </Link>
      </div>
    </Container>
  );
}
