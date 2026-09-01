import Link from "next/link";
import { Container } from "@/components/Container";
import { ShowName } from "@/components/ShowName";
import { shows } from "@/lib/shows";

export default function ShowsPage() {
  return (
    <Container className="py-16">
      <h1 className="text-3xl text-gold">Shows</h1>
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {shows.map((show) => (
          <Link
            key={show.slug}
            href={`/shows/${show.slug}`}
            className="rounded-lg border border-border bg-panel p-8 transition-colors hover:border-gold"
          >
            <ShowName className="text-2xl">{show.name}</ShowName>
            <p className="mt-3 text-offwhite/80">{show.tagline}</p>
            <p className="mt-6 text-grey">
              {show.seasons.length} season{show.seasons.length === 1 ? "" : "s"}
            </p>
          </Link>
        ))}
      </div>
    </Container>
  );
}
