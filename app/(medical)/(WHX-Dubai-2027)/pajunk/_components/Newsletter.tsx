/**
 * Newsletter Section - PAJUNK
 *
 * ARCHITECTURAL REFERENCE: INOGEN MASTER STANDARD
 * 1. Background & Styling:
 *    - Soft mint background `#D9E2DE`.
 * 2. Layout:
 *    - Flex container (stacked on mobile, row on tablet/desktop) with title/desc on left and integrated subscribe input on right.
 */
"use client";

import React, { useState } from "react";
import Typography from "./Typography";
import Button from "./Button";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section id="newsletter" className="w-full py-12 sm:py-16 bg-[#D9E2DE] overflow-hidden">
      <div className="custom-container">
        <div
          className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12"
          data-aos="fade-up"
        >
          {/* Left: Heading & Description (Applying Inogen 70% content width strategy) */}
          <div className="w-full max-w-full xl:max-w-[70%] space-y-2 text-center lg:text-left">
            <Typography
              variant="h2"
              color="dark"
              className="text-2xl sm:text-3xl font-bold tracking-tight text-[#000000] w-full max-w-full xl:max-w-[70%]"
            >
              Stay Updated with PAJUNK
            </Typography>

            <Typography
              variant="p"
              color="muted"
              className="text-xs sm:text-sm md:text-base text-[#111111] leading-relaxed w-full max-w-full xl:max-w-[70%]"
            >
              Subscribe to our newsletter for the latest product innovations, medical technology updates, company news and upcoming events.
            </Typography>
          </div>

          {/* Right: Subscribe Input Form */}
          <div className="w-full lg:w-auto shrink-0 flex justify-center lg:justify-end">
            {subscribed ? (
              <div className="bg-[#144835] text-[#DCE64D] px-6 py-3.5 rounded-[10px] font-semibold text-sm shadow-sm">
                Thank you for subscribing!
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="w-full max-w-md 2k:max-w-xl 4k:max-w-2xl bg-white rounded-[10px] 2k:rounded-[16px] 4k:rounded-[22px] p-1.5 sm:p-2 2k:p-3 4k:p-4 flex items-center shadow-xs border border-gray-200"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your E-Mail id"
                  className="w-full px-3 sm:px-4 2k:px-6 4k:px-8 py-2 2k:py-4 4k:py-6 text-xs sm:text-sm 2k:text-lg 4k:text-2xl text-gray-800 bg-transparent outline-none placeholder:text-gray-400"
                />
                <Button
                  text="Subscribe"
                  variant="primary"
                  onClick={() => { }}
                  showIcon={true}
                  className="!py-2 !px-4 2k:!py-3.5 2k:!px-8 4k:!py-5 4k:!px-12 text-xs font-semibold shrink-0"
                />
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Newsletter;

