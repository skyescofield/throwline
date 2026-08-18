import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://throwline.co"),
  title: { default: "Throwline — More tree work. Less chasing.", template: "%s | Throwline" },
  description: "Throwline helps tree companies answer leads, win estimates, and bring customers back.",
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png", sizes: "512x512" }],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    siteName: "Throwline",
    title: "Throwline — More tree work. Less chasing.",
    description: "Answer leads. Win estimates. Bring customers back.",
    images: [{ url: "/og-v2.png", width: 1672, height: 941, alt: "Throwline — More tree work. Less chasing." }],
  },
  twitter: { card: "summary_large_image", title: "Throwline — More tree work. Less chasing.", description: "Answer leads. Win estimates. Bring customers back.", images: ["/og-v2.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}<script src="/menu.js" defer /></body></html>;
}
