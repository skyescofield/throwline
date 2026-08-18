import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://throwline.co"),
  title: { default: "Throwline — Managed growth for tree care", template: "%s | Throwline" },
  description: "Throwline is the managed growth platform for independent tree care companies.",
  openGraph: {
    type: "website",
    siteName: "Throwline",
    title: "Throwline — Managed growth for tree care",
    description: "Answer more leads, follow every estimate, and bring past customers back.",
    images: [{ url: "/og.png", width: 1672, height: 941, alt: "Throwline — Managed growth for tree care." }],
  },
  twitter: { card: "summary_large_image", title: "Throwline — Managed growth for tree care", description: "Answer more leads, follow every estimate, and bring past customers back.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}
