import AboutSection from "@/Components/AboutSection/AboutSection";
import HomeBanner from "@/Components/HomeBanner/HomeBanner";
import NavBar from "@/Components/NavBar/NavBar";
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
      </div>
    </>
  );
}
