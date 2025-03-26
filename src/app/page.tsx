import Banner from "@/components/Banner";
import CompanyInfo from "@/components/CompanyInfo";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ProjectCarousel from "@/components/ProjectCarousel";

export default function Home() {
  return (
    <>
      <Banner />
      <CompanyInfo />
      <ProjectCarousel />
      <Contact />
      <Footer />
    </>
  );
}
