"use client";

import React, { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  return (
    <section className="w-full bg-[var(--accent-light)] py-12 sm:py-14 xl:py-[3.1vw]">
      <div className="custom-container grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 xl:gap-[4vw] items-center">
        <div data-aos="fade-right">
          <h2 className="section-title font-head font-semibold text-[var(--heading)] mb-5 xl:mb-[1.8vw]">
            Stay Updated with the Latest in Orthopaedic Innovation
          </h2>
          <p className="section-text font-body text-[var(--body)] max-w-[1000px] min-[1921px]:max-w-[85%]">
            Subscribe To Our Newsletter To Receive The Latest Product Updates, New Instrument Launches, Company News
            And Insights Into Advanced Orthopaedic Solutions. Stay Connected With WINFO Med And Keep Up With Our
            Developments.
          </p>
        </div>

        <form
          data-aos="fade-left"
          data-aos-delay="100"
          className="flex items-center gap-3 bg-white rounded-[6px] p-[clamp(6px,0.4vw,16px)] pl-[clamp(16px,1.7vw,64px)] w-full max-w-[560px] lg:w-[clamp(380px,22.9vw,900px)] lg:max-w-none"
          onSubmit={(e) => {
            e.preventDefault();
            setEmail("");
          }}
        >
          <label htmlFor="winfo-newsletter" className="sr-only">
            Email address
          </label>
          <input
            id="winfo-newsletter"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your E-Mail id"
            className="section-text font-body flex-1 min-w-0 bg-transparent text-[var(--body)] placeholder:text-[#9A9A9A] focus:outline-none"
          />
          <button
            type="submit"
            className="btn-text flex-shrink-0 w-[45%] rounded-full bg-[var(--primary)] text-white font-body font-semibold py-[0.4em] px-[1.2em] hover:bg-[var(--primary-hover)] transition-colors cursor-pointer"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
