"use client";

import Header from "./_components/Header";
import Banner from "./_components/Banner";
import AboutUs from "./_components/AboutUs";
import Explore360 from "./_components/Explore360";
import NeonatalCare from "./_components/NeonatalCare";
import PrecisionDelivery from "./_components/PrecisionDelivery";
import InnovativeSolutions from "./_components/InnovativeSolutions";
import RespiratoryCare from "./_components/RespiratoryCare";
import InnovatingCare from "./_components/InnovatingCare";
import Footer from "./_components/Footer";
import SmoothAOS from "./_components/SmoothAOS";

export default function InternationalBiomedicalPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <SmoothAOS />
      <Header />

      <main className="relative flex flex-col">
        <Banner />
        <AboutUs />
        <Explore360 />
        <NeonatalCare />
        <PrecisionDelivery />
        <InnovativeSolutions />
        <RespiratoryCare />
        <InnovatingCare />
      </main>
      <Footer />
    </div>
  );
}
