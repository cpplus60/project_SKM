import type { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "outline";

const variantClasses: Record<Variant, string> = {
  primary: "bg-gold text-ink hover:bg-goldDark",
  outline: "border border-gold text-gold hover:bg-gold hover:text-ink",
};

export function buttonClasses(variant: Variant = "primary", className = "") {
  return `inline-flex min-h-tap items-center justify-center rounded-md px-6 text-base font-semibold transition-colors ${variantClasses[variant]} ${className}`;
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

export function Button({ variant = "primary", className = "", ...props }: ButtonProps) {
  return <button className={buttonClasses(variant, className)} {...props} />;
}
