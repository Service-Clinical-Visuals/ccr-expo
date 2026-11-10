"use client";

import React from "react";
import Button from "./Button";

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full bg-white overflow-hidden py-16 sm:py-20 xl:py-28">
      {/* Decorative diagonal stripes */}
      <div aria-hidden className="pointer-events-none absolute inset-0 hidden lg:block">
        <div className="absolute left-[30%] bottom-[-10%] w-[85%] h-[60px] origin-bottom-left -rotate-[32deg] bg-gradient-to-r from-[#35C0E4]/5 via-[#35C0E4]/30 to-[#35C0E4]/50" />
        <div className="absolute right-[-12%] top-[-6%] w-[45%] h-[60px] origin-top-left rotate-[50deg] translate-x-[12%] bg-gradient-to-r from-[#35C0E4]/40 to-[#35C0E4]/60" />
      </div>

      <div className="custom-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16 items-center">
          {/* Text */}
          <div className="lg:col-span-7 xl:col-span-6" data-aos="fade-right">
            <p className="eyebrow font-mulish font-medium text-[var(--primary)] mb-3">About DMS-Service</p>
            <h2 className="section-title font-mulish font-bold text-[var(--heading)] mb-6">
              Advancing Cardiac Monitoring Through Innovation &amp; Experience
            </h2>
            <div className="section-text font-inter text-[#333333] space-y-5 mb-10">
              <p>
                Lynda Cole, Manager Of DMS-Service, First Started In The Holter Industry In 1973 In Her Father&apos;s
                Business, Scole Engineering Co. Inc.
              </p>
              <p>
                During This Time Scole Manufactured Holter Recorders For Companies Such As Marquette Electronics,
                Burdick, Hittman, Advanced Med And Pacesetters. Scole Engineering Also Designed The First Holter To Use
                A Disposable 9v Battery, The First Multi-Day Recorder And The First 3-Channel Holter Recorder.
              </p>
              <p>
                Through The Years Lynda Has Looked To Provide The Best Equipment To The Doctors And Facilities She Has
                Worked With. A Pet Peeve Has Been The Inability To Use A Holter Recorder With Any Holter System… Why
                Can&apos;t It Be Like The Old Days When Scole Engineering Co Manufactured Recorders That Worked With
                Numerous Holter Systems? With Her Team Of Programmers She Has Come Up With A Solution; One That Does Not
                Alter The Holter Analysis Software In Anyway. The Result Is The MyPatch® Utility Software Which Was
                Introduced With The Original MyPatch® Holter Recorder And Now Available For The Brand New MyPatch®Sl
                Holter Recorder. DMS Service Supplies Holter Devices And Systems That Are ECG Holter Monitors And
                Patches.
              </p>
            </div>
            <Button href="#products">Learn More</Button>
          </div>

          {/* Image */}
          <div
            className="lg:col-span-5 xl:col-span-6 flex justify-center lg:justify-end"
            data-aos="fade-left"
            data-aos-delay="150"
          >
            <img
              src="/medical/dms-service/about.webp"
              alt="MyPatch®-SL Holter recorder"
              className="w-full max-w-[520px] xl:max-w-[772px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
