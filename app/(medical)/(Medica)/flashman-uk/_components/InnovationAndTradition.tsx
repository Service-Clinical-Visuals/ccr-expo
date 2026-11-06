"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function InnovationAndTradition() {
  const [activeTab, setActiveTab] = useState<"mission" | "innovation">("mission");

  const tabContent = {
    mission:
      "Our vision is to lead the global healthcare industry through innovative medical technology solutions that improve lives and address evolving healthcare needs. At FlashMan, we are committed to delivering products that uphold the highest standards of quality, precision, and reliability while empowering healthcare professionals with dependable solutions. To ensure sustainable growth and long-term success, we prioritize operational excellence, focusing on cost efficiency, product quality, effective inventory management, and continuous process improvement. Through innovation, agility, and a strong commitment to customer satisfaction, we aim to build lasting partnerships and create a meaningful impact on the future of healthcare.",
    innovation:
      "At FlashMan, we strive to stay ahead of industry trends by continuously advancing product design, comfort, safety, and performance. Through ongoing investments in research, product development, and state-of-the-art technology, we aim to deliver innovative and reliable medical solutions that meet evolving healthcare needs and real-time market demands. Our commitment to continuous improvement, quality, and innovation enables us to develop advanced products that support healthcare professionals, enhance user experience, and ensure the highest standards of safety and protection.",
  };

  return (
    <section
      id="about"
      className="w-full bg-white py-14 sm:py-20 md:py-24"
    >
      <div className="custom-container px-4 sm:px-6 md:px-8 xl:px-24 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-10 items-center">
          {/* Left Column: Facility Image */}
          <div
            className="lg:col-span-6 xl:col-span-5 w-full relative flex items-center justify-center overflow-hidden"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <img
              src="/medical/flashman-uk/about.webp"
              alt="Flashman Manufacturing Facility"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Right Column: Text & Tabs Content */}
          <div
            className="lg:col-span-6 xl:col-span-7 flex flex-col gap-4 sm:gap-6"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            {/* Eyebrow / Subheading */}
            <div>
              <span className="section-text text-[#2997AA] font-semibold font-inter tracking-wide">
                | About Flashman
              </span>

              {/* Main Heading */}
              <h2 className="section-title font-bold text-[#1e293b] font-unbounded leading-tight tracking-tight mt-2">
                Advancing Healthcare Through Medical Innovation
              </h2>
            </div>

            {/* Intro Paragraph */}
            <p className="section-text font-inter text-[#475569] leading-relaxed">
              Flash-Man is dedicated to delivering innovative and reliable medical technologies that meet evolving healthcare needs. Through advanced engineering, quality-driven products, and a customer-focused approach, we empower healthcare professionals with dependable solutions that enhance patient care and build lasting partnerships.
            </p>

            {/* Mission & Innovation Tabbed Box */}
            <div className="bg-[#F6F6F6] rounded-2xl p-6 sm:p-7 border border-slate-100/80 shadow-xs">
              {/* Tab Headers */}
              <div className="flex items-center gap-6 sm:gap-8 mb-4">
                <button
                  type="button"
                  onClick={() => setActiveTab("mission")}
                  className={`card-title font-unbounded font-medium relative pb-1.5 transition-all cursor-pointer ${activeTab === "mission"
                    ? "text-[#2997AA] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2.5px] after:bg-[#2997AA] after:rounded-full"
                    : "text-[#475569] hover:text-[#1e293b]"
                    }`}
                >
                  Our Mission
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab("innovation")}
                  className={`card-title font-unbounded font-medium relative pb-1.5 transition-all cursor-pointer ${activeTab === "innovation"
                    ? "text-[#2997AA] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2.5px] after:bg-[#2997AA] after:rounded-full"
                    : "text-[#475569] hover:text-[#1e293b]"
                    }`}
                >
                  Innovation
                </button>
              </div>

              {/* Tab Content Paragraph */}
              <p className="section-text font-inter text-[#475569] leading-relaxed transition-opacity duration-200">
                {tabContent[activeTab]}
              </p>
            </div>

            {/* Bottom CTA Button */}
            <div className="pt-2">
              <Link
                href="#contact"
                className="group inline-flex items-center justify-center gap-0 hover:gap-2 px-6 py-2.5 rounded-lg border border-[#2997AA] text-[#2997AA] bg-transparent hover:bg-[#2997AA] hover:text-white transition-all duration-300 font-unbounded font-medium cursor-pointer shadow-2xs hover:shadow-sm"
              >
                <span className="btn-text">Discover Our Company</span>
                <span className="w-0 overflow-hidden opacity-0 group-hover:w-5 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center flex-shrink-0">
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
