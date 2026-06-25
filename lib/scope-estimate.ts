export type ServiceType = "pentest-web" | "pentest-rede" | "cloud-assessment" | "wifi-security" | "stress-test";

export type Complexity = "baixa" | "media" | "alta";

export interface ScopeInput {
  service: ServiceType;
  apps: number;
  ips: number;
  cloudAccounts: number;
  wifiNetworks: number;
  hasPriorTest: boolean;
}

export interface ScopeEstimate {
  daysMin: number;
  daysMax: number;
  complexity: Complexity;
  notes: string[];
}

const SERVICE_BASE_DAYS: Record<ServiceType, { min: number; max: number }> = {
  "pentest-web": { min: 5, max: 10 },
  "pentest-rede": { min: 5, max: 12 },
  "cloud-assessment": { min: 3, max: 8 },
  "wifi-security": { min: 2, max: 5 },
  "stress-test": { min: 3, max: 7 },
};

export function estimateScope(input: ScopeInput): ScopeEstimate {
  const base = SERVICE_BASE_DAYS[input.service];
  let daysMin = base.min;
  let daysMax = base.max;

  // Scale by scope inputs
  const scopeScore = input.apps + input.ips + input.cloudAccounts + input.wifiNetworks;

  if (scopeScore > 20) {
    daysMax = Math.ceil(daysMax * 1.5);
  } else if (scopeScore > 10) {
    daysMax = Math.ceil(daysMax * 1.25);
  }

  // No prior test = more time needed
  if (!input.hasPriorTest) {
    daysMin = Math.ceil(daysMin * 1.2);
    daysMax = Math.ceil(daysMax * 1.3);
  }

  const complexity: Complexity =
    scopeScore > 20 || (input.service === "pentest-rede" && input.ips > 100)
      ? "alta"
      : scopeScore > 8
        ? "media"
        : "baixa";

  const notes = [
    "Estimativa indicativa. Proposta formal requer scoping detalhado.",
  ];

  if (!input.hasPriorTest) {
    notes.push("Sem teste prévio: tempo adicional para reconhecimento e baseline.");
  }
  if (scopeScore > 20) {
    notes.push("Escopo amplo: recomendado dividir em múltiplos engagements.");
  }

  return { daysMin, daysMax, complexity, notes };
}
