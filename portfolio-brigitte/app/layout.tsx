// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; 
import { MainLayout } from "@/components/layout/MainLayout"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Brigitte's Developer Portfolio",
  description: "A developers portfolio for Brigitte, Software Engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainLayout>{children}</MainLayout> 
      </body>
    </html>
  );
}