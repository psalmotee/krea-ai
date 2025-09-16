import type React from "react";
import type { Metadata } from "next";
// import { GeistSans } from "geist/font/sans";
// import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "next-themes";
import { Suspense } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Krea AI",
  description: "Discover and explore the best AI tools",
  generator: "v0.app",
   icons: {
    icon: "/image/Krea-logo-black.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground antialiased">
        <Suspense fallback={null}>
          <ThemeProvider>{children}</ThemeProvider>
        </Suspense>
      </body>
    </html>
  );
}
