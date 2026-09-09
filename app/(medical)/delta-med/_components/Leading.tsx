"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const Leading = () => {
  return (
    <section id="leading" className="w-full py-16 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-10">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-gray-200 pb-8 gap-6" data-aos="fade-up">
          <div className="w-full md:w-[65%] lg:w-[60%] flex flex-col gap-4">
            <Typography variant="h2" color="dark" className="font-bold">
              Leading Brand Of Oil Sealing
            </Typography>
            <Typography variant="p" color="dark" className="leading-relaxed">
              Every great success starts with a big dream first! This is also at the heart of our success. SKT was founded in Bursa in 1955 by three idealistic technical teachers at a time when all kinds of parts were needed in parallel with the development of the automotive sector in Turkey; it is currently the leading brand of its field operating within Diniz Holding.
            </Typography>
          </div>
          <div className="w-full md:w-auto flex justify-start md:justify-end">
            <Button text="Our Solutions" href="#solutions" showIcon={true} iconVariant="dark" />
          </div>
        </div>

        {/* Images Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full" data-aos="fade-up" data-aos-delay="100">
          <div className="w-full aspect-[820/670] overflow-hidden rounded-tl-[3rem] rounded-br-[3rem]">
            <img 
              src="/moto/skt/leading1.jpg" 
              alt="SKT Facility" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full aspect-[820/670] overflow-hidden rounded-tl-[3rem] rounded-br-[3rem]">
            <img 
              src="/moto/skt/leading2.jpg" 
              alt="SKT Logo Embossed" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Leading;
