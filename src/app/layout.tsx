import type { Metadata, Viewport } from "next";
import { figtree, newsreader, geistMono } from "./fonts";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Shell } from "@/components/layout/shell";

export const metadata: Metadata = {
  title: "Portfolio | Marc Wieang",
  description: "Software engineer specializing in scalable web applications, distributed systems, and developer tooling.",
  keywords: ["software engineer", "web development", "distributed systems", "React", "Next.js", "TypeScript", "Go", "Rust"],
  authors: [{ name: "Marc Wieang" }],
  creator: "Marc Wieang",
  publisher: "Marc Wieang",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://marwieang.com",
    title: "Marc Wieang | Portfolio",
    description: "Software engineer specializing in scalable web applications, distributed systems, and developer tooling.",
    siteName: "Marc Wieang Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marc Wieang | Portfolio",
    description: "Software engineer specializing in scalable web applications, distributed systems, and developer tooling.",
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href="https://fonts.gstatic.com/s/figtree/v14/6NuZ5KoZQyX5QfIqE7hkB9c.woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href="https://fonts.gstatic.com/s/newsreader/v12/NaPecZTIAOhVxoMyOr9n_E7ffBzCIP8.woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${figtree.variable} ${newsreader.variable} ${geistMono.variable} min-h-screen bg-background font-sans antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Shell>{children}</Shell>
        </ThemeProvider>
      </body>
    </html>
  );
}