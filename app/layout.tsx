import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "Incoquinita — Consultoria em Cibersegurança",
    template: "%s | Incoquinita",
  },
  description:
    "Iluminamos o que você não vê no seu ambiente digital. Pentest, cloud assessment, segurança wireless e mais.",
  keywords: [
    "cibersegurança",
    "pentest",
    "segurança da informação",
    "cloud assessment",
    "vulnerabilidade",
    "Incoquinita",
  ],
  authors: [{ name: "Incoquinita" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Incoquinita",
    title: "Incoquinita — Consultoria em Cibersegurança",
    description:
      "Iluminamos o que você não vê no seu ambiente digital.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0891b2" },
    { media: "(prefers-color-scheme: dark)", color: "#22d3ee" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
