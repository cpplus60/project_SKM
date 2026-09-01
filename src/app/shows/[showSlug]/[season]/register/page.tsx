import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { ShowName } from "@/components/ShowName";
import { RegisterForm } from "@/components/RegisterForm";
import { getSeason, shows } from "@/lib/shows";

export function generateStaticParams() {
  return shows.flatMap((show) =>
    show.seasons.map((season) => ({ showSlug: show.slug, season: season.slug }))
  );
}

export default async function RegisterPage(props: PageProps<"/shows/[showSlug]/[season]/register">) {
  const { showSlug, season: seasonSlug } = await props.params;
  const result = getSeason(showSlug, seasonSlug);
  if (!result) notFound();
  const { show, season } = result;

  return (
    <Container className="py-16">
      <div className="max-w-copy">
        <p className="text-grey">{season.label}</p>
        <ShowName className="mt-2 text-3xl">{show.name}</ShowName>
        <p className="mt-6 text-offwhite/90">Register below to secure your spot.</p>
        <div className="mt-10">
          <RegisterForm
            showSlug={show.slug}
            seasonSlug={season.slug}
            showName={show.name}
            seasonLabel={season.label}
          />
        </div>
      </div>
    </Container>
  );
}
