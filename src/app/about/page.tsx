import { Container } from "@/components/Container";

export default function AboutPage() {
  return (
    <Container className="py-16">
      <div className="max-w-copy">
        <h1 className="text-3xl text-gold">About SKM</h1>
        <p className="mt-6 text-offwhite/90">
          SKM produces live competitive shows that bring performers, crews, and contestants
          together for a season of auditions, live rounds, and a finale broadcast to a
          national audience.
        </p>
        <p className="mt-6 text-offwhite/90">
          Every show is run with the same production standard — clear rules, transparent
          judging, and a registration process that keeps contestants informed from sign-up
          to the final stage.
        </p>
      </div>
    </Container>
  );
}
