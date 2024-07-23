import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Empacol",
  description: "We Pack Almost Anything!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/empacol.svg" />
        <link rel="canonical" href="https://empacol.vercel.app/" />
        <title>Empacol - Packing & Supplies</title>
        <meta
          name="description"
          content="Empacol has all of the protective packaging materials your company needs for mainland shipping and exports, Packing Materials & Equipment in Miami."
        />

        <meta property="og:title" content="Empacol - Packing & Supplies" />
        <meta
          property="og:description"
          content="Empacol has all of the protective packaging materials your company needs for mainland shipping and exports, Packing Materials & Equipment in Miami"
        />
        <meta property="og:url" content="https://empacol.vercel.app/" />
        <meta property="og:image" content="/empacol.svg" />
        <meta property="og:site_name" content="Empacol" />
        <meta property="og:type" content="website" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
