import React from "react";
import AosInit from "./_components/AosInit";
import Header from "./_components/Header";
import Banner from "./_components/Banner";
import AboutSection from "./_components/AboutSection";
import Explore360 from "./_components/Explore360";
import ProductSolutions from "./_components/ProductSolutions";
import ReliableMonitoring from "./_components/ReliableMonitoring";
import HolterScanning from "./_components/HolterScanning";
import AdvancedMonitoring from "./_components/AdvancedMonitoring";
import Testimonials from "./_components/Testimonials";
import Footer from "./_components/Footer";

export default function DmsServicePage() {
  return (
    <main className="relative bg-white overflow-x-clip">
      <AosInit />
      <Header />
      <Banner />
      <AboutSection />
      <Explore360 />
      <ProductSolutions />
      <ReliableMonitoring />
      <HolterScanning />
      <AdvancedMonitoring />
      <Testimonials />
      <Footer />
    </main>
  );
}
