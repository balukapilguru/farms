import About from "@/Components/HomoComponent/about";
import ResponsiveCarousel from "@/Components/HomoComponent/carousel";
import Farmhouse from "@/Components/HomoComponent/farmhouse";
import HeroSection from "@/Components/HomoComponent/heroSection";
import Location from "@/Components/HomoComponent/location";
import Mruganayani from "@/Components/HomoComponent/mruganayani";

export default function Home() {
  return (
    <main className="mt-3">
      <HeroSection />
      <Mruganayani />
      <Farmhouse />
      <About />
      <Location/>
      <ResponsiveCarousel/>
    </main>
  );
}
