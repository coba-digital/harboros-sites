import { Metadata } from "next";
import React from "react";

import {
  AnimateOnScroll,
  ContactForm,
  SectionWrapper,
  TextUnderline,
} from "@repo/ui";

export const metadata: Metadata = {
  title: "Contact us - Mail Harbor",
};

const page = () => {
  return (
    <SectionWrapper classes="py-30 md:py-20 md:py-30">
      <div className="flex flex-col xl:flex-row items-center justify-center gap-10 md:gap-25">
        <AnimateOnScroll className="max-w-200 flex flex-col gap-5 px-5">
          <div>
            <h1>We&apos;re All About</h1>
            <h6>
              <span className="px-3 py-2 bg-black text-white rounded-md">
                personal sovereignty
              </span>{" "}
              through better software.
            </h6>
          </div>
          <p>
            If you&apos;re passionate about{" "}
            <TextUnderline>owning your data</TextUnderline>, or{" "}
            <TextUnderline>building systems</TextUnderline> that{" "}
            <TextUnderline>enhance privacy</TextUnderline> and{" "}
            <TextUnderline>give control back to the people</TextUnderline>,
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
