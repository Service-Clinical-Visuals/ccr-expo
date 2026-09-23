"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const AboutUs = () => {
  return (
    <section id="about" className="w-full py-20 lg:py-30 bg-white overflow-hidden">
      <div className="custom-container">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 xl:gap-8 min-[3800px]:gap-16 items-center">

          {/* Image */}
          <div className="w-full xl:col-span-6 relative order-2 xl:order-1 flex justify-center xl:justify-start mt-8 xl:mt-0" data-aos="fade-right" data-aos-delay="100">
            <div className="relative w-[90%] md:w-[80%] xl:w-full min-[3800px]:w-full">
              <div className="relative z-10 rounded-2xl min-[3800px]:rounded-[3rem] overflow-hidden">
                <img src="/medical/eb-neuro/section2.png" alt="EB Neuro Since 1998" className="w-full h-auto object-contain" />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="xl:col-span-6 flex flex-col gap-3 order-1 xl:order-2" data-aos="fade-left">
            <Typography variant="h5" color="secondary" className="font-medium flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--color-secondary)] inline-block"></span> WHO WE ARE
            </Typography>

            <Typography variant="h2" color="dark" className="leading-tight mb-2">
              Advancing Neurodiagnostics Through Innovation
            </Typography>

            <div className="flex flex-col gap-4">
              <Typography variant="p" color="dark" className="leading-relaxed">
                Founded in 1864, the scientific instruments industry Officine Galileo established, during the 50s, a new Neurodiagnostic Division, the first in Italy. During the 80s it became an independent company named ESAOTE and in 1998 a branch of it joined a company named BASIS establishing EB Neuro, a new industrial subject only devoted to Neurodiagnostic. Actually, EB Neuro, privately owned, is one of the main worldwide players in the Neurodiagnostic market both with its own brand and with OEM products. In 2012, EB Neuro expanded its product portfolio through a company fusion with another Italian company of the same market segment named ATES Medica Device.
              </Typography>
              <Typography variant="p" color="dark" className="leading-relaxed">
                In 2024, EB Neuro celebrated an important milestone: the 25th year of activity. Our development in all these years has been driven by an ongoing commitment to improving public health, especially in the neurological field.
              </Typography>
            </div>

            {/* Icon Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 min-[3800px]:gap-y-12 py-8 min-[3800px]:py-16 my-4 min-[3800px]:my-10 md:divide-x md:divide-gray-200 min-[3800px]:divide-x-[4px]">
              <div className="flex items-center gap-3 min-[3800px]:gap-8 justify-start md:pr-4 min-[3800px]:pr-10">
                <div className="w-14 h-14 min-[3800px]:w-32 min-[3800px]:h-32 shrink-0">
                  <img src="/medical/eb-neuro/a1.png" alt="Innovation" className="w-full h-full object-contain" />
                </div>
                <Typography variant="span" color="dark" className="text-sm min-[3800px]:text-3xl font-semibold whitespace-nowrap">Innovation</Typography>
              </div>
              <div className="flex items-center gap-3 min-[3800px]:gap-8 justify-start md:px-4 min-[3800px]:px-10">
                <div className="w-14 h-14 min-[3800px]:w-32 min-[3800px]:h-32 shrink-0">
                  <img src="/medical/eb-neuro/a2.png" alt="Quality" className="w-full h-full object-contain" />
                </div>
                <Typography variant="span" color="dark" className="text-sm min-[3800px]:text-3xl font-semibold whitespace-nowrap">Quality</Typography>
              </div>
              <div className="flex items-center gap-3 min-[3800px]:gap-8 justify-start md:px-4 min-[3800px]:px-10">
                <div className="w-14 h-14 min-[3800px]:w-32 min-[3800px]:h-32 shrink-0">
                  <img src="/medical/eb-neuro/a3.png" alt="Security" className="w-full h-full object-contain" />
                </div>
                <Typography variant="span" color="dark" className="text-sm min-[3800px]:text-3xl font-semibold whitespace-nowrap">Security</Typography>
              </div>
              <div className="flex items-center gap-3 min-[3800px]:gap-8 justify-start md:pl-4 min-[3800px]:pl-10">
                <div className="w-14 h-14 min-[3800px]:w-32 min-[3800px]:h-32 shrink-0">
                  <img src="/medical/eb-neuro/a4.png" alt="Support" className="w-full h-full object-contain" />
                </div>
                <Typography variant="span" color="dark" className="text-sm min-[3800px]:text-3xl font-semibold whitespace-nowrap">Support</Typography>
              </div>
            </div>

            <div className="pt-2">
              <Button text="Know More" href="#about" variant="secondary" showIcon={true} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;
