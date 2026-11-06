"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function QualityManagement() {
  return (
    <section id="contact-section" className="relative w-full py-16 sm:py-20 md:py-24 bg-[#EBF6F9] overflow-hidden">
      {/* Background Graphic */}
      <img
        src="/medical/flashman-uk/bg2.webp"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
      />

      <div className="custom-container relative z-10 px-4 sm:px-6 md:px-8 xl:px-24 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-12 items-center">
          {/* Left Column: Text & CTA */}
          <div
            className="lg:col-span-7 xl:col-span-6 flex flex-col justify-center"
            data-aos="fade-right"
            data-aos-duration="900"
          >
            {/* Eyebrow */}
            <span className="section-text text-[#2997AA] font-semibold font-inter tracking-wide mb-2">
              | Let&apos;s Connect
            </span>

            {/* Main Heading */}
            <h2 className="section-title font-bold text-[#1E293B] font-unbounded leading-tight tracking-tight mb-4">
              We&apos;re Here to Help You Move Forward
            </h2>

            {/* Description */}
            <p className="section-text font-inter text-[#475569] leading-relaxed mb-6 sm:mb-8">
              Have questions about our medical devices, orthopedic solutions or business opportunities? Our team is ready to assist you with product enquiries, expert guidance and partnership discussions. Reach out to us and let&apos;s start a conversation.
            </p>

            {/* CTA Button */}
            <div>
              <Link
                href="#contact"
                className="group inline-flex items-center justify-center gap-0 hover:gap-2 px-7 py-2.5 rounded-lg border border-[#2997AA] text-[#2997AA] bg-transparent hover:bg-[#2997AA] hover:text-white transition-all duration-300 font-unbounded font-medium cursor-pointer shadow-2xs hover:shadow-sm"
              >
                <span className="btn-text">Contact Us</span>
                <span className="w-0 overflow-hidden opacity-0 group-hover:w-5 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center flex-shrink-0">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </span>
              </Link>
            </div>
          </div>

          {/* Right Column: Team Photo with Teal Offset Frame */}
          <div
            className="lg:col-span-5 xl:col-span-6 flex items-center justify-center relative p-3 sm:p-5"
            data-aos="fade-left"
            data-aos-duration="900"
            data-aos-delay="150"
          >
            {/* Decorative Offset Teal Frame behind image */}
            <div
              className="absolute inset-0 translate-x-3 -translate-y-3 sm:translate-x-5 sm:-translate-y-5 border-5 border-[#2997AA] rounded-[24px] pointer-events-none z-0"
              aria-hidden="true"
            />

            {/* Team Photo Container */}
            <div className="relative z-10 w-full overflow-hidden rounded-[20px] shadow-lg">
              <img
                src="/medical/flashman-uk/connect.webp"
                alt="Flashman Team"
                className="w-full h-auto object-cover rounded-[20px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
