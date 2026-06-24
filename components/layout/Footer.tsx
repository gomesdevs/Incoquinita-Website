import Link from "next/link";
import { Shield } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";

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
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Shield className="h-5 w-5" />
              </div>
              <span className="font-display text-lg font-bold tracking-tight text-text-primary">
                {SITE.name}
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-muted">
              {SITE.tagline}
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold text-text-primary">
              Navegação
            </h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-muted transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold text-text-primary">
              Serviços
            </h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link href="/servicos/pentest-web" className="text-sm text-text-muted transition-colors hover:text-accent">
                  Pentest Web
                </Link>
              </li>
              <li>
                <Link href="/servicos/pentest-rede" className="text-sm text-text-muted transition-colors hover:text-accent">
                  Pentest Rede
                </Link>
              </li>
              <li>
                <Link href="/servicos/cloud-assessment" className="text-sm text-text-muted transition-colors hover:text-accent">
                  Cloud Assessment
                </Link>
              </li>
              <li>
                <Link href="/servicos/wifi-security" className="text-sm text-text-muted transition-colors hover:text-accent">
                  Wi-Fi Security
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold text-text-primary">
              Contato
            </h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-sm text-text-muted transition-colors hover:text-accent"
                >
                  {SITE.email}
                </a>
              </li>
              <li>
                <Link href="/contato" className="text-sm text-text-muted transition-colors hover:text-accent">
                  Formulário de contato
                </Link>
              </li>
              <li>
                <Link href="/proposta" className="text-sm text-text-muted transition-colors hover:text-accent">
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
                className="text-xs text-text-muted transition-colors hover:text-accent"
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
