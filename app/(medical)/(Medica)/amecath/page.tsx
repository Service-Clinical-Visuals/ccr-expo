import React from "react";
import AosInit from "./_components/AosInit";
import Header from "./_components/Header";
import Banner from "./_components/Banner";
import AboutSection from "./_components/AboutSection";
import Experience360 from "./_components/Experience360";
import ComprehensiveRange from "./_components/ComprehensiveRange";
import ProductsRange from "./_components/ProductsRange";
import Certifications from "./_components/Certifications";
import ProductPortfolio from "./_components/ProductPortfolio";
import LatestNews from "./_components/LatestNews";
import Footer from "./_components/Footer";

export default function AmecathPage() {
  return (
    <main className="min-h-screen bg-white">
      <AosInit />
      <Header />
      <Banner />
      <AboutSection />
      <Experience360 />
      <ComprehensiveRange />
      <ProductsRange />
      <Certifications />
      <ProductPortfolio />
      <LatestNews />
      <Footer />
    </main>
  );
}
