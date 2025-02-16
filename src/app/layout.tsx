import type { Metadata } from "next";
import "./globals.css";
import '@fontsource-variable/lora';

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
      <body className="lora-font">
        {children}
      </body>
    </html>
  );
}
