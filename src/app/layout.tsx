import type { Metadata } from "next";
import "./globals.css";
import '@fontsource-variable/lora';
import localFont from "@next/font/local";

export const metadata: Metadata = {
  title: "Shriya | Copywriter | Portfolio",
  description: "Creator of small talk that sells big things",
};

export const helvetica = localFont({
  src: [
    {
      path: './fonts/helvetica/Helvetica.ttf',
      weight: '400'
    },
    {
      path: './fonts/helvetica/Helvetica-Bold.ttf',
      weight: '700'
    }
  ],
  variable: '--font-helvetica'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="--font-helvetica">
        {children}
      </body>
    </html>
  );
}
