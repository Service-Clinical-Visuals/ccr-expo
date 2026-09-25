"use client";

import React from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import AboutUs from "./_components/AboutUs";
import CompactColposcopy from "./_components/CompactColposcopy";
import AdvancedImaging from "./_components/AdvancedImaging";
import Products from "./_components/Products";
import Certified from "./_components/Certified";
import Precision from "./_components/Precision";
import Updates from "./_components/Updates";
import Footer from "./_components/Footer";

export default function BiotechPage() {
  return (
    <div className="min-h-screen bg-white text-[#333333] overflow-x-hidden">
      <Header />

      <main className="relative flex flex-col pt-[80px] lg:pt-[100px] min-[2500px]:pt-[130px] min-[3800px]:pt-[160px]">
        <Hero />
        <AboutUs />
        <CompactColposcopy />
        <Products />
        <AdvancedImaging />
        <Certified />
        <Precision />
        <Updates />
      </main>

      <Footer />
    </div>
  );
}
