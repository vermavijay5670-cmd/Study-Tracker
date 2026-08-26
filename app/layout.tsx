import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ServiceWorkerRegister } from "@/components/ui/ServiceWorkerRegister";

const SITE_URL = "https://study-tracker-green-nine.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "NEET Study Tracker — Study Log, Planner & Question Bank for NEET UG",
  description:
    "A free study tracker built for NEET UG aspirants: daily study log, NCERT chapter planner for Physics, Chemistry and Biology, a countdown to exam day, and a growing question bank with quiz mode.",
  keywords: [
    "NEET UG",
    "NEET study tracker",
    "NEET preparation",
    "NEET planner",
    "NCERT chapter tracker",
    "NEET question bank",
    "medical entrance exam prep",
  ],
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Study Tracker",
  },
  icons: {
    icon: [
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/icons/icon-192.png",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "NEET Study Tracker — Study Log, Planner & Question Bank for NEET UG",
    description:
      "Track daily study hours, plan every NCERT chapter, count down to exam day, and practice with a growing NEET question bank.",
    siteName: "NEET Study Tracker",
  },
  twitter: {
    card: "summary",
    title: "NEET Study Tracker",
    description: "Study log, chapter planner, and question bank for NEET UG prep.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <ServiceWorkerRegister />
        {children}
      </body>
    </html>
  );
}
