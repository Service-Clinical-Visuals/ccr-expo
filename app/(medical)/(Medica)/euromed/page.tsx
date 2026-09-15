import React from "react";
import AosInit from "./_components/AosInit";
import Header from "./_components/Header";
import Banner from "./_components/Banner";
import EuromedOverview from "./_components/EuromedOverview";
import FoleyCatheter360 from "./_components/FoleyCatheter360";
import OurProducts from "./_components/OurProducts";
import ReliableSiliconeDesign from "./_components/ReliableSiliconeDesign";
import VisionMission from "./_components/VisionMission";
import OurPartners from "./_components/OurPartners";
import ClinicalPerformance from "./_components/ClinicalPerformance";
import LatestMedicalEvents from "./_components/LatestMedicalEvents";
import Footer from "./_components/Footer";

export default function EuromedPage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden overflow-y-hidden">
      <AosInit />
      <Header />
      <Banner />
      <EuromedOverview />
      <FoleyCatheter360 />
      <OurProducts />
      <ReliableSiliconeDesign />
      <VisionMission />
      <OurPartners />
      <ClinicalPerformance />
      <LatestMedicalEvents />
      <Footer />
    </main>
  );
}
