import type { Metadata } from "next";
import { DM_Sans, Lora } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600"],
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sam Cheng | Product Designer",
  description:
    "Designing research-driven, human-centered experiences for a more equitable and resilient world (with a soft spot for food, climate, and community-building).",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${lora.variable} bg-background scroll-smooth`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
