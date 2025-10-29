import { Metadata } from "next";
import React from "react";

import { AnimateOnScroll, ContactForm, SectionWrapper } from "@repo/ui";

export const metadata: Metadata = {
  title: "Contact us - Mail Harbor",
};

const page = () => {
  return (
    <SectionWrapper classes="py-30 md:py-20 md:py-30">
      <div className="flex flex-col xl:flex-row items-center justify-center gap-10 md:gap-25">
        <AnimateOnScroll className="max-w-200 flex flex-col gap-5 px-5">
          <div>
            <h1 className="text-(--primary)">
              Let&apos;s <span className="hidden md:inline">Have A Chat!</span>
              <span className="inline md:hidden">Connect!</span>
            </h1>
            <h6 className="text-gray-500 font-semibold">
              Empowering{" "}
              <span className="text-gray-700">personal sovereignty</span>{" "}
              through better software.
            </h6>
          </div>
          <p>
            If you&apos;re passionate about owning your data, or building
            systems that enhance privacy and give control back to the people,
            we&apos;d love to chat with you on how we can partner together.
          </p>
        </AnimateOnScroll>
        <div className="w-full flex justify-center xl:justify-start">
          <ContactForm />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default page;
