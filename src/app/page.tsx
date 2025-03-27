import Banner from "@/components/Banner";
import CompanyInfo from "@/components/CompanyInfo";
import Contact from "@/components/Contact";
import ProjectCarousel from "@/components/ProjectCarousel";

export default function Home() {
  return (
    <>
      <div className="home-background min-h-screen">
        <Banner />
        <CompanyInfo />
        <ProjectCarousel />
        <Contact />
      </div>
    </>
  );
}
