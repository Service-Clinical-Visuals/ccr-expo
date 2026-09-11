import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

export default function Banner() {
  return (
    <section className="relative w-full pt-[80px] md:pt-[100px] lg:pt-[120px] min-[2500px]:pt-[200px] min-[3800px]:pt-[280px] pb-8 lg:pb-12" data-aos="fade-up">
      {/* Extended Video Background */}
      <div className="custom-container relative">
        <div className="relative overflow-hidden w-full h-screen rounded-2xl md:rounded-3xl shadow-xl" data-aos="zoom-in" data-aos-delay="100">

          <DynamicVideoPlayer type="banner" className="absolute top-0 left-0 w-full h-full object-cover" />

          {/* Text Content */}
          <div className="absolute inset-0 z-20 pointer-events-none p-6 md:p-12 xl:p-16 flex flex-col justify-end">
            <div className="text-left pointer-events-auto" data-aos="fade-up" data-aos-delay="200">
              <Typography variant="h1" color="white" className="leading-tight mb-8">
                Driving Innovation Beyond<br />Convention
              </Typography>
              <Button text="Explore Our Products" href="#products" showIcon={true} variant="secondary" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
