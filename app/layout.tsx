import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "InternLK - Launch Your Career in Sri Lanka",
  description: "Connecting Sri Lankan talent with exciting internship opportunities in tech and design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background text-text antialiased">
        {children}
      </body>
    </html>
  );
}
