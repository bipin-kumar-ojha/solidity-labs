import HeroSection from "../../components/Hero/HeroSection";
import Featurex from "../../components/Features/Featurex";
import Services from "../../components/Services/services";
import Blog from "../../components/blog/blog";
import Achievements from "../../components/Achievements/Achievements";
import Industries from "../../components/Industries/Industries";
import CTA from "../../components/CTA/CTA";
import Process from "../../components/Process/Process";
import Tech from "../../components/TechStack/Tech";
import Contact from "../../components/ContactBlock/Contact";
export default function Home() {
  return (
    <>
     <HeroSection/>
     <Achievements/>
     <Services/>
     <Featurex/>
     <Industries/>
     {/* <Success/> */}
     <CTA/>
     <Process/>
     <Tech/>
     <Blog/>
     <Contact/>
    </>
  );
}