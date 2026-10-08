"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

export default function AboutUs() {
  return (
    <section id="corporate" className="w-full py-12 sm:py-16 lg:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-10 sm:gap-14">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 xl:max-w-[70%] max-w-[90%] mx-auto" data-aos="fade-up">
          <Typography variant="h2" color="dark" className="capitalize">
            Welcome to Boz Tibbi Malzeme A.S
          </Typography>
          <Typography variant="p" color="muted" className="leading-relaxed">
            We are manufacturing surgical consumable products that improve health results with our perspective to promote technology, research, and education. We are determined to take care of the most emergent needs of health sector in our country and around the world. Boz Tibbi Malzeme A.S was founded in August 2009 in Ankara by Adil Boz and Ali Aykut Boz. Grandfather of co-founders Adil Boz and their grandfather Adil Boz are reputable individuals in Turkish health sector.
          </Typography>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch" data-aos="fade-up" data-aos-delay="100">
          <div className="md:col-span-2 lg:col-span-6 relative rounded-[24px] sm:rounded-[30px] overflow-hidden shadow-[0px_3px_8px_rgba(0,0,0,0.24)] h-[340px] sm:h-[420px] lg:h-[535px] group">
            <img
              src="/medical/boz-tibbi-malzeme/a1.webp"
              alt="Trusted Name For Medical Device Production"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />

            <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 z-10 flex flex-col gap-4">
              <Typography
                variant="h3"
                color="white"
                className="!text-xl sm:!text-2xl lg:!text-3xl !font-bold tracking-wide uppercase leading-snug drop-shadow-md max-w-md"
              >
                TRUSTED NAME FOR MEDICAL DEVICE PRODUCTION
              </Typography>

              <div className="flex items-center gap-2 pt-1">
                <span className="w-3 h-3 rounded-full bg-white transition-all shadow-sm" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/60 transition-all shadow-sm" />
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 relative rounded-[24px] sm:rounded-[30px] overflow-hidden shadow-[0px_3px_8px_rgba(0,0,0,0.24)] h-[340px] sm:h-[420px] lg:h-[535px] group">
            <img
              src="/medical/boz-tibbi-malzeme/a2.webp"
              alt="Quality Inspection"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          <div className="lg:col-span-3 relative rounded-[24px] sm:rounded-[30px] overflow-hidden shadow-[0px_3px_8px_rgba(0,0,0,0.24)] h-[340px] sm:h-[420px] lg:h-[535px] group">
            <img
              src="/medical/boz-tibbi-malzeme/a3.webp"
              alt="Surgical Gauze and Instruments"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>

        <div
          className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pt-2"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="xl:max-w-[70%] max-w-[90%]">
            <Typography variant="p" color="muted" className="leading-relaxed">
              Boz Tibbi Malzeme A.S manufactures surgical sutures, absorbable hemostats, surgicalmeshes, surgical temporary pacing wire, sternum closure wire and PTFE (Teflon) pledgets materials for healthcare sector.
            </Typography>
          </div>
          <div className="shrink-0">
            <Button
              text="Learn More About Us"
              href="#corporate"
              variant="primary"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
