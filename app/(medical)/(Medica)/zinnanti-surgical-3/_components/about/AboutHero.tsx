"use client";

import React from "react";
import Link from "next/link";
import Typography from "../Typography";

/**
 * AboutHero Banner & Breadcrumb - Zinnanti Surgical
 * Master Reference: Inogen Development Standards
 */
const AboutHero = () => {
  return (
    <section className="relative w-full pt-[130px] sm:pt-[150px] lg:pt-[170px] pb-14 sm:pb-20 bg-[#4F6744] bg-[url('/medical/zinnanti-surgical-3/bg.webp?v=2')] bg-cover bg-center bg-no-repeat overflow-hidden text-white">
      <div className="custom-container text-center space-y-3 sm:space-y-4" data-aos="fade-up">
        <Typography
          variant="h1"
          color="white"
          className="text-3xl sm:text-4xl lg:text-5xl min-[2500px]:text-6xl min-[3800px]:text-8xl font-bold tracking-tight"
        >
          About Us
        </Typography>

        <div className="flex items-center justify-center gap-2 text-sm sm:text-base min-[2500px]:text-xl min-[3800px]:text-2xl text-white/85 font-medium">
          <Link href="/zinnanti-surgical-3" className="hover:text-white transition-colors">
            Home
          </Link>
          <span className="text-white/60">&gt;</span>
          <span className="text-white font-semibold">About</span>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;

