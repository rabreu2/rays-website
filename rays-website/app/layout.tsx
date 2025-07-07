'use client'

import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Particles from "@/components/ui/particles";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { theme } = useTheme();
  const [color, setColor] = useState("#000000");
  useEffect(() => {
    setColor(theme === "dark" ? "#000000" : "#ffffff");
  }, [theme]);
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Ray Abreu | Full Stack Developer</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col min-h-[100dvh] w-full min-w-[360px]">
          <Navbar></Navbar>
          <main className="flex-grow w-full bg-black content-center">
            <Particles
              className="absolute inset-0 h-full"
              quantity={1000}
              ease={80}
              color={color}
              refresh
            />{children}
          </main>
          <Footer></Footer>
        </div>
      </body>
    </html>
  );
}
