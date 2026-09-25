"use client";

import React from "react";
import Image from "next/image";
import Typography from "./Typography";
import Button from "./Button";

export default function Updates() {
  const posts = [
    {
      id: 1,
      image: "/medical/biomedicinos/d1.png",
      date: "11.11.2025",
      title: "MEDICA 2025, GERMANY, DUSSELDORF, HALL 9 / C50",
      content: "By good tradition, our company will take part in the MEDICA exhibition in Dusseldorf from November 17 to 20, 2025,",
      href: "#news",
    },
    {
      id: 2,
      image: "/medical/biomedicinos/d2.png",
      date: "03.10.2024",
      title: "MEDICA 2024, GERMANY, DUSSELDORF, HALL 9 / C50",
      content: "By good tradition, our company will take part in the MEDICA exhibition in Dusseldorf from November 11 to 14, 2024",
      href: "#news",
    },
    {
      id: 3,
      image: "/medical/biomedicinos/d3.png",
      date: "15.03.2024",
      title: "Arab Health 2024 Exhibition results",
      content: "Thank you to everyone who visited us at Arab Health 2024 in Dubai. We were glad to meet with our partners, discuss our plans for this year.",
      href: "#news",
    },
  ];

  return (
    <section id="news" className="py-16 md:py-24 bg-white w-full">
      <div className="custom-container flex flex-col items-center">
        <div className="text-center mb-12 min-[2500px]:mb-16">
          <Typography variant="h6" color="primary" className="mb-2" data-aos="fade-up">
            Latest Updates
          </Typography>
          <Typography variant="h2" color="dark" className="mb-4 max-w-4xl 2xl:max-w-[70%]  mx-auto" data-aos="fade-up" data-aos-delay="100">
            Stay Connected With BM Technica&apos;s Latest Exhibitions, Products, and Global Activities
          </Typography>
          <Typography variant="p" color="dark" className="text-gray-700 max-w-3xl 2xl:max-w-[80%] mx-auto" data-aos="fade-up" data-aos-delay="200">
            The News section highlights BM Technica&apos;s participation in major international medical exhibitions and provides updates on its products, partnerships, and business activities. Recent posts feature MEDICA 2025 in Düsseldorf, MEDICA 2024, and Arab Health 2024 in Dubai, where the company presented its colposcopy solutions and connected with healthcare partners and potential customers.
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {posts.map((post, index) => (
            <div key={post.id} className="flex flex-col border border-gray-300 rounded-[20px] p-[10px] shadow-sm hover:shadow-md transition-shadow bg-white" data-aos="fade-up" data-aos-delay={300 + index * 100}>
              <div className="w-full relative aspect-[496/400] rounded-[14px] overflow-hidden shrink-0">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col pt-4 px-1.5 pb-2 min-[2500px]:pt-6 bg-white flex-grow">
                <Typography variant="h6" color="dark" className="font-primary  text-[#121C22] font-semibold mb-1 min-[2500px]:text-base min-[2500px]:mb-2 min-[3800px]:text-xl">
                  {post.date}
                </Typography>
                <Typography variant="h5" color="dark" className="font-primary  text-[#121C22] font-semibold mb-2 line-clamp-2 leading-snug min-[2500px]:text-xl min-[3800px]:text-3xl">
                  {post.title}
                </Typography>
                <Typography variant="p" color="dark" className="text-gray-600 mb-5 flex-grow line-clamp-3 leading-relaxed">
                  {post.content}
                </Typography>
                <div className="mt-auto self-start">
                  <Button text="Read More" variant="outline" href={post.href} showIcon={false} className="!px-4 !py-1.5 ! !rounded-[8px] min-[2500px]:!px-6 min-[2500px]:!py-2 min-[2500px]:!text-base min-[2500px]:!rounded-xl min-[3800px]:!text-2xl min-[3800px]:!px-8 min-[3800px]:!py-3" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
