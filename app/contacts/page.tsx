import Contact from "../Home/contact";
import Location from "../Home/location";
import Hero from "../components/GenericHero";

export default function ContactPage() {
  return (
    <div className="flex w-full flex-col items-center justify-center text-center">
      <Hero
        title="Jaitah Memorial Hospital"
        subtitle="Compassionate Care and Quality Life"
        content="Get in touch"
      />
      <Contact />
      <Location />
    </div>
  );
}
