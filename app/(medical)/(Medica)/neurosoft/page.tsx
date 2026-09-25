import React from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Interactive360 from "./_components/Interactive360";
import Products from "./_components/Products";
import AccurateECG from "./_components/AccurateECG";
import Gallery from "./_components/Gallery";
import EfficientECG from "./_components/EfficientECG";
import News from "./_components/News";
import Footer from "./_components/Footer";

export default function NeurosoftPage() {
  return (
    <main className="w-full min-h-screen bg-white text-[#2A2A2A] overflow-x-hidden flex flex-col">
      <Header />
      <Hero />
      <About />
      <Interactive360 />
      <Products />
      <AccurateECG />
      <Gallery />
      <EfficientECG />
      <News />
      <Footer />
    </main>
  );
}
