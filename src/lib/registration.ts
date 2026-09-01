export function generateRegistrationNumber(showSlug: string, seasonSlug: string) {
  const showCode = showSlug.slice(0, 3).toUpperCase();
  const seasonDigits = seasonSlug.replace(/[^0-9]/g, "").padStart(2, "0") || "01";
  const random = Math.floor(1000 + Math.random() * 9000);
  return `SKM-${showCode}-S${seasonDigits}-${random}`;
}
