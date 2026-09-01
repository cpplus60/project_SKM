import { Container } from "@/components/Container";
import { ContactForm } from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <Container className="py-16">
      <div className="max-w-copy">
        <h1 className="text-3xl text-gold">Contact</h1>
        <p className="mt-6 text-offwhite/90">
          Have a question about a show or registration? Send us a message and our team will
          get back to you.
        </p>
        <div className="mt-10">
          <ContactForm />
        </div>
      </div>
    </Container>
  );
}
