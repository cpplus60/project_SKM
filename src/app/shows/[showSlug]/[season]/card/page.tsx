import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { RegistrationCard } from "@/components/RegistrationCard";
import { generateRegistrationNumber } from "@/lib/registration";
import { getSeason, shows } from "@/lib/shows";

export function generateStaticParams() {
  return shows.flatMap((show) =>
    show.seasons.map((season) => ({ showSlug: show.slug, season: season.slug }))
  );
}

export default async function CardPage(props: PageProps<"/shows/[showSlug]/[season]/card">) {
  const { showSlug, season: seasonSlug } = await props.params;
  const searchParams = await props.searchParams;
  const result = getSeason(showSlug, seasonSlug);
  if (!result) notFound();
  const { show, season } = result;

  const name = typeof searchParams.name === "string" ? searchParams.name : "Sample Participant";
  const reg =
    typeof searchParams.reg === "string"
      ? searchParams.reg
      : generateRegistrationNumber(show.slug, season.slug);

  return (
    <Container className="py-16">
      <RegistrationCard
        showName={show.name}
        seasonLabel={season.label}
        participantName={name}
        registrationNumber={reg}
      />
    </Container>
  );
}
