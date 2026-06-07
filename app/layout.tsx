import type { Metadata } from "next";
import {
  Cinzel,
  Cinzel_Decorative,
  DM_Sans,
  JetBrains_Mono,
} from "next/font/google";

import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

const cinzelDecorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-cinzel-decorative",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sincretismo Launcher | Download Oficial",
  description:
    "Baixe o Sincretismo Launcher, o launcher de Minecraft dedicado ao mod Sincretismo com instalação de um clique.",
  metadataBase: new URL("https://sincretismo.local"),
  openGraph: {
    title: "Sincretismo Launcher",
    description:
      "O Minecraft que você nunca jogou. Instale o mod Sincretismo sem configuração e sem complicação.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body
        className={`${dmSans.variable} ${cinzel.variable} ${cinzelDecorative.variable} ${jetBrainsMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
