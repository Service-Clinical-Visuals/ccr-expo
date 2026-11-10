"use client";

import React from "react";
import Button from "./Button";

const STATS = [
  { icon: "/medical/dms-service/icon2.webp", title: "Comprehensive Monitoring", text: "24 Hour – 14 Day Options" },
  { icon: "/medical/dms-service/icon3.webp", title: "Advanced Reports", text: "ECG, QT & QTC" },
  { icon: "/medical/dms-service/icon4.webp", title: "Better Patient Care", text: "with Accurate Insights" },
  { icon: "/medical/dms-service/icon5.webp", title: "Expert Support", text: "Every Step of the Way" },
];

// Divider borders: 1 col (mobile) → 2x2 (sm–1799px) → 4 in a row (1800px+)
const STAT_BORDERS = [
  "",
  "border-t sm:border-t-0 sm:border-l",
  "border-t min-[1800px]:!border-t-0 min-[1800px]:!border-l",
  "border-t sm:border-l min-[1800px]:!border-t-0",
];

export default function HolterScanning() {
  return (
    <section
      id="services"
      className="relative w-full bg-[#EAF5FC] bg-no-repeat bg-cover bg-right py-16 sm:py-20 xl:pt-[140px] xl:pb-[60px] overflow-hidden"
      style={{ backgroundImage: "url('/medical/dms-service/bg1.webp')" }}
    >
      {/* Right-side image — its curved left edge merges into the background */}
      <img
        src="/medical/dms-service/service.webp"
        alt="Patient wearing ECG electrodes during Holter monitoring"
        className="hidden xl:block absolute bottom-0 right-0 h-full w-auto max-w-[42%] min-[1800px]:!max-w-[38%] object-cover object-right [mask-image:linear-gradient(to_right,transparent_0%,black_18%)] pointer-events-none select-none z-0"
      />

      <div className="custom-container relative z-10">
        <div className="lg:max-w-[85%] xl:max-w-[62%] min-[1800px]:!max-w-[67%]" data-aos="fade-up">
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
          className="mt-10 xl:mt-11 xl:max-w-[62%] min-[1800px]:!max-w-[67%] bg-white rounded-[8px] border-2 border-[#D6ECF7] shadow-[0_2px_10px_rgba(53,192,228,0.12)] grid grid-cols-1 sm:grid-cols-2 min-[1800px]:!grid-cols-4"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          {STATS.map((s, i) => (
            <div
              key={s.title}
              className={`flex items-center gap-4 px-6 py-6 min-[1800px]:!py-1 min-[1800px]:!my-5 border-[#D6ECF7] ${STAT_BORDERS[i]}`}
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
