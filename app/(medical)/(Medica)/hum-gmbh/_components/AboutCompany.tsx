"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

export default function AboutCompany() {
  return (
    <section id="about" className="w-full py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
      <div className="custom-container">

        {/* Section Heading with Red Pill Line */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-14 min-[2500px]:mb-20 min-[3800px]:mb-28" data-aos="fade-up">
          <Typography
            variant="h2"
            color="dark"
            className="font-['Exo_2'] font-bold"
          >
            About Our Company
          </Typography>
          <div className="w-[130px] sm:w-[177px] min-[2500px]:w-[260px] min-[3800px]:w-[350px] h-[4px] sm:h-[5px] min-[2500px]:h-[8px] min-[3800px]:h-[10px] bg-[#A12624] rounded-full mt-3 sm:mt-4" />
        </div>

        {/* Two Columns of Text */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 min-[2500px]:gap-20 min-[3800px]:gap-28 mb-10 sm:mb-14 min-[2500px]:mb-20 min-[3800px]:mb-28"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <Typography variant="p" color="gray" className="leading-relaxed">
            The company concept was, and remains, very simple: &ldquo;To offer high-quality products at competitive prices&rdquo;—all with the overarching corporate goal of &ldquo;customer satisfaction.&rdquo; We master constantly changing market conditions and increasing customer demands in the areas of products and services by meeting the highest quality standards, in accordance with our quality management system according to DIN EN ISO 13485.
          </Typography>

          <Typography variant="p" color="gray" className="leading-relaxed">
            Furthermore, since our collaboration in 2015 and the merger in 2024 with our former subsidiary RENOSTER, we have repositioned ourselves in the textile technology sector. In addition to our own German-European production facilities in Bielefeld and Sf. Gheorge, for our emergency and transport containers, etc., we are also a well-established OEM service provider and technology consultant for technical textile systems.
          </Typography>
        </div>

        {/* Two Images Side by Side (p1 and p2) */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 min-[2500px]:gap-14 min-[3800px]:gap-20"
          data-aos="zoom-in-up"
          data-aos-delay="150"
        >
          <div className="rounded-[16px] sm:rounded-[22px] lg:rounded-[24px] overflow-hidden bg-gray-50 border border-gray-100 shadow-sm group aspect-[16/9] w-full">
            <img
              src="/medical/hum-gmbh/about1.png"
              alt="HUM Medical Technology Product"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>

          <div className="rounded-[16px] sm:rounded-[22px] lg:rounded-[24px] overflow-hidden bg-gray-50 border border-gray-100 shadow-sm group aspect-[16/9] w-full">
            <img
              src="/medical/hum-gmbh/about2.png"
              alt="HUM Textile Technology Systems"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
        </div>

        {/* Horizontal Divider */}
        <div className="w-full h-[1px] bg-[#D9D9D9] my-10 sm:my-14 lg:my-16 min-[2500px]:my-24" />

        {/* Bottom Request Callout & Product Details Button */}
        <div
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8 min-[2500px]:gap-14"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <Typography
            variant="p"
            color="gray"
            className="w-full md:max-w-[70%] xl:max-w-[70%] max-w-[90%] leading-relaxed"
          >
            Do you have a specific request for which you don&apos;t have a solution? We are always happy to assist you using the contact information you already have. Put us to the test; we rise to every challenge!
          </Typography>

          <div className="shrink-0 w-full sm:w-auto">
            <Button
              text="View Product Details"
              variant="primary"
              href="#cpap"
              showIcon={true}
              className="w-full sm:w-auto"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
