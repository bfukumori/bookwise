import type { Metadata } from "next";
import { Nunito } from "next/font/google";

import "./globals.css";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bookwise",
  description: "Web application for book reviews and reading management",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={`h-dvh bg-app-gray-800 ${nunito.className}`}>
        {children}
      </body>
    </html>
  );
}
