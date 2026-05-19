import type { Metadata } from "next";
import { Geist, Sora } from "next/font/google";
import "./globals.css";

const bodyFont = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const headingFont = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://vexora-dev-ltda.github.io/VexoraDev";

export const metadata: Metadata = {
  title: "VexoraDev | Solucoes Digitais de Alta Performance",
  description:
    "A VexoraDev cria sites, aplicativos e sistemas personalizados com design moderno, performance e foco em crescimento digital.",
  keywords: [
    "desenvolvimento web",
    "sites profissionais",
    "aplicativos",
    "sistemas personalizados",
    "landing pages",
    "automacao",
    "integracoes",
    "VexoraDev",
  ],
  openGraph: {
    title: "VexoraDev",
    description:
      "Transformamos ideias em solucoes digitais para empresas que querem crescer.",
    type: "website",
    images: ["/Captura de tela 2026-05-18 205958.png", "/logo da empresa.png"],
  },
  icons: {
    icon: "/logo da empresa.png",
    shortcut: "/logo da empresa.png",
    apple: "/logo da empresa.png",
  },
  metadataBase: new URL(siteUrl),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${bodyFont.variable} ${headingFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
