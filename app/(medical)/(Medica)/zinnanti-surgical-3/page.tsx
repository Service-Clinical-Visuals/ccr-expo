/**
 * Zinnanti Surgical Landing Page (Home)
 * Master Reference: Inogen Development Standards
 */
"use client";

import React from "react";
import {
  Hero,
  HomeAbout,
  Specialities,
  Experience360,
  WhyZinnanti,
  SmokeEvacuatorVideo,
  Products,
  SpecializedTechnology,
  VideoGallery,
} from "./_components/home";

export default function ZinnantiHomePage() {
  return (
    <div className="relative flex flex-col w-full">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. About Section */}
      <HomeAbout />

      {/* 3. Specialities Section (s1, s2, s3) */}
      <Specialities />

      {/* 4. 360° Experience Section */}
      <Experience360 />

      {/* 5. Why Zinnanti Surgical Section */}
      <WhyZinnanti />

      {/* 6. Zinnanti Surgical Smoke Evacuator Unit (Video 01) */}
      <SmokeEvacuatorVideo />

      {/* 7. Products Section (p1, p2, p3, etc.) */}
      <Products />

      {/* 8. Specialized Technology Section (Video 02) */}
      <SpecializedTechnology />

      {/* 9. Video Gallery Section (g1, g2, g3) */}
      <VideoGallery />
    </div>
  );
}
