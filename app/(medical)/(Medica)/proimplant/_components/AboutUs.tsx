"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const AboutUs = () => {
  return (
    <section id="about" className="w-full pt-24 pb-16 bg-white overflow-hidden">
      <div className="custom-container">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 min-[3800px]:gap-16 items-center">

          {/* Text Content */}
          <div className="xl:col-span-5 flex flex-col gap-6 order-1 lg:order-1" data-aos="fade-right">
            <Typography variant="h2" color="dark">
              About Hipknee
            </Typography>

            <div className="flex flex-col gap-4">
              <Typography variant="p" color="muted" className="leading-relaxed">
                Our Company, Which Manufactures A Wide Range Of Products Mainly For The Orthopedics And Traumatology Branches, Was Established In June 2004 With Over 25 Years Of Experience And Knowledge In The Sector.
              </Typography>
              <Typography variant="p" color="muted" className="leading-relaxed">
                With Its Experienced Staff In The Medical Sector, Our Company Is Committed To Providing High-Quality And Efficient Services, Mindful Of Its Role In Promoting Human Health, And Plans To Grow Rapidly Without Compromising On Integrity And Professional Ethics.
              </Typography>
              <Typography variant="p" color="muted" className="leading-relaxed">
                Hipknee Products, Manufactured In-House Through Design, Development, And Production Processes Along With Cleanroom Packaging Services, Are Produced To High-Quality Standards, Prioritizing Patient Safety And Surgeon Comfort.
              </Typography>
            </div>

            {/* Checkmark Item */}
            <div className="flex items-start gap-3 mt-2">
              <div className="shrink-0 mt-1">
                <svg width="25" height="25" viewBox="0 0 24 24" fill="var(--color-primary)" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" />
                </svg>
              </div>
              <Typography variant="p" color="muted" className="leading-relaxed">
                <span className="font-semibold text-dark">Quality & Professionalism - </span> Our experienced team is committed to delivering high-quality and efficient services while maintaining integrity, professional ethics, and a strong focus on human health.
              </Typography>
            </div>

            <div className="pt-4">
              <Button text="Learn More About Us" href="#about" variant="primary" showIcon={true} />
            </div>
          </div>

          {/* Image */}
          <div className="w-full xl:col-span-7 relative shadow-sm overflow-hidden  order-2 lg:order-2" data-aos="fade-left" data-aos-delay="100">
            <img src="/medical/proimplant/section2.png" alt="About Hipknee" className="w-full h-auto object-cover aspect-[963/548]" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;
