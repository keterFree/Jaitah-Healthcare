import Head from "next/head";
import Home from "./pages/Home";

export default function Page() {
  return (
    <>
      <Head>
        <title>
          Jaitah Memorial Healthcare Ltd | Quality and Compassionate Care
        </title>
        <meta
          name="description"
          content="Jaitah Memorial Healthcare Ltd provides top-notch medical services in Kenya. Open 24/7 for wellness and emergencies."
        />
        {/* Open Graph */}
        <meta
          property="og:image"
          content="https://jaitahmemorialhealthcareltd.co.ke/jaitahOriginal-red.png"
        />
        <meta
          property="og:image:alt"
          content="Jaitah Memorial Healthcare Logo"
        />
        {/* Twitter Card */}
        <meta
          name="twitter:image"
          content="https://jaitahmemorialhealthcareltd.co.ke/jaitahOriginal-red.png"
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
        {/* 🔸 Favicon & App Icons */}
        <link rel="icon" href="/jaitahOriginal-red.png" type="image/png" />
        <link rel="apple-touch-icon" href="/jaitahOriginal-red.png" />
        <link rel="shortcut icon" href="/jaitahOriginal-red.png" />
        <meta name="theme-color" content="#43c0ffff" />{" "}
        {/* optional brand color */}
      </Head>

      <Home />
    </>
  );
}
