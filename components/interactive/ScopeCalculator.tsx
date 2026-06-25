"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import {
  estimateScope,
  type ServiceType,
  type ScopeInput,
} from "@/lib/scope-estimate";

const SERVICES: { value: ServiceType; label: string }[] = [
  { value: "pentest-web", label: "Pentest Web" },
  { value: "pentest-rede", label: "Pentest de Rede" },
  { value: "cloud-assessment", label: "Cloud Assessment" },
  { value: "wifi-security", label: "Segurança Wireless" },
  { value: "stress-test", label: "Stress Test" },
];

export function ScopeCalculator() {
  const [input, setInput] = useState<ScopeInput>({
    service: "pentest-web",
    apps: 1,
    ips: 0,
    cloudAccounts: 0,
    wifiNetworks: 0,
    hasPriorTest: false,
  });

  const estimate = useMemo(() => estimateScope(input), [input]);

  const updateField = <K extends keyof ScopeInput>(
    key: K,
    value: ScopeInput[K]
  ) => {
    setInput((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="border border-border bg-bg-secondary p-6 sm:p-8">
      <h3 className="font-display text-2xl font-normal text-text-primary">
        Calculadora de Escopo
      </h3>
      <p className="mt-2 text-sm text-text-muted">
        Estimativa indicativa baseada no tipo de serviço e volume. Proposta
        formal após scoping detalhado.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-xs font-medium uppercase tracking-[0.1em] text-text-muted">
            Tipo de serviço
          </span>
          <select
            value={input.service}
            onChange={(e) => updateField("service", e.target.value as ServiceType)}
            className="mt-1 w-full border border-border bg-bg-primary px-3 py-2 text-sm text-text-primary"
          >
            {SERVICES.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="text-xs font-medium uppercase tracking-[0.1em] text-text-muted">
            Nº aplicações
          </span>
          <input
            type="number"
            min={0}
            value={input.apps}
            onChange={(e) => updateField("apps", Math.max(0, Number(e.target.value)))}
            className="mt-1 w-full border border-border bg-bg-primary px-3 py-2 text-sm text-text-primary"
          />
        </label>

        <label className="block">
          <span className="text-xs font-medium uppercase tracking-[0.1em] text-text-muted">
            Nº IPs
          </span>
          <input
            type="number"
            min={0}
            value={input.ips}
            onChange={(e) => updateField("ips", Math.max(0, Number(e.target.value)))}
            className="mt-1 w-full border border-border bg-bg-primary px-3 py-2 text-sm text-text-primary"
          />
        </label>

        <label className="block">
          <span className="text-xs font-medium uppercase tracking-[0.1em] text-text-muted">
            Contas cloud
          </span>
          <input
            type="number"
            min={0}
            value={input.cloudAccounts}
            onChange={(e) => updateField("cloudAccounts", Math.max(0, Number(e.target.value)))}
            className="mt-1 w-full border border-border bg-bg-primary px-3 py-2 text-sm text-text-primary"
          />
        </label>

        <label className="block">
          <span className="text-xs font-medium uppercase tracking-[0.1em] text-text-muted">
            Redes Wi-Fi
          </span>
          <input
            type="number"
            min={0}
            value={input.wifiNetworks}
            onChange={(e) => updateField("wifiNetworks", Math.max(0, Number(e.target.value)))}
            className="mt-1 w-full border border-border bg-bg-primary px-3 py-2 text-sm text-text-primary"
          />
        </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={input.hasPriorTest}
            onChange={(e) => updateField("hasPriorTest", e.target.checked)}
            className="h-4 w-4"
          />
          <span className="text-sm text-text-muted">Já fez pentest antes</span>
        </label>
      </div>

      <div className="mt-8 border-t border-border pt-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.1em] text-text-muted">
              Faixa estimada
            </p>
            <p className="mt-1 font-display text-3xl font-normal text-accent">
              {estimate.daysMin}–{estimate.daysMax} dias
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.1em] text-text-muted">
              Complexidade
            </p>
            <p className="mt-1 font-display text-2xl font-normal text-text-primary capitalize">
              {estimate.complexity}
            </p>
          </div>
        </div>

        {estimate.notes.length > 0 && (
          <ul className="mt-4 space-y-1 text-xs text-text-muted">
            {estimate.notes.map((n, i) => (
              <li key={i}>· {n}</li>
            ))}
          </ul>
        )}

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link href={`/proposta?service=${input.service}`}>
            <Button>Solicitar Proposta Formal</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
