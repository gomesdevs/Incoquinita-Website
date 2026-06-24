import { type HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  container?: boolean;
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, container = true, ...props }, ref) => (
    <section
      ref={ref}
      className={cn("py-16 sm:py-20 lg:py-24", className)}
      {...props}
    >
      {container ? (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" {...props} />
      ) : null}
    </section>
  )
);
Section.displayName = "Section";

const SectionHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("mx-auto max-w-2xl text-center", className)}
      {...props}
    />
  )
);
SectionHeader.displayName = "SectionHeader";

const SectionTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h2
      ref={ref}
      className={cn(
        "font-display text-3xl font-bold tracking-tight text-text-primary sm:text-4xl",
        className
      )}
      {...props}
    />
  )
);
SectionTitle.displayName = "SectionTitle";

const SectionDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("mt-4 text-lg text-text-muted", className)}
      {...props}
    />
  )
);
SectionDescription.displayName = "SectionDescription";

export { Section, SectionHeader, SectionTitle, SectionDescription };
