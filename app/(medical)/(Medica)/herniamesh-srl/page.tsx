import React from "react";
import AosInit from "./_components/AosInit";
import Header from "./_components/Header";
import Banner from "./_components/Banner";
import AboutSection from "./_components/AboutSection";
import Explore360 from "./_components/Explore360";
import OurProducts from "./_components/OurProducts";
import FlexibleMesh from "./_components/FlexibleMesh";
import OurGallery from "./_components/OurGallery";
import CustomisableDesign from "./_components/CustomisableDesign";
import LatestEvents from "./_components/LatestEvents";
import Footer from "./_components/Footer";

export default function HerniameshSrlPage() {
  return (
    <main className="min-h-screen bg-white">
      <AosInit />
      <Header />
      <Banner />
      <AboutSection />
      <Explore360 />
      <OurProducts />
      <FlexibleMesh />
      <OurGallery />
      <CustomisableDesign />
      <LatestEvents />
      <Footer />
    </main>
  );
}
