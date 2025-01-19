import Banner from "@/components/pages/Home/Banner";
import Navbar from "@/components/pages/shared/Navbar";

export default function Home() {
  return (
    <>
      <div className="bg-primary-bg-light dark:bg-[#010917] min-h-screen">
        <Navbar />
        <div>
          <Banner />
        </div>
      </div>
    </>
  );
}
