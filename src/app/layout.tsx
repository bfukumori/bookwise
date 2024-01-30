import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";

import NextAuthProvider from "@/components/next-auth-provider";

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
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
