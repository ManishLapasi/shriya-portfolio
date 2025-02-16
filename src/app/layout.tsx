import type { Metadata } from "next";
import { Lora, Roboto } from "next/font/google";
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
  title: "Create Next App",
  description: "Generated by create next app",
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
