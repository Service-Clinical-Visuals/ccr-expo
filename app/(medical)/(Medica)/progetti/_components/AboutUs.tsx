"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const AboutUs = () => {
  return (
    <section id="about" className="w-full py-20 lg:py-24 bg-white overflow-hidden">
      <div className="custom-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 xl:gap-8 min-[3800px]:gap-12 items-stretch">

          {/* Column 1: Text Content */}
          <div className="lg:col-span-6 xl:col-span-3 flex flex-col gap-4 min-[3800px]:gap-8 order-1 self-center" data-aos="fade-right">
            <Typography variant="h2" color="dark" className="leading-tight mb-2 min-[3800px]:mb-6">
              About Us
            </Typography>

            <Typography variant="p" color="dark" className="leading-relaxed mb-4 min-[3800px]:mb-8">
              For over 30 years, Progetti has been developing innovative medical products for the prevention and treatment of heart disease. Founded in Milan in 1991, the company combines Italian expertise with advanced technology and a global network spanning over 80 countries. Today, Progetti is based near Turin and is the only Italian company developing and manufacturing defibrillators, delivering trusted Made in Italy medical solutions worldwide.
            </Typography>

            <div>
              <Button text="Learn More" href="#about" variant="primary" showIcon={false} />
            </div>
          </div>

          {/* Column 2: Vertical Image */}
          <div className="lg:col-span-6 xl:col-span-3 order-2" data-aos="fade-up" data-aos-delay="100">
            <div className="w-full h-full aspect-[407/543] min-[3800px]:aspect-[407/543] overflow-hidden rounded-md min-[3800px]:rounded-2xl">
              <img src="/medical/progetti/section21.png" alt="Progetti Doctor" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Column 3: Stacked Horizontal Images */}
          <div className="lg:col-span-6 xl:col-span-3 flex flex-col justify-between gap-6 min-[3800px]:gap-12 order-3" data-aos="fade-up" data-aos-delay="200">
            <div className="w-full aspect-[390/260] overflow-hidden rounded-md min-[3800px]:rounded-2xl">
              <img src="/medical/progetti/section22.png" alt="Ambulance Team" className="w-full h-full object-cover" />
            </div>
            <div className="w-full aspect-[390/260] overflow-hidden rounded-md min-[3800px]:rounded-2xl">
              <img src="/medical/progetti/section23.png" alt="Engineers" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Column 4: Mission & Vision Cards */}
          <div className="lg:col-span-6 xl:col-span-3 flex flex-col justify-between gap-6 min-[3800px]:gap-12 order-4" data-aos="fade-left" data-aos-delay="300">

            {/* Mission Card */}
            <div className="group flex flex-col items-center justify-center p-6 min-[3800px]:p-12 border border-[var(--color-primary)] rounded-xl min-[3800px]:rounded-[2rem] text-center bg-white hover:bg-[var(--color-primary)] transition-colors duration-300 cursor-pointer h-full">
              <div className="flex items-center gap-2 min-[3800px]:gap-4 mb-4 min-[3800px]:mb-8">
                <img src="/medical/progetti/icon1.png" alt="Mission Icon" className="w-14 h-14 min-[3800px]:w-18 min-[3800px]:h-18 object-contain group-hover:brightness-0 group-hover:invert transition-all duration-300" />
                <Typography variant="h3" color="none" className="text-[#333333] group-hover:text-white transition-colors duration-300">Mission</Typography>
              </div>
              <Typography variant="p" color="none" className="text-[#333333] group-hover:text-white transition-colors duration-300 text-sm min-[3800px]:text-3xl leading-relaxed">
                Companies can create products as an end in themselves. Progetti srl strives to provide a solution with every product, creating tools that can save lives and facilitate the work of healthcare workers.
              </Typography>
            </div>

            {/* Vision Card */}
            <div className="group flex flex-col items-center justify-center p-6 min-[3800px]:p-12 border border-[var(--color-primary)] rounded-xl min-[3800px]:rounded-[2rem] text-center bg-white hover:bg-[var(--color-primary)] transition-colors duration-300 cursor-pointer h-full">
              <div className="flex items-center gap-2 min-[3800px]:gap-4 mb-4 min-[3800px]:mb-8">
                <img src="/medical/progetti/icon2.png" alt="Vision Icon" className="w-16 h-16 min-[3800px]:w-18 min-[3800px]:h-18 object-contain group-hover:brightness-0 group-hover:invert transition-all duration-300" />
                <Typography variant="h3" color="none" className="text-[#333333] group-hover:text-white transition-colors duration-300">Vision</Typography>
              </div>
              <Typography variant="p" color="none" className="text-[#333333] group-hover:text-white transition-colors duration-300 text-sm min-[3800px]:text-3xl leading-relaxed">
                We look to the future with enthusiasm and determination to create innovative tools that are ever closer to user needs and become the ideal partners in emergencies.
              </Typography>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;
