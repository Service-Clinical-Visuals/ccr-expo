"use client";

import React from "react";
import Header from "../_components/Header";
import Footer from "../_components/Footer";
import AboutIntro from "./_components/AboutIntro";
import MissionVision from "./_components/MissionVision";
import Team from "./_components/Team";
import CtaBanner from "./_components/CtaBanner";
import Testimonials from "./_components/Testimonials";

export default function ZinnantiAboutPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)] overflow-x-hidden">
      <style>{`[data-aos]{opacity:1!important;transform:none!important;transition:none!important}`}</style>{/*TMPAOS*/}
      <Header />

      <main className="relative flex flex-col pt-[72px] sm:pt-[80px] lg:pt-[86px] min-[2500px]:pt-[130px] min-[3800px]:pt-[180px]">
        <AboutIntro />
        <MissionVision />
        <Team />
        <CtaBanner />
        <Testimonials />
      </main>

      <Footer />
    </div>
  );
}
