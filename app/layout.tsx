import "./globals.css";
import { Inter, Inconsolata, Roboto } from "next/font/google";
import Navbar from "../components/Navbar";
import type, { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });
const inconsolata = Inconsolata({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Project", // title in the browser tab
  description: "A Next.js project with TypeScript and TailwindCSS.", // meta tag in the <head> tag
  keywords: "Next.js, Typescript, TailwindCSS", // meta tag in <head>
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
        <main className="max-w-3xl mx-auto py-10">{children}</main>
      </body>
    </html>
  );
}
