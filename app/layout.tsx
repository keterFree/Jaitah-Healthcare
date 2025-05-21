import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Jaitah Memorial Healthcare Ltd | Quality and Compassionate Care",
  description:
    "Jaitah Memorial Healthcare Ltd provides top-notch medical services in Kenya. We are committed to quality, compassionate, and affordable healthcare for all. Located alongside Eldoret-Iten Road at Sportlink, Hawaii Centre. Open 24/7 for your wellness and emergency needs. Emergency Contact: +254 726 755 030 - 24/7 Emergency Services",
  keywords: [
    "Jaitah Memorial Healthcare",
    "Hospital Kenya",
    "Medical Services Kenya",
    "Healthcare Eldoret",
    "Healthcare Hawaii",
    "Healthcare Kimumu",
    "Outpatient Services",
    "Medical Clinic",
    "Affordable Healthcare Kenya Eldoret Kimumu",
  ],
  authors: [
    {
      name: "Jaitah Memorial Healthcare Ltd",
      url: "http://jaitahmemorialhealthcareltd.co.ke",
    },
  ],
  creator: "Keter Kiplagat Titus",
  publisher: "Jaitah Memorial Healthcare Ltd",
  openGraph: {
    title: "Jaitah Memorial Healthcare Ltd | Quality and Compassionate Care",
    description:
      "Jaitah Memorial Healthcare Ltd is a leading medical facility in Kenya offering reliable and compassionate healthcare services to the community.",
    url: "http://jaitahmemorialhealthcareltd.co.ke",
    siteName: "Jaitah Memorial Healthcare Ltd",
    type: "website",
    locale: "en_KE",
    images: [
      {
        url: "http://jaitahmemorialhealthcareltd.co.ke/logo-bg.png",
        width: 1200,
        height: 630,
        alt: "Jaitah Memorial Healthcare Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaitah Memorial Healthcare Ltd | Quality and Compassionate Care",
    description:
      "Jaitah Memorial Healthcare Ltd provides top-notch medical services in Kenya. Open 24/7 for wellness and emergencies.",
    images: ["http://jaitahmemorialhealthcareltd.co.ke/logo-bg.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};
// https://tailwindflex.com/@anonymous/slider
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/originalLogo-bg.png" type="image/png" />
        <meta
          property="og:image"
          content="http://jaitahmemorialhealthcareltd.co.ke/logo-bg.png"
        />
        <meta
          property="og:image:alt"
          content="Jaitah Memorial Healthcare Logo"
        />
        <meta
          name="twitter:image"
          content="http://jaitahmemorialhealthcareltd.co.ke/logo-bg.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Jaitah Memorial Healthcare Ltd | Quality and Compassionate Care"
        />
        <meta
          name="twitter:description"
          content="Jaitah Memorial Healthcare Ltd provides top-notch medical services in Kenya. Open 24/7 for wellness and emergencies."
        />
      </head>
      <body className="bg-gray-100 text-gray-900 min-h-screen flex flex-col justify-between">
        <Header />
        <main>{children}</main>
        <Footer />

        <Script
          src="https://unpkg.com/flowbite@1.4.1/dist/flowbite.js"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}
