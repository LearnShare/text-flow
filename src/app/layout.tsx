import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flow",
  description: "Text flow ...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="p-2">
        {children}
      </body>
    </html>
  );
}
