"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const commitments = [
  {
    icon: "/medical/hydrafacial/icon1.png",
    title: "Committed to Skin",
    body: "Only Hydrafacial uses patented technology to cleanse, extract, and hydrate. Hydrafacial super serums are made with nourishing ingredients that create an instantly gratifying glow.",
  },
  {
    icon: "/medical/hydrafacial/icon2.png",
    title: "Committed to Our Customers",
    body: "From the moment you walk out, your skin looks dewy, plump, and glowing. But the true power of Hydrafacial treatments is what happens over time—the more you go, the more you glow. Each session builds on the last, and because it's customisable, you can update your skin ritual as your needs change.",
  },
  {
    icon: "/medical/hydrafacial/icon3.png",
    title: "Committed to Our Partners",
    body: "Support Hydrafacial providers to help make their business grow, with world class training and patented technology to cleanse, extract, and hydrate.",
  },
];

const images = [
  { src: "/medical/hydrafacial/1.png", alt: "Hydrafacial provider with device" },
  { src: "/medical/hydrafacial/2.png", alt: "Provider performing a Hydrafacial treatment" },
  { src: "/medical/hydrafacial/3.png", alt: "Client receiving a Hydrafacial treatment" },
  { src: "/medical/hydrafacial/4.png", alt: "Happy client after a Hydrafacial treatment" },
];

const AboutUs = () => {
  return (
    <section id="about" className="w-full py-16 bg-white overflow-hidden">
      <div className="custom-container flex flex-col lg:grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        {/* Content (Heading + Text + Bullets + Button) */}
        <div
          className="flex flex-col gap-6 order-1 lg:col-span-6 w-full"
          data-aos="fade-right"
        >
          <div className="flex flex-wrap gap-x-2">
            <Typography variant="h2" color="dark">
              The Hydrafacial Company
            </Typography>
            <Typography variant="h2" color="primary" >
              Commitment
            </Typography>
          </div>

          <Typography variant="p" color="muted" className="leading-relaxed">
            We believe that beauty is a feeling, not a physical attribute. Skincare doesn't need to be complicated. For all faces, change is possible. Our results are instant, and leave people emotionally charged. We challenge the status quo and aim to turn the skincare industry upside down with our revolutionary techniques, products and philosophy.
          </Typography>

          <div className="flex flex-col gap-6">
            {commitments.map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <div className="">
                    <img src={Icon} alt={title} className="w-8 h-8 min-[3800px]:w-12 min-[3800px]:h-12 object-contain" />
                  </div>
                  <Typography variant="h3" color="primary" className="font-medium">
                    {title}
                  </Typography>
                </div>
                <Typography variant="p" color="muted" className="leading-relaxed">
                  {body}
                </Typography>
              </div>
            ))}
          </div>

          <div className="pt-2" data-aos="fade-up" data-aos-delay="100">
            <Button text="Learn More" href="#about" />
          </div>
        </div>

        {/* Image Grid */}
        <div
          className="w-full grid grid-cols-2 gap-4 order-2 lg:col-span-6"
          data-aos="fade-left"
        >
          {images.map(({ src, alt }) => (
            <div key={src} className="overflow-hidden shadow-sm">
              <img src={src} alt={alt} className="w-full h-full object-cover aspect-square" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
