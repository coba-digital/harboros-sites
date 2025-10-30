import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found - Mail Harbor",
};

import { HeroSection, TextUnderline } from "@repo/ui";
import Link from "next/link";

const notfound = () => {
  // TODO convert this to a UI component
  return (
    <HeroSection
      className="py-50 px-5 flex flex-col items-start gap-5"
      header1={
        <h1>
          Negative Ghost Rider <span className="text-(--accent)">&#187;</span>
        </h1>
      }
    >
      <div className="flex flex-col items-start">
        <p className="max-w-150">
          The pattern is full. Or... In this case.. maybe it never existed?.
          We&apos;re not sure... but{" "}
          <TextUnderline>
            we do work hard to clean up and redirect old links
          </TextUnderline>
          . Sometimes a few just slip through the cracks. Or... you just made a
          mistake?.. That&apos;s more likely, actually.
        </p>
        <Link
          className="mt-5 relative"
          href="/"
          style={{
            transition:
              "color 250ms ease-in-out, background 250ms ease-in-out, border-radius 100ms ease-in-out",
          }}
        >
          <div className="border-3 border-(--primary) text-(--primary) rounded-md cursor-pointer font-semibold  text-nowrap py-2 px-3 hover:bg-(--primary) hover:text-white">
            Can we interest you in a Home page?
          </div>
          <div
            className="absolute top-0 left-0 right-0 bottom-0 bg-(--primary) text-white flex items-center justify-center opacity-0 hover:opacity-100 rounded-md font-semibold"
            style={{
              transition: "opacity 250ms ease-in-out",
            }}
          >
            I admit that I made the mistake.
          </div>
        </Link>
      </div>
    </HeroSection>
  );
};

export default notfound;
