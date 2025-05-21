import Hero from "../components/GenericHero";
import Soon from "../components/underDev";
import Contact from "../Home/contact";
import Partners from "../Home/partners";
import Welcome from "../services/welcome";
import StaffProfileCard from "./management";
export default function AboutPage() {
  return (
    <>
      <Hero
        title="Jaitah Memorial Hospital"
        subtitle="Compassionate Care and Quality Life"
        content="More on us"
      />
      <h2 className="text-2xl p-4 md:text-3xl text-center font-semibold text-[#0f4c75] mb-1">Management</h2>
      <StaffProfileCard
        name="Jephthah Mangerere"
        title="Chief Medical Officer"
        bio="Dedicated Kenya Registered Community Health Nurse.Enthusiastic, self-motivated, reliable, responsible, hardworking.Dedicated to ensuring that professional medical healthcare is given to all the patients under our care."
        imageUrl="/jeph.jpg"
        email="jephthah@jaitahmemorialhealthcareltd.co.ke"
        phone="+254 726 755030"
      />
      <Welcome />
      <Contact />
      <Partners />
    </>
  );
}
