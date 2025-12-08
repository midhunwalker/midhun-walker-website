import type { Metadata } from "next";
import "./index.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Design Portfolio Website",
  description: "A modern portfolio website showcasing design and development work",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
