"use client";

import React from "react";
import SmoothAOS from "./_components/SmoothAOS";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import AboutUs from "./_components/AboutUs";
import Experience360 from "./_components/Experience360";
import Products from "./_components/Products";
import WhyChooseMesh from "./_components/WhyChooseMesh";
import ExperienceReassuring from "./_components/ExperienceReassuring";
import ReliablePerformance from "./_components/ReliablePerformance";
import Blogs from "./_components/Blogs";
import Footer from "./_components/Footer";

export default function BozTibbiMalzemePage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)] overflow-x-hidden">
      <SmoothAOS />

      {/* Floating Header */}
      <Header />

      <main className="relative flex flex-col">
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: About Us / Welcome */}
        <AboutUs />

        {/* Section 3: 360° Video Experience */}
        <Experience360 />

        {/* Section 4: Products and Applications */}
        <Products />

        {/* Section 5: Why Choose MONOPROLEN Mesh */}
        <WhyChooseMesh />

        {/* Section 6: Experience Is Reassuring */}
        <ExperienceReassuring />

        {/* Section 7: Reliable Surgical Performance */}
        <ReliablePerformance />

        {/* Section 8: Latest Blogs & Insights */}
        <Blogs />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
