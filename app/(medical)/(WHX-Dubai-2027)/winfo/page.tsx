import React from "react";
import AosInit from "./_components/AosInit";
import Header from "./_components/Header";
import Banner from "./_components/Banner";
import AboutSection from "./_components/AboutSection";
import Explore360 from "./_components/Explore360";
import Products from "./_components/Products";
import VideoShowcase from "./_components/VideoShowcase";
import Expertise from "./_components/Expertise";
import Newsletter from "./_components/Newsletter";
import Footer from "./_components/Footer";

export default function WinfoPage() {
  return (
    <main className="relative bg-white overflow-x-clip">
      <AosInit />
      <Header />
      <Banner />
      <AboutSection />
      <Explore360 />
      <Products />
      <VideoShowcase />
      <Expertise />
      <Newsletter />
      <Footer />
    </main>
  );
}
