"use client";

import React from "react";
import Button from "./Button";

const STATS = [
  { icon: "/medical/dms-service/icon2.webp", title: "Comprehensive Monitoring", text: "24 Hour – 14 Day Options" },
  { icon: "/medical/dms-service/icon3.webp", title: "Advanced Reports", text: "ECG, QT & QTC" },
  { icon: "/medical/dms-service/icon4.webp", title: "Better Patient Care", text: "with Accurate Insights" },
  { icon: "/medical/dms-service/icon5.webp", title: "Expert Support", text: "Every Step of the Way" },
];

export default function HolterScanning() {
  return (
    <section
      id="services"
      className="relative w-full bg-[#EAF5FC] bg-no-repeat bg-cover bg-right py-16 sm:py-20 xl:py-[140px]"
      style={{ backgroundImage: "url('/medical/dms-service/bg1.webp')" }}
    >
      <div className="custom-container">
        <div className="lg:max-w-[85%] 2xl:max-w-[67%]" data-aos="fade-up">
          <p className="eyebrow font-mulish font-medium text-[var(--primary)] mb-3">Holter Scanning Service</p>
          <h2 className="section-title font-mulish font-bold text-[var(--heading)] mb-5">
            Free Holter Scanning Services, Better Equipment &amp; More Tests
          </h2>
          <p className="section-text font-inter text-[#333333] mb-10">
            Since 1995 We Have Been Providing Holter Scanning Services To Doctors Throughout The United States. Our
            Selection Of Holter Monitors Include The Brand New MyPatch®Sl Holter, MyPatch® 2 And 3 Channel Holter
            Monitor. 24 Hour, 3 Day, 7 Day, And 14 Day Monitors.
          </p>
          <Button href="#contact">Learn More</Button>
        </div>

        <div
          className="mt-10 xl:mt-11 2xl:max-w-[67%] bg-white rounded-[8px] border-2 border-[#D6ECF7] shadow-[0_2px_10px_rgba(53,192,228,0.12)] grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          {STATS.map((s, i) => (
            <div
              key={s.title}
              className={`flex items-center gap-4 px-6 py-6 xl:px-7 xl:py-1 my-0 xl:my-5 ${i > 0 ? "border-t sm:border-t-0 xl:border-l border-[#D6ECF7]" : ""
                } ${i === 2 ? "sm:border-t xl:border-t-0" : ""} ${i === 3 ? "sm:border-t sm:border-l xl:border-t-0" : ""} ${i === 1 ? "sm:border-l" : ""
                }`}
            >
              <img
                src={s.icon}
                alt=""
                className="w-[48px] h-[48px] xl:w-[56px] xl:h-[56px] min-[2560px]:w-[80px] min-[2560px]:h-[80px] object-contain flex-shrink-0"
              />
              <div>
                <h3 className="section-text font-inter font-medium text-[var(--heading)]">{s.title}</h3>
                <p className="footer-text font-inter text-[#333333] !text-[0.9em]">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
