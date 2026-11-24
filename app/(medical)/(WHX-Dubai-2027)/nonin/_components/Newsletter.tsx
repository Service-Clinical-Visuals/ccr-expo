/**
 * Newsletter Section (Get the Latest Healthcare Insights in Your Inbox)
 * Master Reference: Inogen Development Standards
 * Visuals: Dark container (#0F1C2C) with heading, copy, and inline subscription input + "Subscribe" button.
 */
"use client";

import React, { useState } from "react";
import Typography from "./Typography";
import Button from "./Button";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert("Thank you for subscribing to Nonin updates!");
      setEmail("");
    }
  };

  return (
    <section className="w-full py-12 sm:py-16 bg-[#0F1C2C] text-white overflow-hidden">
      <div className="custom-container">
        {/* Stacks on tablet up to 1035px, switches to side-by-side row on desktop (>=1036px) */}
        <div className="w-full flex flex-col min-[1036px]:flex-row min-[1036px]:items-center justify-between gap-8 sm:gap-10">

          {/* Left: Headline & Description constrained with xl:max-w-[70%] */}
          <div className="space-y-3 w-full max-w-full xl:max-w-[70%]" data-aos="fade-right">
            <Typography
              variant="h2"
              color="white"
              className="text-xl sm:text-2xl min-[1036px]:text-[28px] min-[2500px]:text-4xl min-[3800px]:text-6xl font-semibold !font-heading text-white"
            >
              Get the Latest Healthcare Insights in Your Inbox
            </Typography>

            <Typography
              variant="p"
              color="white"
              className="text-xs sm:text-sm min-[2500px]:text-lg min-[3800px]:text-2xl text-white/90 leading-relaxed font-body w-full max-w-full xl:max-w-[100%]"
            >
              Subscribe to the Nonin newsletter and stay informed with the latest product launches, company announcements, healthcare trends, expert insights and technological advancements. Discover how Nonin continues to innovate in noninvasive patient monitoring and shape the future of healthcare worldwide.
            </Typography>
          </div>

          {/* Right: Subscription Input Bar - aligned to right end on tablets up to 1035px */}
          <form
            onSubmit={handleSubmit}
            className="w-full sm:w-auto sm:self-end min-[1036px]:self-center shrink-0 flex items-center bg-white rounded-[10px] p-1.5 sm:p-2 shadow-lg"
            data-aos="fade-left"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your E-Mail id"
              required
              className="bg-transparent px-4 py-2 text-sm sm:text-base font-body text-gray-800 placeholder-gray-400 focus:outline-none flex-1 sm:w-[260px] md:w-[300px] min-[2500px]:w-[340px]"
            />
            <Button
              text="Subscribe"
              showIcon={true}
              className="px-5 py-2 text-xs sm:text-sm shrink-0"
            />
          </form>

        </div>
      </div>
    </section>
  );
};

export default Newsletter;

