export type SeasonStatus = "open" | "upcoming" | "closed";

export type Season = {
  slug: string;
  label: string;
  status: SeasonStatus;
  description: string;
};

export type Show = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  seasons: Season[];
};

export const shows: Show[] = [
  {
    slug: "talent-hunt",
    name: "SKM Talent Hunt",
    tagline: "Where raw talent takes the stage.",
    description:
      "SKM Talent Hunt brings performers of every discipline together for a season of live rounds, mentorship, and a shot at the grand finale.",
    seasons: [
      {
        slug: "season-1",
        label: "Season 1",
        status: "closed",
        description: "Our inaugural season — auditions closed, finale complete.",
      },
      {
        slug: "season-2",
        label: "Season 2",
        status: "open",
        description: "Registrations are open now for Season 2.",
      },
    ],
  },
  {
    slug: "dance-league",
    name: "SKM Dance League",
    tagline: "Crews. Choreography. One champion.",
    description:
      "A crew-based dance competition spanning multiple cities, culminating in a nationally streamed final.",
    seasons: [
      {
        slug: "season-1",
        label: "Season 1",
        status: "upcoming",
        description: "Registrations open soon — check back for dates.",
      },
    ],
  },
];

export function getShow(slug: string) {
  return shows.find((show) => show.slug === slug);
}

export function getSeason(showSlug: string, seasonSlug: string) {
  const show = getShow(showSlug);
  if (!show) return undefined;
  const season = show.seasons.find((candidate) => candidate.slug === seasonSlug);
  if (!season) return undefined;
  return { show, season };
}
