import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Small Giants — The Modern School for Entrepreneurs",
  description:
    "Content, community and practical business education for founders who never stop learning. Build better. Think bigger. Keep learning.",
  keywords: [
    "entrepreneurship",
    "founder education",
    "media company",
    "startup learning",
    "Small Giants",
  ],
  openGraph: {
    title: "Small Giants — The Modern School for Entrepreneurs",
    description:
      "The school we wish existed. Lifelong learning for founders.",
    type: "website",
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
      <body className="antialiased">{children}</body>
    </html>
  );
}
