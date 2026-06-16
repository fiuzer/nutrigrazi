import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});
const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://www.nutrigrazi.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nutricionista SP Vila Leopoldina e Online | Graziela Cervilla",
    template: "%s | Nutrigrazi",
  },
  description:
    "Acompanhamento nutricional para emagrecimento com qualidade de vida, uso de análogos de GLP-1, efeito sanfona e construção de hábitos sustentáveis.",
  keywords: [
    "nutricionista sp",
    "nutricionista vila leopoldina",
    "nutricionista online",
    "canetas emagrecedoras",
    "análogos de GLP-1",
    "agonistas GLP-1",
    "efeito sanfona",
    "emagrecimento com saúde",
    "mudança de hábitos",
  ],
  authors: [{ name: "Graziela Cervilla" }],
  creator: "Graziela Cervilla",
  publisher: "Nutrigrazi",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Nutrigrazi",
    title: "Emagrecimento com qualidade de vida e rotina possível",
    description:
      "Nutricionista SP, Vila Leopoldina e online, com foco em GLP-1, efeito sanfona e hábitos sustentáveis.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Landing page de nutricionista em São Paulo e online",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Graziela Cervilla | Nutricionista SP e Online",
    description:
      "Acompanhamento para emagrecimento com qualidade de vida, GLP-1, efeito sanfona e hábitos sustentáveis.",
    images: ["/twitter-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <GoogleTagManager gtmId="GTM-WN4WW9QQ" />
      <body className={`${inter.variable} ${lora.variable} bg-cream-100 text-stone-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}
