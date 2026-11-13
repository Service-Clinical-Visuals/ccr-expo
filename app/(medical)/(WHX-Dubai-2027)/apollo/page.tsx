import React from "react";
import AosInit from "./_components/AosInit";
import Header from "./_components/Header";
import Banner from "./_components/Banner";
import AboutSection from "./_components/AboutSection";
import PressureCare from "./_components/PressureCare";
import BeyondProducts from "./_components/BeyondProducts";
import PressureManagement from "./_components/PressureManagement";
import ProductRange from "./_components/ProductRange";
import PressureRelief from "./_components/PressureRelief";
import LatestNews from "./_components/LatestNews";
import Footer from "./_components/Footer";

export default function ApolloPage() {
  return (
    <main className="relative bg-white overflow-x-clip">
      <AosInit />
      <Header />
      <Banner />
      <AboutSection />
      <PressureCare />
      <BeyondProducts />
      <PressureManagement />
      <ProductRange />
      <PressureRelief />
      <LatestNews />
      <Footer />
    </main>
  );
}
