import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bill",
  description: "Created by Cer.Dev",
  generator: "Cer.Dev",
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
