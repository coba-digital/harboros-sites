import React from "react";
import { Metadata } from "next";

// Components
import { HeroSection } from "@repo/ui";

import { socialLinks } from "@/links";
import { FaCheckCircle } from "react-icons/fa";
import BackgroundImage from "@assets/contact-banner.webp";

export const metadata: Metadata = {
  title: "Message Sent - Harbor Mail",
};

const page = () => {
  return (
    <HeroSection
      backgroundAlignment={{ alignX: "right", alignY: "center" }}
      backgroundImage={BackgroundImage}
      darkGradient
      glass
      header1={
        <h1 className="bg-black border-b-8 border-b-(--accent) text-white p-5 rounded-t-md self-start w-full flex items-center flex-col md:flex-row md:gap-3 text-center md:text-left">
          <FaCheckCircle className="text-4xl" /> Message Sent
        </h1>
      }
      ctaButton={{
        color: "white",
        link: "/",
        size: "large",
        style: "secondary",
        text: "Return Home",
      }}
      socials={{ color: "white", socials: socialLinks }}
    >
      <p className="max-w-150 my-5">
        We monitor our email inbox diligently and will get back to you as soon
        as we are able. If you don&apos;t hear from us in a timely manner,
        please feel free to reach out to us via social channels as well.
      </p>
    </HeroSection>
  );
};

export default page;
