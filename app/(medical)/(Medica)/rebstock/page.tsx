"use client";

import React from "react";
import SmoothAOS from "./_components/SmoothAOS";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import AboutUs from "./_components/AboutUs";
import Deg360 from "./_components/Deg360";
import TrustSurgeons from "./_components/TrustSurgeons";
import FacialSurgery from "./_components/FacialSurgery";
import ExpertiseGallery from "./_components/ExpertiseGallery";
import CranioSolutions from "./_components/CranioSolutions";
import WhyRebstock from "./_components/WhyRebstock";
import Footer from "./_components/Footer";

export default function RebstockPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)] overflow-x-hidden">
      <SmoothAOS />

      {/* 1. Header / Logo */}
      <Header />

      <main className="relative flex flex-col">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. About Us Section */}
        <AboutUs />

        {/* 4. 360° Facial Implant Experience */}
        <Deg360 />

        {/* 5. Trusted By Leading Surgeons Worldwide */}
        <TrustSurgeons />

        {/* 6. Precision For Facial Surgery */}
        <FacialSurgery />

        {/* 7. A Closer Look At Our Expertise */}
        <ExpertiseGallery />

        {/* 8. Advanced Solutions For Cranio-Maxillofacial Surgery */}
        <CranioSolutions />

        {/* 9. Why Rebstock */}
        <WhyRebstock />
      </main>

      {/* 10. Footer */}
      <Footer />
    </div>
  );
}
