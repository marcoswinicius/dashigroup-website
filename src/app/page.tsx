import Banner from "@/components/Banner";
import CompanyInfo from "@/components/CompanyInfo";
import Footer from "@/components/Footer";
import ProjectCarousel from "@/components/ProjectCarousel";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Banner />
      <CompanyInfo />
      <ProjectCarousel />
      <Footer />
    </>
  );
}
