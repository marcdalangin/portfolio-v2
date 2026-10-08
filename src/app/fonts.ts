import { Figtree, Newsreader, Geist_Mono } from "next/font/google";

export const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
  preload: true,
});

export const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});