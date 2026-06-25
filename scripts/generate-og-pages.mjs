import sharp from "sharp";
import { writeFileSync } from "fs";

const PAGES = [
  { slug: "default", title: "Incoquinita", subtitle: "Iluminamos o que você não vê" },
  { slug: "servicos", title: "Serviços", subtitle: "Pentest, cloud assessment, segurança wireless e mais" },
  { slug: "metodologia", title: "Metodologia", subtitle: "Processo claro e transparente" },
  { slug: "cases", title: "Cases", subtitle: "Resultados que entregam valor real" },
  { slug: "sobre", title: "Sobre", subtitle: "Quem somos e como trabalhamos" },
  { slug: "contato", title: "Contato", subtitle: "Vamos conversar sobre seu projeto" },
  { slug: "proposta", title: "Solicitar Proposta", subtitle: "Estimativa formal para seu engagement" },
  { slug: "recursos", title: "Recursos", subtitle: "Materiais gratuitos de segurança" },
  { slug: "blog", title: "Blog", subtitle: "Conhecimento técnico e bastidores" },
];

function buildSvg({ title, subtitle }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
  <rect width="1200" height="630" fill="#0E0E0E"/>
  <text x="120" y="320" font-family="Georgia, serif" font-size="200" font-weight="400" fill="#D4A843">?</text>
  <text x="380" y="220" font-family="Arial, sans-serif" font-size="36" font-weight="400" fill="#9C9C9C">Incoquinita</text>
  <text x="380" y="310" font-family="Arial, sans-serif" font-size="64" font-weight="600" fill="#F5F5F0">${title}</text>
  <text x="380" y="370" font-family="Arial, sans-serif" font-size="24" fill="#6B6B6B">${subtitle}</text>
  <text x="380" y="560" font-family="Arial, sans-serif" font-size="18" fill="#404040">incoquinita.com.br</text>
</svg>`;
}

async function main() {
  for (const page of PAGES) {
    const svg = buildSvg(page);
    const svgPath = `public/og/${page.slug}.svg`;
    const pngPath = `public/og/${page.slug}.png`;

    writeFileSync(svgPath, svg);
    await sharp(Buffer.from(svg)).resize(1200, 630).png().toFile(pngPath);
    console.log(`Generated ${pngPath}`);
  }
}

main();
