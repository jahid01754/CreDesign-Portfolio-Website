import AboutSection from "@/Components/AboutSection/AboutSection";
import ClientFeedback from "@/Components/ClientFeedBack/ClientFeedBack";
import FooterSection from "@/Components/FooterSection/FooterSection";
import HomeBanner from "@/Components/HomeBanner/HomeBanner";
import MyBLog from "@/Components/MyBlog/MyBlog";
import MyContact from "@/Components/MyContact/MyContact";
import MyPortfolio from "@/Components/MyPortfolio/MyPortfolio";
import NavBar from "@/Components/NavBar/NavBar";
import Partners from "@/Components/Partners/Partners";
import ResumeComponent from "@/Components/ResumeComponent/Resume";
import ScrollToTop from "@/Components/ScrollToTop/ScrollToTop";
import ServiceSection from "@/Components/Service/Service";

export default function Home() {
  return (
    <>
      <div className=" bg-dynamic h-full overflow-hidden">
        <NavBar />
        <HomeBanner />
        <ScrollToTop />
        <AboutSection />
        <ServiceSection />
        <ResumeComponent />
        <ClientFeedback />
        <MyPortfolio />
        <Partners />
        <MyBLog />
        <MyContact />
        <FooterSection />
      </div>
    </>
  );
}
