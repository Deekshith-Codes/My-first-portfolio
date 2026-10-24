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

export const viewport: Viewport = {
  themeColor: "#06090e",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
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
    url: "https://deekshith-portfolio.vercel.app",
    siteName: "Deekshith P - AI/ML Portfolio",
    title: "Deekshith P | AI/ML Student & Aspiring Data Scientist",
    description:
      "Official portfolio of Deekshith P, undergraduate in Computer Science & Engineering (AI & ML) at AJIET Mangaluru. Python, Machine Learning, and real-world project developments.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deekshith P | AI/ML Student & Aspiring Data Scientist",
    description:
      "Explore the verified portfolio of Deekshith P: Python, AI/ML engineering, and Deloitte Data Analytics certification.",
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
