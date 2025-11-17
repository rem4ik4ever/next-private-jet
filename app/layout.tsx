import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alumco — Reunite with your alumni network",
  description: "Discover events, reconnect with classmates, and stay close to your alma mater.",
  openGraph: {
    title: "Alumco — Reunite with your alumni network",
    description: "Discover events, reconnect with classmates, and stay close to your alma mater.",
    url: "/",
    siteName: "Alumco",
    images: "/og.svg",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alumco — Reunite with your alumni network",
    description: "Discover events, reconnect with classmates, and stay close to your alma mater.",
    images: "/og.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body
        className={`${inter.variable} ${jetBrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
