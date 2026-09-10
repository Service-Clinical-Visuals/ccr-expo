import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Banner() {
  return (

    <section className="custom-container mt-28 ">
      {/* Rounded Video Hero Box with signature diagonal corner radius */}
      <div
        className="relative w-full h-screen rounded-4xl overflow-hidden bg-black"
        data-aos="fade-in"
        data-aos-duration="1000"
      >

        {/* Dynamic Video Player Background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <DynamicVideoPlayer
            type="banner"
            className="absolute inset-0 w-full h-full object-cover xl:object-fill"
          />
        </div>


        {/* Banner Content Container (Positioned at bottom-left as in screenshot) */}
        <div className="relative z-20 h-full flex flex-col justify-end p-6 sm:p-10 md:p-10 xl:p-12">
          <div className="max-w-3xl">

            {/* Main Hero Heading */}

            <Typography variant="h1" color="dark" className="max-w-xl font-semibold text-3xl sm:text-4xl text-white tracking-tight font-outfit">
              Innovative Technologies For Human Well-Being

            </Typography>


            {/* Explore Solutions Button with Arrow Badge */}
            <div
              className="mt-6 sm:mt-8"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="350"
            >
              <Button text="Read More" href="#about" variant="primary" />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
