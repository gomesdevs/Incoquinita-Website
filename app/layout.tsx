import type { Metadata, Viewport } from "next";
import { Instrument_Serif, IBM_Plex_Sans } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
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
    { media: "(prefers-color-scheme: light)", color: "#FAFAF8" },
    { media: "(prefers-color-scheme: dark)", color: "#0E0E0E" },
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
      className={`${instrumentSerif.variable} ${ibmPlexSans.variable} h-full antialiased`}
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
