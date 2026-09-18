"use client";

import React from "react";
import Typography from "./Typography";
import { FaGlobe, FaHandshake, FaGlobeEurope, FaGlobeAmericas, FaGlobeAfrica, FaGlobeAsia, FaRegHandshake } from "react-icons/fa";
import { BiGlobe } from "react-icons/bi";

const Global = () => {
  return (
    <section id="global" className="w-full py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-6 min-[3800px]:gap-20">

        {/* Top Row: Text + Stats & Map Image */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 xl:gap-8  items-center">

          {/* Text Content */}
          <div className="xl:col-span-6 flex flex-col gap-6 order-1 relative z-10" data-aos="fade-right">
            <Typography variant="h5" className="text-[#36679B] font-medium">
              • Global Footprint
            </Typography>

            <Typography variant="h2" color="dark" className="leading-[1.3] xl:max-w-[95%]">
              Connecting Orthopaedic Innovation Across Borders
            </Typography>

            <Typography variant="p" color="dark" className="leading-relaxed">
              Euromed Implants works with distribution partners across more than 20 countries, delivering implant solutions and supporting local clinical requirements worldwide.
            </Typography>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="flex flex-col items-center text-center gap-2">
                <div className="w-16 h-16 min-[3800px]:w-20 min-[3800px]:h-20 bg-[#D5E6EF] rounded-full flex items-center justify-center text-[#36679B]">
                  <BiGlobe className="text-4xl min-[3800px]:text-4xl" />
                </div>
                <Typography variant="h2" color="dark" className="mt-2 font-bold">20+</Typography>
                <Typography variant="p" color="dark" className="text-sm min-[3800px]:text-xl">Countries<br />Worldwide</Typography>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <div className="w-16 h-16 min-[3800px]:w-20 min-[3800px]:h-20 bg-[#D5E6EF] rounded-full flex items-center justify-center text-[#36679B]">
                  <FaGlobeAmericas className="text-4xl min-[3800px]:text-4xl" />
                </div>
                <Typography variant="h2" color="dark" className="mt-2 font-bold">4</Typography>
                <Typography variant="p" color="dark" className="text-sm min-[3800px]:text-xl">Continents</Typography>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <div className="w-16 h-16 min-[3800px]:w-20 min-[3800px]:h-20 bg-[#D5E6EF] rounded-full flex items-center justify-center text-[#36679B]">
                  <FaRegHandshake className="text-4xl min-[3800px]:text-4xl" />
                </div>
                <Typography variant="h2" color="dark" className="mt-2 font-bold">Global</Typography>
                <Typography variant="p" color="dark" className="text-sm min-[3800px]:text-xl">Distribution<br />Network</Typography>
              </div>
            </div>
          </div>

          {/* Map Image */}
          <div className="w-full xl:col-span-6 relative order-2 min-[3800px]:scale-125 min-[3800px]:origin-center" data-aos="fade-left" data-aos-delay="100">
            <img
              src="/euromed-implants/section3.png"
              alt="Global Footprint Map"
              className="w-full h-auto object-contain mix-blend-multiply"
            />
          </div>

        </div>

        {/* Bottom Row: Region Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 min-[3800px]:gap-12 w-full" data-aos="fade-up" data-aos-delay="200">

          {/* Europe */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 min-[3800px]:p-16 flex flex-col items-center text-center gap-4 hover:-translate-y-2 transition-transform duration-300">
            <div className="w-18 h-18 min-[3800px]:w-32 min-[3800px]:h-32 flex items-center justify-center">
              <img src="/euromed-implants/icon1.png" alt="Europe Icon" className="w-full h-full object-contain" />
            </div>
            <Typography variant="h4" className="text-[#36679B] !font-bold mt-2 min-[3800px]:text-4xl min-[3800px]:mt-6">Europe</Typography>
            <Typography variant="p" color="dark" className="text-sm min-[3800px]:text-xl leading-relaxed">
              Germany, Spain, Greece, Czech Republic, Romania, Bosnia, Ukraine
            </Typography>
          </div>

          {/* America */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 min-[3800px]:p-16 flex flex-col items-center text-center gap-4 hover:-translate-y-2 transition-transform duration-300">
            <div className="w-18 h-18 min-[3800px]:w-32 min-[3800px]:h-32 flex items-center justify-center">
              <img src="/euromed-implants/icon2.png" alt="America Icon" className="w-full h-full object-contain" />
            </div>
            <Typography variant="h4" className="text-[#36679B] !font-bold mt-2 min-[3800px]:text-4xl min-[3800px]:mt-6">America</Typography>
            <Typography variant="p" color="dark" className="text-sm min-[3800px]:text-xl leading-relaxed">
              Colombia, Peru, Mexico
            </Typography>
          </div>

          {/* Africa */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 min-[3800px]:p-16 flex flex-col items-center text-center gap-4 hover:-translate-y-2 transition-transform duration-300">
            <div className="w-18 h-18 min-[3800px]:w-32 min-[3800px]:h-32 flex items-center justify-center">
              <img src="/euromed-implants/icon3.png" alt="Africa Icon" className="w-full h-full object-contain" />
            </div>
            <Typography variant="h4" className="text-[#36679B] !font-bold mt-2 min-[3800px]:text-4xl min-[3800px]:mt-6">Africa</Typography>
            <Typography variant="p" color="dark" className="text-sm min-[3800px]:text-xl leading-relaxed">
              Tunisia, Libya, Kenya, Egypt
            </Typography>
          </div>

          {/* Asia */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 min-[3800px]:p-16 flex flex-col items-center text-center gap-4 hover:-translate-y-2 transition-transform duration-300">
            <div className="w-18 h-18 min-[3800px]:w-32 min-[3800px]:h-32 flex items-center justify-center">
              <img src="/euromed-implants/icon4.png" alt="Asia Icon" className="w-full h-full object-contain" />
            </div>
            <Typography variant="h4" className="text-[#36679B] !font-bold mt-2 min-[3800px]:text-4xl min-[3800px]:mt-6">Asia</Typography>
            <Typography variant="p" color="dark" className="text-sm min-[3800px]:text-xl leading-relaxed">
              Armenia, Iraq, Mongolia, Syria, Yemen, Vietnam
            </Typography>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Global;
