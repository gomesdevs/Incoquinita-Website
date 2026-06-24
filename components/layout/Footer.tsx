import Link from "next/link";

import { NAV_LINKS, SERVICES, SITE } from "@/lib/constants";

const LEGAL_LINKS = [
  { label: "Privacidade", href: "/privacidade" },
  { label: "Termos", href: "/termos" },
  { label: "Segurança", href: "/seguranca" },
] as const;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-1.5">
              <span className="font-display text-2xl font-normal text-accent">
                ?
              </span>
              <span className="font-display text-xl font-normal text-text-primary">
                {SITE.name}
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-muted">
              {SITE.tagline}
            </p>
          </div>

          <div>
            <h3 className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-text-muted">
              Navegação
            </h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-muted transition-colors hover:text-text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-text-muted">
              Serviços
            </h3>
            <ul className="mt-4 space-y-2.5">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={service.href}
                    className="text-sm text-text-muted transition-colors hover:text-text-primary"
                  >
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-text-muted">
              Contato
            </h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-sm text-text-muted transition-colors hover:text-text-primary"
                >
                  {SITE.email}
                </a>
              </li>
              <li>
                <Link href="/contato" className="text-sm text-text-muted transition-colors hover:text-text-primary">
                  Formulário de contato
                </Link>
              </li>
              <li>
                <Link href="/proposta" className="text-sm text-text-muted transition-colors hover:text-text-primary">
                  Solicitar proposta
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border py-6 sm:flex-row">
          <p className="text-xs text-text-muted">
            &copy; {currentYear} {SITE.name}. Todos os direitos reservados.
          </p>
          <div className="flex gap-4">
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-text-muted transition-colors hover:text-text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
