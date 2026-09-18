import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

export default function Banner() {
  return (
    <section className="relative w-full h-screen min-h-[600px]" >
      {/* Full-width Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <DynamicVideoPlayer type="banner" className="absolute top-0 left-0 w-full h-full object-cover" />
      </div>

      {/* Text Content */}
      <div className="absolute inset-0 z-20 pointer-events-none pb-16 md:pb-24 xl:pb-32 min-[3800px]:pb-64 flex flex-col justify-end">
        <div className="custom-container w-full">
          <div className="text-left pointer-events-auto max-w-3xl min-[3800px]:max-w-[120rem]" data-aos="fade-up" data-aos-delay="200">
            <Typography variant="h1" color="white" className="mb-8 min-[3800px]:mb-20 leading-[1.3] md:leading-[1.4] min-[3800px]:leading-[1.5]">
              Shaping the Future of Joint<br className="hidden md:block" /> Reconstruction.
            </Typography>
            <Button text="Explore More" href="#" variant="primary" showIcon={false} />
          </div>
        </div>
      </div>
    </section >
  );
}
