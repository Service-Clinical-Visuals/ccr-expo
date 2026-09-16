"use client";

import React from "react";
import Typography from "./Typography";

export default function GlobalDistribution() {
  const stats = [
    { icon: "/medical/str/g1.png", number: "60+", label: "Export Countries" },
    { icon: "/medical/str/g2.png", number: "25+", label: "OEM & Private Label Projects" },
    { icon: "/medical/str/g3.png", number: "15+", label: "Regenerative Products" },
    { icon: "/medical/str/g4.png", number: "15+", label: "Years Manufacturing Experience" },
    { icon: "/medical/str/g5.png", number: "10M+", label: "Clinical usage Experience" },
  ];

  return (
    <section
      id="distribution"
      className="relative w-full bg-white overflow-hidden"
    >
      <div className="custom-container relative z-10">
        {/* World Map — absolute, right edge of container */}
        <div
          className="hidden lg:block absolute z-0 pointer-events-none top-[80px] xl:top-[100px] min-[2500px]:top-[120px] min-[3800px]:top-[150px] right-0 w-[68%] h-[557px] min-[2500px]:h-[750px] min-[3800px]:h-[980px]"
        >
          <img
            src="/medical/str/world.png"
            alt="STR Global Distribution Network"
            className="w-full h-full object-cover object-left"
            data-aos="fade-left"
          />
        </div>

        {/* Text block */}
        <div
          className="relative z-10 flex flex-col items-start max-w-[480px] xl:max-w-[40%] min-[2500px]:max-w-[38%] min-[3800px]:max-w-[38%] pt-[60px] sm:pt-[80px] lg:pt-[134px] min-[2500px]:pt-[180px] min-[3800px]:pt-[240px]"
          data-aos="fade-right"
        >
          <div className="font-primary font-semibold text-[16px] text-[#F6821F] leading-[19px]">
            Global Distribution
          </div>

          <h2 className="font-primary font-semibold text-[28px] min-[2500px]:text-[38px] min-[3800px]:text-[48px] text-[#202020] leading-[40px] min-[2500px]:leading-[52px] min-[3800px]:leading-[64px] mt-[16px]">
            Connecting Market.
            <br />
            <span className="text-[#F6821F]">Powering Progress.</span>
          </h2>

          <p className="font-secondary font-normal text-[16px] min-[2500px]:text-[22px] min-[3800px]:text-[28px] text-[#404040] leading-[26px] min-[2500px]:leading-[34px] min-[3800px]:leading-[42px] mt-[16px] max-w-[440px] min-[2500px]:max-w-[640px] min-[3800px]:max-w-[820px]">
            From our base in Çorum, we connect with customers worldwide,
            delivering quality, reliability, and innovative solutions through
            a strong global network and a commitment to lasting partnerships
          </p>
        </div>

        {/* Mobile map */}
        <div className="block lg:hidden w-full my-8">
          <img
            src="/medical/str/world.png"
            alt="STR Global Distribution Network"
            className="w-full h-auto object-contain max-h-[300px]"
          />
        </div>

        {/* 5 Stat Cards */}
        <div
          className="relative z-10 flex flex-col sm:flex-row flex-wrap lg:flex-nowrap items-stretch gap-4 sm:gap-5 lg:gap-[24px] min-[2500px]:gap-[32px] min-[3800px]:gap-[40px] mt-[68px] sm:mt-[90px] lg:mt-[94px] min-[2500px]:mt-[118px] min-[3800px]:mt-[148px] pb-[70px] sm:pb-[110px] min-[2500px]:pb-[150px] min-[3800px]:pb-[190px]"
          data-aos="fade-up"
        >
          {stats.map((item, idx) => {
            return (
              <div
                key={idx}
                className="
                  flex-1 min-w-[150px] sm:min-w-[200px]
                  lg:w-[240px] lg:min-w-[240px] lg:max-w-[240px]
                  min-[2500px]:w-[340px] min-[2500px]:min-w-[340px] min-[2500px]:max-w-[340px]
                  min-[3800px]:w-[440px] min-[3800px]:min-w-[440px] min-[3800px]:max-w-[440px]
                  min-h-[170px] h-auto lg:h-[213px] min-[2500px]:h-[290px] min-[3800px]:h-[370px]
                  bg-white border border-[#B8B8B8] rounded-[10px] min-[2500px]:rounded-[16px] min-[3800px]:rounded-[20px]
                  p-[20px] min-[2500px]:p-[28px] min-[3800px]:p-[36px]
                  flex flex-col justify-between
                  shadow-sm hover:shadow-md hover:border-[#F6821F]
                  transition-all duration-300 group
                "
              >
                {/* Custom PNG Icon Badge */}
                <div className="w-[50px] h-[50px] min-[2500px]:w-[70px] min-[2500px]:h-[70px] min-[3800px]:w-[90px] min-[3800px]:h-[90px] rounded-full bg-[#FEECE0] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform overflow-hidden p-[10px] min-[2500px]:p-[14px] min-[3800px]:p-[18px]">
                  <img
                    src={item.icon}
                    alt={item.label}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Number + Label Container with locked alignment */}
                <div className="flex flex-col gap-[4px] min-[2500px]:gap-[8px]">
                  <div className="font-primary font-semibold text-[32px] min-[2500px]:text-[42px] min-[3800px]:text-[52px] text-[#F6821F] leading-[36px]">
                    {item.number}
                  </div>
                  <div className="font-secondary font-medium text-[17px] min-[2500px]:text-[24px] min-[3800px]:text-[30px] text-[#303030] leading-[24px] h-[48px] min-[2500px]:h-[68px] min-[3800px]:h-[84px] flex items-start">
                    {item.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}