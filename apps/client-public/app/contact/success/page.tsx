import React from "react";

// Components
import {
  AllSocialLinks,
  AnimateOnScroll,
  Button,
  SectionWrapper,
} from "@repo/ui";

// Icons
import { IoCheckmarkCircleOutline } from "react-icons/io5";

import { socialLinks } from "@/links";

const page = () => {
  return (
    <SectionWrapper classes="lg:py-50 py-5">
      <div className="flex justify-center">
        <div className="p-10 flex flex-col gap-5 glass rounded-xl">
          <AnimateOnScroll>
            <h1 className="flex items-center flex-col md:flex-row md:gap-3 text-center md:text-left text-gray-800">
              <IoCheckmarkCircleOutline /> Message Sent
            </h1>
            <p className="max-w-150 my-5">
              We monitor our email inbox diligently and will get back to you as
              soon as we are able. If you don&apos;t hear from us in a timely
              manner, please feel free to reach out to us via social channels as
              well.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll className="flex items-center gap-5" delay={300}>
            <Button
              button={{
                color: "black",
                link: "/",
                size: "large",
                style: "secondary",
                text: "Return Home",
              }}
            />
            <AllSocialLinks socials={socialLinks} />
          </AnimateOnScroll>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default page;
