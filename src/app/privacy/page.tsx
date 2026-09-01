import { Container } from "@/components/Container";

export default function PrivacyPage() {
  return (
    <Container className="py-16">
      <div className="max-w-copy">
        <h1 className="text-3xl text-gold">Privacy Policy</h1>
        <p className="mt-6 text-offwhite/90">
          This placeholder privacy policy will be replaced with SKM&apos;s full policy. It
          covers what information we collect during registration, how it is used, and who it
          is shared with.
        </p>
        <h2 className="mt-10 text-xl text-gold">Information we collect</h2>
        <p className="mt-4 text-offwhite/90">
          Registration forms collect your name, email, phone number, and city so our
          production team can contact you about a show.
        </p>
        <h2 className="mt-10 text-xl text-gold">How we use it</h2>
        <p className="mt-4 text-offwhite/90">
          Your details are used only to manage your registration and communicate updates
          about the show and season you signed up for.
        </p>
      </div>
    </Container>
  );
}
