"use client";

import React from "react";
import Header from "../_components/Header";
import SmoothAOS from "../_components/SmoothAOS";
import PageBanner from "../_components/PageBanner";
import AboutMissionVision from "../_components/AboutMissionVision";
import LeadershipTeam from "../_components/LeadershipTeam";
import OurImpact from "../_components/OurImpact";
import OurCommitment from "../_components/OurCommitment";
import OurInnovation from "../_components/OurInnovation";
import Testimonials from "../_components/Testimonials";
import Quote from "../_components/Quote";
import Footer from "../_components/Footer";

export default function ZinnantiSurgicalAboutPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)] overflow-x-hidden">
      <SmoothAOS />

      <Header />

      <main className="relative flex flex-col">
        <PageBanner title="About Us" />
        <AboutMissionVision />
        <LeadershipTeam />
        <OurImpact />
        <OurCommitment />
        <OurInnovation />
        <Testimonials />
      </main>

      <Footer />
    </div>
  );
}
