"use client";

import React from "react";
import { BookOpenText, Monitor, Settings, ShieldCheck } from "lucide-react";
import Typography from "./Typography";
import Button from "./Button";

const services = [
  { title: "Medical Device Safety Testing", Icon: ShieldCheck },
  { title: "Calibration & Repair Services", Icon: Settings },
  { title: "Workflow Automation Software", Icon: Monitor },
  { title: "Training & Technical Resources", Icon: BookOpenText },
];

const imageFrame =
  "w-full aspect-[387/464] overflow-hidden border-2 min-[2500px]:border-[3px] min-[3800px]:border-4 border-secondary rounded-[6px] min-[2500px]:rounded-[9px] min-[3800px]:rounded-[12px]";

export default function AboutUs() {
  return (
    <section id="about" className="w-full bg-white overflow-hidden">
      {/* Service strip */}
      <div className="w-full bg-primary py-8 sm:py-10 xl:py-11 min-[2500px]:py-16 min-[3800px]:py-22">
        <div className="custom-container grid grid-cols-1 min-[481px]:grid-cols-2 xl:grid-cols-4 gap-x-6 gap-y-6 sm:gap-y-8 min-[2500px]:gap-x-10 min-[3800px]:gap-x-14">
          {services.map(({ title, Icon }, index) => (
            <div
              key={title}
              className="flex items-center gap-4 min-[2500px]:gap-6 min-[3800px]:gap-8 xl:justify-center"
              data-aos="fade-up"
              data-aos-delay={index * 80}
            >
              <Icon
                className="w-9 h-9 sm:w-10 sm:h-10 min-[2500px]:w-14 min-[2500px]:h-14 min-[3800px]:w-20 min-[3800px]:h-20 text-white shrink-0"
                strokeWidth={1.5}
              />
              <Typography variant="h4" color="white" className="max-w-[180px] min-[2500px]:max-w-[270px] min-[3800px]:max-w-[360px]">
                {title}
              </Typography>
            </div>
          ))}
        </div>
      </div>

      {/* About */}
      <div className="custom-container grid grid-cols-1 xl:grid-cols-12 items-center gap-10 sm:gap-12 xl:gap-8 2xl:gap-10 min-[2500px]:gap-14 min-[3800px]:gap-20 py-12 sm:py-16 xl:py-[92px] min-[2500px]:py-36 min-[3800px]:py-48">
        {/* Heading + content (first on mobile/tablet) */}
        <div className="order-1 xl:order-2 xl:col-span-6 flex flex-col items-start" data-aos="fade-left">
          <div className="flex items-center gap-1.5 min-[2500px]:gap-2.5 min-[3800px]:gap-3 mb-3 sm:mb-4 min-[2500px]:mb-6 min-[3800px]:mb-8">
            <span className="block w-[54px] h-[2px] min-[2500px]:w-[80px] min-[2500px]:h-[3px] min-[3800px]:w-[108px] min-[3800px]:h-1 rounded-full bg-secondary shrink-0" />
            <Typography variant="h5" color="dark" weight="medium" className="uppercase">
              About Fluke Biomedical
            </Typography>
          </div>

          <Typography variant="h2" color="dark" className="mb-6 sm:mb-8 min-[2500px]:mb-12 min-[3800px]:mb-16">
            Trusted Expertise in Biomedical Testing
          </Typography>

          <div className="flex flex-col gap-4 sm:gap-5 min-[2500px]:gap-8 min-[3800px]:gap-10">
            <Typography variant="p" color="dark">
              Keeping life’s critical devices ready to go at a moment’s notice.
              <br />
              Fluke Health Solutions empowers our everyday heroes to focus only on protecting lives.
            </Typography>
            <Typography variant="p" color="dark">
              Comprised of four industry leaders—Fluke Biomedical, LANDAUER, RaySafe, and Victoreen — Fluke Health
              Solutions leads the biomedical and radiation detection markets with innovative products and services
              that help keep customers, patients, and clients safe. These businesses provide the tools to address
              increasing regulatory guidelines, higher quality standards, and rapid technology growth.
            </Typography>
            <Typography variant="p" color="dark">
              Fluke Biomedical leads the world in manufacturing biomedical test equipment like defibrillator analyzers
              and digital pressure meters. LANDAUER measures radiation exposure with dosimeter and radiation
              monitoring badges. RaySafe is the worldwide leader of X-ray test equipment, real-time staff dosimetry,
              and radiation survey meters. And Victoreen instruments are the trusted source for radiation monitoring
              systems and quality assurance for nuclear power professionals.
            </Typography>
          </div>
        </div>

        {/* Staggered images; Learn More sits under the first one (last on mobile/tablet) */}
        <div className="order-2 xl:order-1 xl:col-span-6 w-full grid grid-cols-2 gap-4 sm:gap-6 xl:gap-8 min-[2500px]:gap-12 min-[3800px]:gap-16 xl:pr-[4%]" data-aos="fade-right">
          <div className="flex flex-col items-end gap-6 sm:gap-8 min-[2500px]:gap-12 min-[3800px]:gap-16">
            <div className={imageFrame}>
              <img
                src="/medical/fluke/s1.webp"
                alt="Fluke Biomedical engineers testing medical equipment in the lab"
                className="w-full h-full object-cover object-[40%_center]"
              />
            </div>
            <Button text="Learn More" variant="primary" href="#about" showIcon={false} />
          </div>

          <div className="pt-[27%]">
            <div className={imageFrame}>
              <img
                src="/medical/fluke/s2.webp"
                alt="Fluke Biomedical headquarters lobby"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
