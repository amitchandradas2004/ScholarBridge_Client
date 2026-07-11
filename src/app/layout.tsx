import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ScholarBridge | HomePage",
  description:
    "ScholarBridge is a platform that connects students and scholars, providing resources, networking opportunities, and collaborative tools to enhance academic growth and research.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" className={`h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
