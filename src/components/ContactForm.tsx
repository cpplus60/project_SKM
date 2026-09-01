"use client";

import { useState, type FormEvent } from "react";
import { buttonClasses } from "@/components/Button";

const inputClasses =
  "min-h-tap w-full rounded-md border border-border bg-panel px-4 text-base text-offwhite placeholder:text-grey focus:border-gold focus:outline-none";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <p className="rounded-lg border border-border bg-panel p-6 text-offwhite">
        Thanks for reaching out — we&apos;ll be in touch soon.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <label htmlFor="contact-name" className="text-offwhite">
          Name
        </label>
        <input id="contact-name" name="name" required className={inputClasses} />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="contact-email" className="text-offwhite">
          Email
        </label>
        <input id="contact-email" name="email" type="email" required className={inputClasses} />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="contact-message" className="text-offwhite">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          className={`${inputClasses} min-h-32 py-3`}
        />
      </div>
      <button type="submit" className={buttonClasses("primary", "self-start")}>
        Send message
      </button>
    </form>
  );
}
