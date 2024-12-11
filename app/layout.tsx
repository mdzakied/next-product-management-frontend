import type { Metadata } from "next";
import { ThemeModeScript } from "flowbite-react";
import { Inter } from "next/font/google";
import "./globals.css";

// Font
const inter = Inter({ subsets: ["latin"] });

// Metadata
export const metadata: Metadata = {
  title: "Prodigy",
  description: "Product Management App",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className=" scroll-smooth dark:bg-gray-800">
      {/* Head */}
      <head>
        {/* Theme */}
        <ThemeModeScript />
      </head>
      {/* Body */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
