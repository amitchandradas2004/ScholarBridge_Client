import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
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
      <body className="min-h-full flex flex-col">
        <main>
          <Navbar />
          {children}
          <Toaster
            position="top-center"
            reverseOrder={false}
            gutter={12}
            toastOptions={{
              duration: 4000,
            }}
          />
          <Footer />
        </main>
      </body>
    </html>
  );
}
