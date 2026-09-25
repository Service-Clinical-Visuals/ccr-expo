"use client";

import React from "react";
import Button from "./Button";

export default function About() {
  return (
    <section id="about" className="w-full py-16 sm:py-20 md:py-24 lg:py-28 min-[2500px]:py-40 min-[3800px]:py-52 bg-white overflow-hidden">
      <div className="custom-container">
        <div className="block min-[1026px]:hidden mb-6" data-aos="fade-up">
          <h2 className="!text-[#2A2A2A] font-baloo font-semibold text-[26px] sm:text-[30px] md:text-[34px] leading-[1.3] capitalize">
            About Neurosoft
          </h2>
        </div>

        <div className="relative flex flex-col min-[1026px]:flex-row min-[1026px]:items-center w-full">
          <div
            className="w-full min-[1026px]:w-[58%] xl:w-[57%] rounded-[20px] overflow-hidden shadow-[0px_3px_8px_rgba(0,0,0,0.18)] z-10 shrink-0"
            data-aos="fade-right"
            data-aos-duration="900"
          >
            <img
              src="/medical/neurosoft/about.png"
              alt="About Neurosoft Healthcare Solutions"
              className="w-full about-img-height h-[320px] sm:h-[420px] md:h-[500px] min-[1026px]:h-[580px] xl:h-[660px] min-[2500px]:h-[1050px] min-[3800px]:h-[1350px] object-cover object-center"
            />
          </div>

          <div
            className="w-full min-[1026px]:w-[52%] xl:w-[50%] bg-white rounded-[20px] p-6 sm:p-8 md:p-10 lg:p-11 xl:p-12 min-[2500px]:p-16 min-[3800px]:p-22 shadow-[0px_3px_8px_rgba(0,0,0,0.18)] border border-black/5 z-20 mt-6 min-[1026px]:mt-0 min-[1026px]:-ml-20 xl:-ml-28 flex flex-col justify-center space-y-4 sm:space-y-5 min-[2500px]:space-y-8 self-center"
            data-aos="fade-left"
            data-aos-duration="900"
            data-aos-delay="150"
          >
            <div className="xl:max-w-[92%] space-y-3.5 min-[2500px]:space-y-6">
              <h2 className="hidden min-[1026px]:block !text-[#2A2A2A] font-baloo font-semibold text-[24px] sm:text-[28px] md:text-[30px] min-[2500px]:text-[44px] min-[3800px]:text-[58px] leading-[1.3] capitalize">
                About Neurosoft
              </h2>

              <p className="!text-[#4A4A4A] font-baloo font-normal text-[15px] sm:text-[16px] md:text-[17px] min-[2500px]:text-[24px] min-[3800px]:text-[32px] leading-[150%]">
                Neurosoft brings together medical expertise, scientific knowledge, and advanced technology to develop
                accessible solutions for modern clinical practice. Through collaboration with doctors, research centers,
                medical specialists, and trusted partners, Neurosoft develops and manufactures medical equipment with a
                focus on innovation, quality, and real-world clinical needs.
              </p>

              <p className="!text-[#4A4A4A] font-baloo font-normal text-[15px] sm:text-[16px] md:text-[17px] min-[2500px]:text-[24px] min-[3800px]:text-[32px] leading-[150%]">
                With in-house development and production, a global dealer network, and support services covering
                installation, training, upgrades, and technical assistance, Neurosoft delivers solutions to healthcare
                professionals worldwide.
              </p>

              <div className="flex items-start gap-3 sm:gap-4 pt-1">
                <div className="w-[24px] h-[24px] min-[2500px]:w-[36px] min-[2500px]:h-[36px] min-[3800px]:w-[48px] min-[3800px]:h-[48px] rounded-full bg-[#0AADF9] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <svg
                    className="w-3.5 h-3.5 min-[2500px]:w-5 min-[2500px]:h-5 min-[3800px]:w-7 min-[3800px]:h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="3"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="!text-[#4A4A4A] font-baloo font-normal text-[15px] sm:text-[16px] md:text-[17px] min-[2500px]:text-[24px] min-[3800px]:text-[32px] leading-[150%]">
                  <strong className="font-semibold !text-[#2A2A2A] text-inherit">Global Reach</strong> – Serving customers worldwide
                  through an extensive international distributor network.
                </p>
              </div>

              <div className="pt-2">
                <Button
                  text="Learn More About Us"
                  variant="navy"
                  showIcon={true}
                  className="text-[16px] min-[2500px]:text-[22px] min-[3800px]:text-[28px] min-[2500px]:!py-3.5 min-[2500px]:!px-7 min-[3800px]:!py-5 min-[3800px]:!px-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
