import Link from "next/link";
import { Container } from "@/components/Container";

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-grey">© {new Date().getFullYear()} SKM. All rights reserved.</p>
        <nav className="flex gap-8">
          <Link href="/privacy" className="text-grey transition-colors hover:text-gold">
            Privacy
          </Link>
          <Link href="/terms" className="text-grey transition-colors hover:text-gold">
            Terms
          </Link>
        </nav>
      </Container>
    </footer>
  );
}
