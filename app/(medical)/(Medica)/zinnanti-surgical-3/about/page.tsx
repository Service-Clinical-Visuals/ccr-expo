/**
 * Zinnanti Surgical About Page
 * Master Reference: Inogen Development Standards
 */
"use client";

import React from "react";
import {
  AboutHero,
  AboutCompany,
  SpecialitiesMission,
  WomensHealth,
  HRAProcedure,
  OurTeam,
  Testimonials,
} from "../_components/about";

export default function AboutPage() {
  return (
    <div className="relative flex flex-col w-full">
      {/* 1. About Banner & Breadcrumbs */}
      <AboutHero />

      {/* 2. Section 1: About Zinnanti Surgical (Doctor Image & Innovation Narrative) */}
      <AboutCompany />

      {/* 3. Section 2: Our Specialities (Mission, Vision, Commitment with s1, s2, s3) */}
      <SpecialitiesMission />

      {/* 4. Section 3: Women's Health – LEEP Excision (t1, t2, t3, t4, t5, t6) */}
      <WomensHealth />

      {/* 5. Section 4: HRA Precancerous Lesion Treatment (p1) */}
      <HRAProcedure />

      {/* 6. Section 5: Our Teams (teams1, teams2, teams3) */}
      <OurTeam />

      {/* 7. Section 6: Our Testimonials (testi.webp) */}
      <Testimonials />
    </div>
  );
}
