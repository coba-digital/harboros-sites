// Components
import AllSocialLinks from "../components/inline/AllSocialLinks";
import Button from "../components/buttons/Button";
import SectionWrapper from "../sections/SectionWrapper";
import AnimateOnScroll from "../components/utilities/AnimateOnScroll";

// Types
import { HeroSectionType } from "@repo/types";

const HeroSection = ({
  alignment = "center",
  backgroundAlignment = { alignX: "center", alignY: "center" }, // Sets the background image alignment
  backgroundColor,
  backgroundImage, // Sets the background image
  children,
  className,
  ctaButton, // Displays a button after child content
  darkGradient = false, // Changes the background gradient to dark
  extraTopPadding = false, // Adds more top padding for better background image viewing
  glass = false,
  header1, // Imported as <h1>
  header2, // Imported as <h2>
  leftBorder = false, // Adds border-l-6 in --primary to the content block
  noGradient = false,
  socials, // Shows a list of all social links after child content
  whiteText = false,
}: HeroSectionType) => {
  // Destructure classes
  const border = leftBorder ? "border-l-6 border-[var(--primary)] pl-5" : "";
  const topPadding = extraTopPadding ? "pt-100" : "md:py-50";
  const textColor = `${whiteText ? "text-white" : ""}`;

  const glassStyles = `${glass ? "bg-[rgba(10,10,10,.4)] border border-[#777] backdrop-blur-lg rounded-md shadow-lg" : ""}`;

  return (
    <SectionWrapper
      alignBackgroundY={backgroundAlignment.alignY}
      alignBackgroundX={backgroundAlignment.alignX}
      backgroundColor={backgroundColor}
      backgroundImage={backgroundImage}
      classes={`${topPadding} ${textColor} px-5 py-25 ${className}`}
      darkGradient={darkGradient}
      noGradient={noGradient}
    >
      <div className={`flex justify-${alignment}`}>
        {/* Hero Content Block */}
        <AnimateOnScroll
          className={`flex flex-col gap-5 max-w-200 ${border} ${glassStyles}`}
        >
          {/* Headers */}
          <AnimateOnScroll className="flex flex-col gap-2">
            {header1}
            {header2}
          </AnimateOnScroll>
          <div className={`${glass ? "pl-5 pr-5 pb-10" : ""}`}>
            {/* Child Content */}
            <AnimateOnScroll animation="fade-up" distance={32}>
              {children}
            </AnimateOnScroll>

            {/* CTA & Social Block */}
            {(ctaButton || socials) && (
              <AnimateOnScroll
                className="flex flex-row mt-5 gap-5 items-center"
                delay={300}
              >
                {ctaButton && (
                  <Button
                    button={{
                      ...ctaButton,
                      text: ctaButton.text ?? "Button",
                    }}
                  />
                )}
                {socials?.socials && (
                  <AllSocialLinks
                    color={socials.color}
                    socials={socials.socials}
                  />
                )}
              </AnimateOnScroll>
            )}
          </div>
        </AnimateOnScroll>
      </div>
    </SectionWrapper>
  );
};

export default HeroSection;
