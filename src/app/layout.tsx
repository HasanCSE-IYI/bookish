import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Chat from "./components/Chat";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bookish",
  description: "Bookish is a simple, minimalistic, and fast bookstore va.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Chat />
        {children}
      </body>
    </html>
  );
}
