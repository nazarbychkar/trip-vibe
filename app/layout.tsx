import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const myFont = localFont({
  src: "../public/fonts/evolventa-bold.ttf",
});

export const metadata: Metadata = {
  title: "TripVibe – Modern British Travel Agency | Tailored Holidays 24/7",
  description:
    "TripVibe is a modern British travel agency offering full-service holiday planning from your doorstep to your destination. Your trip is our care – available 24/7!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${myFont.className} scroll-pt-15`}>
      <body>
        <Header></Header>

        <main className="pt-18">{children}</main>

        <Footer></Footer>
      </body>
    </html>
  );
}
