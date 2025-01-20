import Banner from "@/components/pages/Home/Banner";
import HowItWorks from "@/components/pages/Home/HowItWorks";
import WhyChooseUs from "@/components/pages/Home/WhyChooseUs";
import Navbar from "@/components/pages/shared/Navbar";

export default function Home() {
  return (
    <>
      <div className="bg-primary-bg-light dark:bg-[#010917] min-h-screen">
        <Navbar />

        <Banner />
        <HowItWorks />
        <WhyChooseUs />
      </div>
    </>
  );
}
