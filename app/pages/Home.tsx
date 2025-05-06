import Head from "next/head";
import Hero from "../Home/hero";
import Services from "../Home/services";
import Contact from "../Home/contact";
import Locale from "../Home/location";
import Welcome from "../Home/welcome";
import About from "../Home/about";
import Review from "../Home/reviews";
import Partners from "../Home/partners";
import Austra from "../Home/austra";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jaitah Memorial Healthcare Ltd | Quality, Affordable Care</title>
        <meta
          name="description"
          content="Jaitah Memorial Healthcare Ltd offers holistic, affordable, and high-quality healthcare services dedicated to improving community well-being in Kenya."
        />
        <meta
          name="keywords"
          content="Healthcare, Jaitah Memorial, Hospital, Medical, Kenya, Affordable Care, Quality Healthcare"
        />
        <meta name="author" content="Jaitah Memorial Healthcare Ltd" />

        {/* Open Graph for social media */}
        <meta property="og:title" content="Jaitah Memorial Healthcare Ltd" />
        <meta
          property="og:description"
          content="Providing quality, affordable healthcare services in Kenya."
        />
        <meta property="og:image" content="/logo.png" />
        <meta
          property="og:url"
          content="http://jaitahmemorialhealthcareltd.co.ke/"
        />
        <meta property="og:type" content="website" />

        {/* Favicon (optional) */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex w-full flex-col items-center justify-center text-center">
        <Hero />
        <About />
        <Services />
        <Austra />
        <Welcome />
        <Contact />
        <Partners />
        <Review />
        <Locale />
      </div>
    </>
  );
}
