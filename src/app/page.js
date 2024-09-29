import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ServiceSection from "./components/serviceSection"; // Ensure this reflects your new service section
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

import Productsview from "./components/products";
import HistorySection from "./components/History";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#5c5470]">
  <Navbar />
  <div className="container mt-24 mx-auto px-12 py-4 text-[#dbd8e3]">
    <HeroSection />
    {/* <AchievementsSection /> */}
    <AboutSection/>
    <ServiceSection/>
    
    {/* Blog Section with a Correct ID */}
    <Productsview ></Productsview>
    <HistorySection></HistorySection>

    <EmailSection />
  </div>
  <Footer />
</main>

  );
}
