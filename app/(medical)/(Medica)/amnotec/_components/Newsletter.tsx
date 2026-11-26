"use client";

import React, { useState } from "react";
import Typography from "./Typography";

/**
 * AMNOTEC Newsletter Section
 * Master Reference: Inogen Methodology
 *
 * Requirements:
 * - Background: #D7EDF8 (soft medical sky blue)
 * - Heading: "Get the Latest Healthcare Insights in Your Inbox"
 * - Subtitle description
 * - Input form: "Enter Your E-Mail id" + "Subscribe" button (#134093)
 */
const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section id="newsletter" className="w-full py-12 sm:py-16 bg-[#D7EDF8] overflow-hidden">
      <div className="custom-container">
        <div className="flex flex-col min-[1036px]:flex-row items-center justify-between gap-8 min-[1036px]:gap-12 w-full">
          
          {/* Left: Headline & Description */}
          <div className="w-full min-[1036px]:max-w-[65%] space-y-2.5" data-aos="fade-right">
            <h2 className="font-jakarta text-2xl sm:text-3xl lg:text-[2rem] font-bold text-[#000000] leading-tight">
              Get the Latest Healthcare Insights in Your Inbox
            </h2>
            <Typography
              variant="p"
              color="secondary"
              className="text-sm sm:text-base leading-relaxed text-[#111111] font-medium"
            >
              Subscribe to the AMNOTEC newsletter and stay informed with the latest product launches, company announcements, healthcare trends, expert insights and technological advancements. Discover how AMNOTEC continues to innovate in surgical medical technology and shape the future of healthcare worldwide.
            </Typography>
          </div>

          {/* Right: Email Subscription Form Card */}
          <div className="w-full min-[1036px]:w-auto shrink-0" data-aos="fade-left">
            {subscribed ? (
              <div className="bg-white rounded-[10px] px-6 py-3.5 shadow-md border border-green-200 text-green-700 font-semibold text-sm">
                Thank you for subscribing to AMNOTEC insights!
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-[10px] p-1.5 shadow-[0px_1px_2px_rgba(60,64,67,0.3),0px_2px_6px_2px_rgba(60,64,67,0.15)] flex items-center justify-between gap-2 w-full sm:w-[440px] border border-gray-100"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your E-Mail id"
                  className="w-full px-4 py-2 text-sm sm:text-base min-[2500px]:text-xl min-[3800px]:text-2xl text-[#111111] placeholder:text-[#333333]/40 bg-transparent outline-none font-dmsans"
                />
                <button
                  type="submit"
                  className="bg-[#134093] hover:bg-[#0e2f6d] text-white font-semibold text-sm sm:text-base min-[2500px]:text-xl min-[3800px]:text-2xl px-6 py-2.5 rounded-[5px] transition-all duration-300 shadow-sm shrink-0 uppercase tracking-wide font-jakarta cursor-pointer"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Newsletter;
