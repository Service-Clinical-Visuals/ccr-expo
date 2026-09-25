import React from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Interactive360 from "./_components/Interactive360";
import Portfolio from "./_components/Portfolio";
import VideoSimple from "./_components/VideoSimple";
import Values from "./_components/Values";
import AssessmentVideo from "./_components/AssessmentVideo";
import News from "./_components/News";
import Footer from "./_components/Footer";

export default function EretnaPage() {
  return (
    <main className="w-full min-h-screen bg-white text-[#111111] overflow-x-hidden selection:bg-[#3452A7] selection:text-white">
      {/* 1. Navigation Header */}
      <Header />

      {/* 2. Hero Section */}
      <Hero />

      {/* 3. About Section */}
      <About />

      {/* 4. 360 Degree Interactive Section */}
      <Interactive360 />

      {/* 5. Product Portfolio with VitaScope, VICU, TCardio, Monitoring Systems */}
      <Portfolio />

      {/* 6. Video Clip 01 Section */}
      <VideoSimple />

      {/* 7. Our Values (Quality, Trust, Innovation, Sustainability) */}
      <Values />

      {/* 8. Video Clip 02 & Key Features */}
      <AssessmentVideo />

      {/* 9. Latest News Section */}
      <News />

      {/* 10. Footer */}
      <Footer />
    </main>
  );
}
