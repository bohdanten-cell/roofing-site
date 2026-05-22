import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Materials from "@/components/Materials";
import Portfolio from "@/components/Portfolio";
import WhyUs from "@/components/WhyUs";
import Calculator from "@/components/Calculator";
import Process from "@/components/Process";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Materials />
        <Portfolio />
        <WhyUs />
        <Calculator />
        <Process />
        <Reviews />
      </main>
      <Footer />
    </>
  );
}
