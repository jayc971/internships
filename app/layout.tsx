import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "InternLK - Launch Your Career in Sri Lanka",
  description: "A California-based startup expanding across Sri Lanka. Connect with meaningful internship opportunities in tech, design, and QA. Remote-first, real-world experience with Silicon Valley mentorship.",
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
