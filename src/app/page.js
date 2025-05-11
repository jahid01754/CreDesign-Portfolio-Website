import AboutSection from "@/Components/AboutSection/AboutSection";
import ClientFeedback from "@/Components/ClientFeedBack/ClientFeedBack";
import HomeBanner from "@/Components/HomeBanner/HomeBanner";
import MyPortfolio from "@/Components/MyPortfolio/MyPortfolio";
import NavBar from "@/Components/NavBar/NavBar";
import Partners from "@/Components/Partners/Partners";
import ResumeComponent from "@/Components/ResumeComponent/Resume";
import ServiceSection from "@/Components/Service/Service";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="bg-dynamic h-full">
        <NavBar />
        <HomeBanner />
        <AboutSection />
        <ServiceSection />
        <ResumeComponent />
        <ClientFeedback />
        <MyPortfolio />
        <Partners />
      </div>
    </>
  );
}
