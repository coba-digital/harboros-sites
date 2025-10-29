import React from "react";
import { AnimateOnScroll, Button } from "@repo/ui";

const notfound = () => {
  // TODO convert this to a UI component
  return (
    <AnimateOnScroll className="py-50 px-5 flex flex-col items-start gap-5">
      <AnimateOnScroll className="flex sm:flex-row flex-col sm:items-center sm:gap-5 text-gray-400">
        <h2>404</h2>
        <h1>Page Not Found</h1>
      </AnimateOnScroll>
      <AnimateOnScroll delay={300}>
        <p className="max-w-150">
          We work hard to clean up and redirect outdated links. Sometimes a few
          can slip through the cracks. You can check back later if you&apos;d
          like.
        </p>
      </AnimateOnScroll>
      <AnimateOnScroll delay={600}>
        <Button
          button={{
            link: "/",
            size: "large",
            style: "primary",
            text: "Return Home",
          }}
        />
      </AnimateOnScroll>
    </AnimateOnScroll>
  );
};

export default notfound;
