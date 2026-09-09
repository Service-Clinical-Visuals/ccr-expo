import React from "react";
import AosInit from "./_components/AosInit";
import Header from "./_components/Header";
import Banner from "./_components/Banner";
import AboutSection from "./_components/AboutSection";
import Explore360 from "./_components/Explore360";
import WellnessDevices from "./_components/WellnessDevices";
import IntendedPurpose from "./_components/IntendedPurpose";
import WellnessLeaders from "./_components/WellnessLeaders";
import RealWorldPerformance from "./_components/RealWorldPerformance";
import RealResults from "./_components/RealResults";
import LatestBlogs from "./_components/LatestBlogs";
import Footer from "./_components/Footer";

export default function CTNPage() {
  return (
    <main className="min-h-screen bg-white">
      <AosInit />
      <Header />
      <Banner />
      <AboutSection />
      <Explore360 />
      <WellnessDevices />
      <IntendedPurpose />
      <WellnessLeaders />
      <RealWorldPerformance />
      <RealResults />
      <LatestBlogs />
      <Footer />
    </main>
  );
}








