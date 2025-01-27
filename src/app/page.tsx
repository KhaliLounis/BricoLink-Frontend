import FeaturesSection from "@/components/landing/Features";
import HeroSection from "@/components/landing/Hero";
import PageSections from "@/components/landing/PageSections";
import PopularServices from "@/components/landing/Services";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/LandingNavbar";
//testing cicd
const Page = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <PopularServices />
      <FeaturesSection />
      <PageSections />
      <Footer />
    </div>
  );
};
export default Page;
