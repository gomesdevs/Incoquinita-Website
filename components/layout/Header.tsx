"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useIntroPhase } from "@/lib/use-intro-phase";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const introPhase = useIntroPhase();
  const hidden = introPhase === "intro";

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-border bg-bg-primary/80 backdrop-blur-xl transition-opacity duration-500",
        hidden ? "pointer-events-none opacity-0" : "opacity-100"
      )}
      aria-hidden={hidden}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-1.5 group">
          <span
            data-logo-mark
            className="font-display text-2xl font-normal text-accent transition-colors group-hover:text-accent-hover"
          >
            ?
          </span>
          <span className="font-display text-xl font-normal text-text-primary transition-colors group-hover:text-accent">
            {SITE.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "px-3 py-2 text-sm font-medium transition-colors",
                pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href))
                  ? "text-text-primary"
                  : "text-text-muted hover:text-text-primary"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/proposta"
            className="hidden rounded-lg border border-border px-4 py-2 text-sm font-medium text-text-primary transition-colors hover:border-accent hover:text-accent sm:inline-flex"
          >
            Solicitar Proposta
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-text-muted transition-colors hover:bg-bg-tertiary hover:text-text-primary md:hidden"
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-bg-primary px-4 pb-4 pt-2 md:hidden">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                  pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href))
                    ? "text-text-primary"
                    : "text-text-muted hover:text-text-primary"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/proposta"
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-lg border border-border px-4 py-2.5 text-center text-sm font-medium text-text-primary transition-colors hover:border-accent hover:text-accent"
            >
              Solicitar Proposta
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
