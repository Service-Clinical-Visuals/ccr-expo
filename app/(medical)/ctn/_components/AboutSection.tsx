"use client";

import React from "react";
import Image from "next/image";
import Button from "./Button";

export default function AboutSection() {
  return (
    <section className="custom-container py-16 md:py-24 px-2 md:px-10">
      {/* 1. Top Header Box: Global Leaders in Recovery Technology */}
      <div
        className="bg-[#3d57a5] rounded-4xl p-6 sm:p-8 md:p-10 xl:p-12 text-white"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-8">

          {/* Left: Heading & Paragraph */}
          <div
            className="xl:max-w-5xl"
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            <h2 className="section-title font-semibold text-white tracking-tight">
              Global Leaders In Recovery Technology
            </h2>
            <p className="section-text text-white mt-4 sm:mt-5 max-w-7xl">
              Founded in 2013, CTN is a Finnish high-technology company specialising in
              recovery and wellness solutions. Our devices are used in over 50 countries,
              combining Finnish engineering with professional recovery expertise. We design
              technologies including cryotherapy, red light therapy, hyperbaric oxygen, and
              muscle stimulation systems that deliver measurable results while remaining
              safe, scalable, and easy to operate.
            </p>
          </div>

          {/* Right: Tagline & Learn More Button */}
          <div
            className="flex flex-col items-start xl:items-end justify-between gap-6 sm:gap-8 flex-shrink-0"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <div className="card-title text-white xl:text-right font-medium">
              <p>Finnish Innovation. Smarter Recovery.</p>
              <p className="mt-0.5">Better Performance.</p>
            </div>

            <Button href="#learn-more" variant="white">
              Learn More
            </Button>
          </div>

        </div>
      </div>

      {/* 2. Bottom Row: Features Card (Left) & Showroom Image (Right) */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 sm:gap-8 mt-6 sm:mt-8 items-stretch">

        {/* Left Column: Features Card */}
        <div
          className="xl:col-span-4 bg-[#3d57a5] rounded-4xl p-6 sm:p-8 md:p-10 text-white flex flex-col justify-center gap-7 sm:gap-8"
          data-aos="fade-right"
          data-aos-duration="800"
          data-aos-delay="100"
        >

          {/* Feature 1: Our Mission */}
          <div
            className="flex items-start gap-4 sm:gap-5"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-md p-1">
              <Image
                src="/medical/ctn/abt1.png"
                alt="Our Mission"
                width={36}
                height={36}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="card-title text-white font-semibold">Our Mission</h3>
              <p className="section-text text-white/90 mt-1.5 sm:mt-2">
                Our mission is to improve recovery and well-being through intelligent
                technology that reduces pain, accelerates recovery, and supports performance.
              </p>
            </div>
          </div>

          {/* Feature 2: Built On Expertise */}
          <div
            className="flex items-start gap-4 sm:gap-5"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-md p-1">
              <Image
                src="/medical/ctn/abt2.png"
                alt="Built On Expertise"
                width={36}
                height={36}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex-1">
              <h3 className="card-title text-white font-semibold">Built On Expertise</h3>
              <p className="section-text text-white/90 mt-1.5 sm:mt-2">
                Our team combines engineering, health technology, and commercial expertise to
                deliver dependable solutions for clinics.
              </p>
            </div>
          </div>

          {/* Feature 3: CTN Advantage */}
          <div
            className="flex items-start gap-4 sm:gap-5"
            data-aos="fade-up"
            data-aos-delay="350"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-md p-1">
              <Image
                src="/medical/ctn/abt3.png"
                alt="CTN Advantage"
                width={36}
                height={36}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex-1">
              <h3 className="card-title text-white font-semibold">CTN Advantage</h3>
              <p className="section-text text-white/90 mt-1.5 sm:mt-2">
                CTN devices deliver reliable, safe, and efficient performance with intuitive
                operation, automation, CTN Academy™ training, and smart connectivity.
              </p>
            </div>
          </div>

        </div>

        {/* Right Column: Showroom Image */}
        <div
          className="xl:col-span-8 rounded-4xl overflow-hidden bg-slate-100 min-h-[380px] sm:min-h-[460px] md:min-h-[500px] flex"
          data-aos="fade-left"
          data-aos-duration="800"
          data-aos-delay="200"
        >
          <div className="relative w-full h-full min-h-[380px] sm:min-h-[460px] md:min-h-[500px]">
            <Image
              src="/medical/ctn/abt.png"
              alt="CTN Innovation and Recovery Showroom"
              fill
              className="object-cover rounded-4xl"
              sizes="(max-width: 1280px) 100vw, 66vw"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}
