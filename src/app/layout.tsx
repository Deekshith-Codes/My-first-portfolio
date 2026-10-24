
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://my-first-portfolio-omega-nine.vercel.app";

export const viewport: Viewport = {
  themeColor: "#06090e",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: "Deekshith P | AI/ML Student & Aspiring Data Scientist",
  description:
    "Official portfolio of Deekshith P, AI/ML undergraduate at AJ Institute of Engineering and Technology, Mangaluru. Specializing in Python, Machine Learning, and Data Analytics.",

  keywords: [
    "Deekshith P",
    "AI/ML Student",
    "Aspiring Data Scientist",
    "Python Developer",
    "AJ Institute of Engineering and Technology",
    "AJIET Mangaluru",
    "Machine Learning",
    "Data Analytics",
    "Kasaragod Kerala",
  ],

  authors: [{ name: "Deekshith P" }],
  creator: "Deekshith P",
  publisher: "Deekshith P",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Deekshith P - AI/ML Portfolio",
    title: "Deekshith P | AI/ML Student & Aspiring Data Scientist",
    description:
      "Explore my AI/ML projects, Python development, and data analytics work.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Deekshith P - AI/ML Developer Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Deekshith P | AI/ML Student & Aspiring Data Scientist",
    description:
      "Explore my AI/ML projects, Python development, and data analytics work.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}
    >
      <body className="min-h-screen bg-[#06090e] text-slate-100 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
