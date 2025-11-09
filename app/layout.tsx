import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nexia - AI Solutions Agency",
  description: "Custom AI solutions for every business - automations, machine learning, websites, AI callers, and more",
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
