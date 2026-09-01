import type { ReactNode } from "react";

type ShowNameProps = {
  children: ReactNode;
  className?: string;
};

export function ShowName({ children, className = "" }: ShowNameProps) {
  return <span className={`font-display text-gold ${className}`}>{children}</span>;
}
