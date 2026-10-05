import React from "react";
import AosInit from "./_components/AosInit";
import Header from "./_components/Header";
import Banner from "./_components/Banner";
import AboutSection from "./_components/AboutSection";
import Explore360 from "./_components/Explore360";
import OurProducts from "./_components/OurProducts";
import HerniaRepair from "./_components/HerniaRepair";
import ExportExperience from "./_components/ExportExperience";
import PrecisionMesh from "./_components/PrecisionMesh";
import QualityCertifications from "./_components/QualityCertifications";
import Footer from "./_components/Footer";

export default function SmiSuturesPage() {
  return (
    <main className="min-h-screen bg-white">
      <AosInit />
      <Header />
      <Banner />
      <AboutSection />
      <Explore360 />
      <OurProducts />
      <HerniaRepair />
      <ExportExperience />
      <PrecisionMesh />
      <QualityCertifications />
      <Footer />
    </main>
  );
}
