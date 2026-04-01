import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Professional SolidWorks Training — Flexible Timings",
  description: "Master SolidWorks with hands-on training from certified professionals. Comprehensive courses for engineers, designers, and manufacturers. Flexible scheduling available.",
  keywords: ["SolidWorks", "CAD Training", "3D Modeling", "Engineering", "Design", "Manufacturing", "Singapore"],
  authors: [{ name: "SolidWorks Training" }],
  icons: {
    // icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "Professional SolidWorks Training",
    description: "Master SolidWorks with hands-on training from certified professionals.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
