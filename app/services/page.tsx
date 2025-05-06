import Hero from "../components/GenericHero";
import Soon from "../components/underDev";
import Welcome from "./welcome";
import Services from "./service";
import Head from "next/head";
import Why from "./why";
import Contact from "../Home/contact";
import Locale from "../Home/location";
import Partners from "../Home/partners";

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Our Services | Jaitah Memorial Hospital</title>
        <meta
          name="description"
          content="Explore the services offered by Jaitah Memorial Hospital. We prioritize compassionate care and quality of life."
        />
      </Head>

      <Hero
        title="Jaitah Memorial Hospital"
        subtitle="Compassionate Care and Quality Life"
        content="Our Services"
      />
      <Welcome />
      <Services />
      <Why />
      <Contact />
      <Partners />
      <Locale />
      {/* <Soon /> */}
    </>
  );
}
