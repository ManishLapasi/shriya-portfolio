import type { Metadata } from "next";
import { Lora, Roboto } from "next/font/google";
import "@fontsource/lora";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ['300'],
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false
});

const lora = Lora({
  variable: "--font-lora",
  weight: ['400'],
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false
})

export const metadata: Metadata = {
  title: "Shriya | Copywriter | Portfolio",
  description: "Creator of small talk that sells big things",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
