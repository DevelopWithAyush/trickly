import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import ThemeProvider from "@/providers/theme-provder";
import Navbar from "@/component/common/navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trickly",
  description: "Trickly is a platform for creating and sharing tricks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(inter.variable, "antialiased selection:bg-brand-primary/20")}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange> 
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
