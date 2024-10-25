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
      <head >
        <title>Ray Abreu | Full Stack Developer</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      ><Navbar></Navbar>
        <Particles
        className="absolute inset-0"
        quantity={1000}
        ease={80}
        color={color}
        refresh
      />{children}
        <Footer></Footer>
      </body>
    </html>
  );
}
