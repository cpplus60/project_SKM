import Link from "next/link";
import { Container } from "@/components/Container";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shows", label: "Shows" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-ink/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="text-lg font-semibold tracking-wide text-gold">
          SKM
        </Link>
        <nav className="flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-offwhite/90 transition-colors hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
