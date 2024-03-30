import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@ama-pt/agora-design-system/dist/index.css";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portal das Finanças",
  description: "Portal das Finanças",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="container mx-auto">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
