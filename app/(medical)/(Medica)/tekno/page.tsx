import React from "react";
import AosInit from "./_components/AosInit";
import Header from "./_components/Header";
import Banner from "./_components/Banner";
import InnovationAndTradition from "./_components/InnovationAndTradition";
import Explore360 from "./_components/Explore360";
import ProductSolutions from "./_components/ProductSolutions";
import AbsorbableDesign from "./_components/AbsorbableDesign";
import GlimpseGallery from "./_components/GlimpseGallery";
import AdvancedMeshSolutions from "./_components/AdvancedMeshSolutions";
import QualityManagement from "./_components/QualityManagement";
import Footer from "./_components/Footer";

export default function SeragWiessnerPage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden overflow-y-hidden">
      <AosInit />
      <Header />
      <Banner />
      <InnovationAndTradition />
      <Explore360 />
      <ProductSolutions />
      <AbsorbableDesign />
      <GlimpseGallery />
      <AdvancedMeshSolutions />
      <QualityManagement />
      <Footer />
    </main>
  );
}
