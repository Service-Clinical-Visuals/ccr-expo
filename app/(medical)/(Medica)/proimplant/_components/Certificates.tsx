"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const certificates = [
  { image: "/medical/proimplant/a1.png", alt: "HTCert EC-Certificate" },
  { image: "/medical/proimplant/a2.png", alt: "ISO 13485:2016" },
  { image: "/medical/proimplant/a3.png", alt: "ISO 9001:2015" },
];

const Certificates = () => {
  return (
    <section id="certificates" className="w-full py-20 bg-white overflow-hidden border-t border-gray-100">
      <div className="custom-container flex flex-col gap-10">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-gray-300 pb-8" data-aos="fade-up">
          <div className="flex flex-col gap-4 xl:max-w-[70%]">
            <Typography variant="h2" color="dark">
              Certificates
            </Typography>
            <Typography variant="p" color="muted" className="leading-relaxed">
              Our certified quality management systems demonstrate our commitment to maintaining high standards in medical device manufacturing. These certifications reflect our focus on quality, safety, precision, and continuous improvement across our operations.
            </Typography>
          </div>
          <div className="shrink-0" data-aos="fade-left" data-aos-delay="100">
            <Button text="View Certificates" href="#certificates" variant="primary" showIcon={true} />
          </div>
        </div>

        {/* 3-Column Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-2">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="flex flex-col w-full shadow-md border border-gray-100 bg-white hover:shadow-lg transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={200 + index * 100}
            >
              <div className="w-full aspect-[533/674] overflow-hidden flex items-center justify-center ">
                <img
                  src={cert.image}
                  alt={cert.alt}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certificates;
