import type { Metadata, Viewport } from "next";
import "./globals.css";

const SITE_URL = "https://small-giants-mu.vercel.app";
const TITLE = "Small Giants | Built as an Application";
const DESCRIPTION =
  "An independent concept exploring the future of entrepreneurial education, media and founder learning.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  applicationName: "Small Giants",
  keywords: [
    "entrepreneurship",
    "founder education",
    "media company",
    "startup learning",
    "entrepreneurial education",
    "Small Giants",
  ],
  authors: [{ name: "Built as an application for Small Giants" }],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Small Giants",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0B",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
