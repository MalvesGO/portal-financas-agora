import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@ama-pt/agora-design-system/dist/index.css";
import "./globals.css";
import Navbar from "@/components/Navbar";

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
        <div className="bg-primary-900 px-16 py-16">
          <nav className="container mx-auto">
            <div className=" flex justify-center p-8">
              <div className="flex gap-16">
                <span className="text-white">made with ❤️ by Marcelo Alves</span>
              </div>
            </div>
          </nav>
        </div>
      </body>
    </html>
  );
}
