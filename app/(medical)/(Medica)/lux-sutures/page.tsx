import React from "react";
import AosInit from "./_components/AosInit";
import Header from "./_components/Header";
import Banner from "./_components/Banner";
import AboutSection from "./_components/AboutSection";
import Explore360 from "./_components/Explore360";
import OurProducts from "./_components/OurProducts";
import CleanroomShowcase from "./_components/CleanroomShowcase";
import QualityCertifications from "./_components/QualityCertifications";
import HerniaMesh from "./_components/HerniaMesh";
import Events from "./_components/Events";
import Footer from "./_components/Footer";

export default function LuxSuturesPage() {
  return (
    <main className="min-h-screen bg-white">
      <AosInit />
      <Header />
      <Banner />
      <AboutSection />
      <Explore360 />
      <OurProducts />
      <CleanroomShowcase />
      <QualityCertifications />
      <HerniaMesh />
      <Events />
      <Footer />
    </main>
  );
}
