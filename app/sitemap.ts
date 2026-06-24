import type { MetadataRoute } from "next";

const BASE_URL = "https://incoquinita.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/sobre",
    "/metodologia",
    "/servicos",
    "/servicos/pentest-web",
    "/servicos/pentest-rede",
    "/servicos/cloud-assessment",
    "/servicos/wifi-security",
    "/servicos/stress-test",
    "/servicos/seguranca-pessoas",
    "/cases",
    "/blog",
    "/recursos",
    "/contato",
    "/proposta",
    "/privacidade",
    "/termos",
    "/seguranca",
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/servicos") ? 0.8 : 0.6,
  }));
}
