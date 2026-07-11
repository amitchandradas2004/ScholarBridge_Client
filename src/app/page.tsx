import { Inter, Sora } from "next/font/google";

export const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function Home() {
  return <div className={`${sora.className}`}>Welcome to ScholarBridge</div>;
}
