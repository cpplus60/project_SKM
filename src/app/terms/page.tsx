import { Container } from "@/components/Container";

export default function TermsPage() {
  return (
    <Container className="py-16">
      <div className="max-w-copy">
        <h1 className="text-3xl text-gold">Terms &amp; Conditions</h1>
        <p className="mt-6 text-offwhite/90">
          This placeholder covers the terms of taking part in an SKM show. It will be
          replaced with SKM&apos;s full terms and conditions.
        </p>
        <h2 className="mt-10 text-xl text-gold">Registration</h2>
        <p className="mt-4 text-offwhite/90">
          Registering for a season does not guarantee a place in the show. Selected
          contestants will be contacted using the details provided at sign-up.
        </p>
        <h2 className="mt-10 text-xl text-gold">Conduct</h2>
        <p className="mt-4 text-offwhite/90">
          Contestants are expected to follow the production team&apos;s guidance throughout
          auditions, live rounds, and the finale.
        </p>
      </div>
    </Container>
  );
}
