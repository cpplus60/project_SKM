"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { buttonClasses } from "@/components/Button";
import { generateRegistrationNumber } from "@/lib/registration";

type RegisterFormProps = {
  showSlug: string;
  seasonSlug: string;
  showName: string;
  seasonLabel: string;
};

const inputClasses =
  "min-h-tap w-full rounded-md border border-border bg-panel px-4 text-base text-offwhite placeholder:text-grey focus:border-gold focus:outline-none";

export function RegisterForm({ showSlug, seasonSlug, showName, seasonLabel }: RegisterFormProps) {
  const [submitted, setSubmitted] = useState<{ name: string; regNumber: string } | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    if (!name) return;
    setSubmitted({ name, regNumber: generateRegistrationNumber(showSlug, seasonSlug) });
  }

  if (submitted) {
    const cardHref = `/shows/${showSlug}/${seasonSlug}/card?name=${encodeURIComponent(
      submitted.name
    )}&reg=${encodeURIComponent(submitted.regNumber)}`;

    return (
      <div className="rounded-lg border border-border bg-panel p-8">
        <p className="text-offwhite">
          You&apos;re registered for <span className="text-gold">{showName}</span> — {seasonLabel}.
        </p>
        <p className="mt-4 font-mono text-lg text-gold">{submitted.regNumber}</p>
        <Link href={cardHref} className={buttonClasses("primary", "mt-8")}>
          View your registration card
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-offwhite">
          Full name
        </label>
        <input id="name" name="name" required className={inputClasses} placeholder="Your full name" />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-offwhite">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className={inputClasses}
          placeholder="you@example.com"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="phone" className="text-offwhite">
          Phone
        </label>
        <input id="phone" name="phone" type="tel" required className={inputClasses} placeholder="Phone number" />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="city" className="text-offwhite">
          City
        </label>
        <input id="city" name="city" required className={inputClasses} placeholder="City" />
      </div>
      <button type="submit" className={buttonClasses("primary", "mt-4 self-start")}>
        Submit registration
      </button>
    </form>
  );
}
