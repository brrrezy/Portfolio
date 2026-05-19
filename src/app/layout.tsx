import type { Metadata } from "next";
import { Poppins, Space_Grotesk, Oxanium } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-label",
});

const oxanium = Oxanium({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Shivanshu Srivastava | Data Enthusiast & Full-Stack Developer",
  description: "Official portfolio of Shivanshu Srivastava showcasing RAG pipelines, Data Science, and Full-Stack AI applications.",
  keywords: ["Data Science", "Machine Learning", "RAG Pipelines", "Full-Stack Development", "Python", "FastAPI", "Next.js"],
  authors: [{ name: "Shivanshu Srivastava" }],
  openGraph: {
    title: "Shivanshu Srivastava | Data Enthusiast & Full-Stack Developer",
    description: "Official portfolio of Shivanshu Srivastava showcasing RAG pipelines, Data Science, and Full-Stack AI applications.",
    url: "https://shivanshusr.vercel.app/",
    siteName: "Shivanshu Srivastava Portfolio",
    images: [
      {
        url: "https://shivanshusr.vercel.app/og.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shivanshu Srivastava | Data Enthusiast & Full-Stack Developer",
    description: "Official portfolio of Shivanshu Srivastava showcasing RAG pipelines, Data Science, and Full-Stack AI applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${spaceGrotesk.variable} ${oxanium.variable}`}>
        {children}
      </body>
    </html>
  );
}
