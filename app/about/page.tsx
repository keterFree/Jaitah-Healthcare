import Hero from "../components/GenericHero";
import Soon from "../components/underDev";
import Contact from "../Home/contact";
import Partners from "../Home/partners";
import Welcome from "../services/welcome";
import AccreditationsRecognitions from "./accreditations";
import CommunityEngagement from "./community";
import OurHistory from "./history";
import Introduction from "./intro";
import LeadershipGovernance from "./leaders";
import StaffProfileCard from "./management";
import AdministrativeStructure from "./structure";
export default function AboutPage() {
  return (
    <>
      <Hero
        title="Jaitah Memorial Hospital"
        subtitle="Compassionate Care and Quality Life"
        content="More on us"
      />
      <Introduction />
      <OurHistory />
      <LeadershipGovernance />
      <AdministrativeStructure />
      <AccreditationsRecognitions />
      <CommunityEngagement/>
      <Welcome />
      <Contact />
      <Partners />
    </>
  );
}
