import Head from "next/head";
import Home from "./pages/Home"; // or wherever your actual Home component lives

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
        <link rel="icon" href="/originalLogo-bg.png" type="image/png" />
      </Head>

      <Home />
    </>
  );
}
