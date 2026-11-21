"use client";

import React from "react";
import Typography from "./Typography";
import { Eye, ShieldCheck } from "lucide-react";

/**
 * Vision & Values Section - Vitrex Medical Group
 *
 * ARCHITECTURAL REFERENCE (Inogen):
 * 1. Dual Card Symmetrical Grid:
 *    - Two equal height cards on light gray `#F8F8F8` background.
 * 2. Visual Anchoring:
 *    - Customized icon badges with brand color tokens.
 * 3. 4K Scalability:
 *    - Font sizes, card padding, and icon containers scale smoothly up to 3800px+.
 */
const VisionValues = () => {
  return (
    <section id="vision-values" className="w-full py-16 xl:py-24 bg-[#F8F8F8] overflow-hidden">
      <div className="custom-container">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 min-[2500px]:gap-12 min-[3800px]:gap-16 items-stretch">
          
          {/* Card 1: Vision */}
          <div
            className="w-full bg-white rounded-[11px] min-[2500px]:rounded-[18px] min-[3800px]:rounded-[26px] p-8 sm:p-10 lg:p-12 min-[2500px]:p-16 min-[3800px]:p-20 shadow-[0_2px_15px_rgba(0,0,0,0.04)] flex flex-col justify-start gap-4 transition-all duration-300 hover:shadow-lg"
            data-aos="fade-up"
          >
            {/* Icon Badge */}
            <div className="w-[50px] h-[50px] 2k:w-[80px] 2k:h-[80px] 4k:w-[110px] 4k:h-[110px] rounded-[8px] 2k:rounded-[14px] 4k:rounded-[20px] bg-[#E1F0FF] flex items-center justify-center mb-2 mx-auto lg:mx-0">
              <Eye className="w-6 h-6 2k:w-10 2k:h-10 4k:w-14 4k:h-14 text-[#0062A1]" />
            </div>

            <span className="font-semibold text-[0.6875rem] min-[2500px]:text-[0.9375rem] min-[3800px]:text-[1.1875rem] uppercase tracking-[1.2px] text-[#64748B]">
              CORE DIRECTIVE
            </span>

            <Typography
              variant="h3"
              color="dark"
              className="text-[1.4375rem] sm:text-[1.8125rem] lg:text-[1.4375rem] min-[2500px]:text-[2.1875rem] min-[3800px]:text-[2.9375rem] font-semibold text-[#00162C]"
            >
              Vision
            </Typography>

            <Typography
              variant="p"
              color="dark"
              className="text-[0.8125rem] sm:text-[0.9375rem] lg:text-[1.0625rem] min-[2500px]:text-[1.4375rem] min-[3800px]:text-[1.9375rem] leading-[1.62] text-[#43474D] mt-2"
            >
              As VMG Vitrex Medical Group, we strive to be the leading European medical device & IVD manufacturing group, developing, producing and supplying high-quality healthcare products and tailormade med-tech solutions that embody special expertise, reliability, trustworthiness and are made with respect and dedication to enhance the life of healthcare professionals and their patients worldwide.
            </Typography>
          </div>

          {/* Card 2: Guided by Values, Driven by Purpose */}
          <div
            className="w-full bg-white rounded-[11px] min-[2500px]:rounded-[18px] min-[3800px]:rounded-[26px] p-8 sm:p-10 lg:p-12 min-[2500px]:p-16 min-[3800px]:p-20 shadow-[0_2px_15px_rgba(0,0,0,0.04)] flex flex-col justify-start gap-4 transition-all duration-300 hover:shadow-lg"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {/* Icon Badge */}
            <div className="w-[50px] h-[50px] 2k:w-[80px] 2k:h-[80px] 4k:w-[110px] 4k:h-[110px] rounded-[8px] 2k:rounded-[14px] 4k:rounded-[20px] bg-[#05568D] flex items-center justify-center mb-2 mx-auto lg:mx-0">
              <ShieldCheck className="w-6 h-6 2k:w-10 2k:h-10 4k:w-14 4k:h-14 text-white" />
            </div>

            <span className="font-semibold text-[0.6875rem] min-[2500px]:text-[0.9375rem] min-[3800px]:text-[1.1875rem] uppercase tracking-[1.2px] text-[#64748B]">
              OUR CORE VALUES
            </span>

            <Typography
              variant="h3"
              color="dark"
              className="text-[1.4375rem] sm:text-[1.8125rem] lg:text-[1.4375rem] min-[2500px]:text-[2.1875rem] min-[3800px]:text-[2.9375rem] font-semibold text-[#00162C]"
            >
              Guided by Values, Driven by Purpose
            </Typography>

            <Typography
              variant="p"
              color="dark"
              className="text-[0.8125rem] sm:text-[0.9375rem] lg:text-[1.0625rem] min-[2500px]:text-[1.4375rem] min-[3800px]:text-[1.9375rem] leading-[1.62] text-[#43474D] mt-2"
            >
              Our core values are rooted in quality, customer satisfaction, trustworthiness, sustainability, responsibility, and teamwork. We are committed to delivering high-quality products, prioritizing customer needs, building relationships based on trust and integrity, and conducting business ethically and sustainably. Through collaboration, accountability, and shared values, we strive to create long-term value and make a positive impact on healthcare professionals, patients, and society.
            </Typography>
          </div>

        </div>

      </div>
    </section>
  );
};

export default VisionValues;

