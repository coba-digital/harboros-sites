import {
  Button,
  HeroSection,
  HarborMail,
  SingleParagraphSection,
} from "@repo/ui";
import { socialLinks } from "@/links";

import HeroImage from "@assets/hero-banner.webp";
import CTAImage from "@assets/cta-banner.webp";

const HomePage = () => {
  return (
    <main className="flex flex-col w-full">
      <HeroSection
        backgroundImage={HeroImage}
        className="bg-gray-50"
        ctaButton={{
          color: "white",
          link: "/contact",
          style: "tertiary",
          text: "I Want To Contribute",
        }}
        darkGradient
        glass
        header1={
          <h1 className="bg-black border-b-8 border-b-(--accent) text-white p-5 rounded-t-md self-start w-full">
            Your emails belong to you.
          </h1>
        }
        socials={{
          color: "white",
          socials: socialLinks,
        }}
      >
        <p>
          <strong>Harbor Mail</strong> is a privacy-first, self-hosted email app
          built for peace of mind—not ad networks. We don&apos;t just put
          control back in your hands, we build easy-to-use systems that keep
          your data physically separate from big tech.{" "}
          <strong>We handle the complexity, you control your inbox.</strong>
        </p>
      </HeroSection>
      <SingleParagraphSection extraPaddingY>
        <div className="flex flex-col gap-10">
          <h2>
            Why <HarborMail /> ?
          </h2>
          <div className="flex flex-col gap-5">
            <p>
              Today&apos;s email platforms are bloated, invasive, and
              disconnected from your control. Big tech has gone too far with
              &quot;innovations&quot; they claim will make your life easier.
              Harbor Mail brings email back to basics—lightweight, encrypted,
              and fully self-hosted. Whether you&apos;re a privacy enthusiast or
              just tired of the cloud owning your conversations, Harbor Mail
              lets you anchor your messages on your own terms. It&apos;s the
              first step in the Harbor OS ecosystem--
            </p>
            <p className="bg-black text-white font-semibold py-1 px-2 rounded-sm self-start">
              Designed to give you full ownership of your digital life.
            </p>
          </div>
        </div>
      </SingleParagraphSection>
      <HeroSection
        alignment="left"
        backgroundImage={CTAImage}
        darkGradient
        extraTopPadding
        header1={<h2>We are in early development</h2>}
        header2={<h5>You can help contribute to this project.</h5>}
      >
        <div className="flex flex-col gap-5 items-start">
          <p className="mt-5">
            Harbor Mail is in the early stages of open-development. We are
            currently performing market research and working on the beginning
            phases of contribution methodology. This project will be open-source
            with cloud-services available that are purely optional. Our goal is
            never to hide privacy controls behind a paywall, but to facilitate a
            community of contributors who all benefit from the project. If you
            have interest in contributing to this project, please reach out via
            our contact form.
          </p>
          <div className="mt-5">
            <Button
              button={{
                color: "white",
                link: "/contact",
                size: "large",
                style: "tertiary",
                text: "I Want To Contribute",
              }}
            />
          </div>
        </div>
      </HeroSection>
    </main>
  );
};

export default HomePage;
