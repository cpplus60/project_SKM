import Link from "next/link";
import { Container } from "@/components/Container";
import { ShowName } from "@/components/ShowName";
import { buttonClasses } from "@/components/Button";
import { shows } from "@/lib/shows";

export default function HomePage() {
  return (
    <>
      <section className="border-b border-border py-24">
        <Container>
          <p className="text-grey">SKM Productions</p>
          <h1 className="mt-4 max-w-copy text-4xl leading-tight text-offwhite sm:text-5xl">
            Live shows, real talent, unforgettable seasons.
          </h1>
          <p className="mt-6 max-w-copy text-lg text-offwhite/80">
            SKM produces competitive shows across the country — from auditions to the finale.
            Explore our current shows and register for an upcoming season.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/shows" className={buttonClasses("primary")}>
              Explore shows
            </Link>
            <Link href="/about" className={buttonClasses("outline")}>
              About SKM
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <h2 className="text-2xl text-gold">Our shows</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {shows.map((show) => (
              <Link
                key={show.slug}
                href={`/shows/${show.slug}`}
                className="rounded-lg border border-border bg-panel p-8 transition-colors hover:border-gold"
              >
                <ShowName className="text-2xl">{show.name}</ShowName>
                <p className="mt-3 text-offwhite/80">{show.tagline}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
