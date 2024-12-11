import type { Metadata } from "next";
import { ThemeModeScript } from "flowbite-react";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "@/redux/provider";

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
    <html lang="en">
      {/* Head */}
      <head>
        {/* Theme */}
        <ThemeModeScript />
      </head>
      {/* Body */}
      <body className={inter.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
