"use client";

import React, { useState } from "react";
import Typography from "./Typography";
import Button from "./Button";
import SectionBadge from "./SectionBadge";

const tabs = [
  {
    id: "mission",
    label: "Our Mission",
    content:
      "To empower healthcare professionals with reliable, effective, innovative, and sustainable solutions in long- and short-term hemodialysis catheter sets, urology products, and accessories—enhancing clinical efficiency, supporting better outcomes, and raising the standard of patient care.",
  },
  {
    id: "vision",
    label: "Our Vision",
    content:
      "To be a globally trusted partner in hemodialysis and urology, recognized for precision manufacturing, uncompromising quality, and collaborative innovation that improves the lives of patients worldwide.",
  },
];

export default function About() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const active = tabs.find((tab) => tab.id === activeTab) ?? tabs[0];

  return (
    <section
      id="about"
      className="w-full py-12 md:py-16 lg:py-20 xl:py-24 min-[2500px]:py-32 min-[3800px]:py-44 bg-white overflow-hidden"
    >
      <div className="custom-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-9 min-[2500px]:gap-14 min-[3800px]:gap-20 items-center">
          {/* Left Column: Image */}
          <div
            className="relative w-full max-w-[720px] lg:max-w-none mx-auto aspect-[792/594] overflow-hidden"
            data-aos="fade-right"
          >
            <img
              src="/medical/dlr-meda/section2.png"
              alt="DLR Medikal manufacturing facility"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Column: Text Content */}
          <div
            className="flex flex-col items-start"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <SectionBadge text="About DLR Medikal" />

            <Typography
              variant="h2"
              color="dark"
              className="mt-4 min-[2500px]:mt-6 min-[3800px]:mt-8 leading-[1.6]"
            >
              Advancing Medical Care Through Precision, Innovation, Quality &amp;
              Global Collaboration
            </Typography>

            <Typography variant="p" color="muted" className="mt-1">
              DLR Medikal is a specialized medical device manufacturer focused on
              hemodialysis and urology solutions. With ISO 13485:2016-certified
              production infrastructure, advanced technology, disciplined
              processes, and rigorous quality control, the company develops
              reliable solutions for healthcare organizations worldwide. Beyond
              its standard product portfolio, DLR Medikal also collaborates with
              partners on customized OEM solutions, combining engineering
              expertise with a continuous commitment to patient care and medical
              innovation.
            </Typography>

            {/* Tabs */}
            <div
              role="tablist"
              className="flex items-end gap-5 min-[2500px]:gap-8 min-[3800px]:gap-11 mt-8 min-[2500px]:mt-12 min-[3800px]:mt-16"
            >
              {tabs.map((tab) => {
                const isActive = tab.id === activeTab;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveTab(tab.id)}
                    className={`pb-1 min-[2500px]:pb-2 border-b-2 min-[2500px]:border-b-[3px] min-[3800px]:border-b-4 transition-colors duration-300 cursor-pointer ${
                      isActive ? "border-[#0B1340]" : "border-transparent"
                    }`}
                  >
                    <Typography
                      variant="h3"
                      color="none"
                      className={`transition-colors duration-300 ${
                        isActive
                          ? "text-[#0B1340] font-medium"
                          : "text-[#595959] hover:text-[#0B1340]"
                      }`}
                    >
                      {tab.label}
                    </Typography>
                  </button>
                );
              })}
            </div>

            <Typography
              key={active.id}
              variant="p"
              color="muted"
              role="tabpanel"
              className="mt-6 min-[2500px]:mt-8 min-[3800px]:mt-11 animate-[fadeIn_0.4s_ease]"
            >
              {active.content}
            </Typography>

            <div className="mt-8 min-[2500px]:mt-12 min-[3800px]:mt-16">
              <Button
                text="Discover Our Story"
                href="#contact"
                variant="primary"
                className="px-10 py-3 min-[2500px]:px-16 min-[2500px]:py-5 min-[3800px]:px-20 min-[3800px]:py-7 min-[2500px]:rounded-[8px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
