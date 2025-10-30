import { ReactNode } from "react";

// Components
import { socialLinks } from "@/links";
import {
  ExternalAnchor,
  InlineColumn,
  HarborMail,
  SectionWrapper,
} from "@repo/ui";
import Link from "next/link";
import { BsChatFill } from "react-icons/bs";

// import CCM from "@/assets/logos/CCM.webp";
const githubLink = socialLinks.find((s) => s.name === "github");

const Card = ({
  header,
  children,
}: {
  header: string;
  children: ReactNode;
}) => {
  return (
    <div className="flex flex-col min-w-100 sm:min-w-60">
      <h6 className="bg-black py-2 px-3 text-white rounded-md font-bold">
        {header}
      </h6>
      <div className="flex flex-col gap-10 h-full md:w-full p-5">
        {children}
      </div>
    </div>
  );
};

const CardSection = ({
  children,
  header,
}: {
  children: ReactNode;
  header: string;
}) => {
  return (
    <div className="flex flex-col items-start">
      <h6 className="mb-2">{header}</h6>
      {children}
    </div>
  );
};

const Footer = () => {
  return (
    <SectionWrapper
      backgroundColor="bg-gray-100"
      classes="border-t-3 border-t-gray-200"
    >
      <footer className="py-30 px-5 w-full grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-10">
        <InlineColumn animate={false} alwaysLeftAligned>
          <div className="flex flex-col gap-5">
            <Link className="font-bold text-3xl text-black self-start" href="/">
              <HarborMail />
            </Link>
            <p className="max-w-150">
              Host your own email server on your own network with secure
              storage. Stop big tech from analyzing your data. Keep privacy and
              control in your own hands with a seemless experience.
            </p>
          </div>
          <div className="w-full flex justify-start gap-8 flex-wrap">
            <p className="text-xs text-gray-400">
              &copy; 2025 Coba Digital LLC
            </p>
            <ExternalAnchor
              link="https://coba-digital.com/"
              text="Coba Digital"
              textColor="lightGray"
              textSize="small"
            />
            <ExternalAnchor
              link="https://coreycollinsm.com/"
              text="Corey Collins, M"
              textColor="lightGray"
              textSize="small"
            />
          </div>
        </InlineColumn>

        {/* Links Section */}
        <div className="flex flex-col sm:flex-row justify-evenly gap-10 sm:gap-5 text-nowrap">
          <Card header="Our Toolkit">
            <CardSection header="Front-End">
              <ExternalAnchor link="https://nextjs.org/" text="Next JS" />
              <ExternalAnchor link="https://react.dev" text="React JS" />
              <ExternalAnchor link="https://turborepo.com/" text="Turborepo" />
              <ExternalAnchor
                link="https://www.typescriptlang.org"
                text="Typescript"
              />
            </CardSection>
            <CardSection header="Back-End">
              <ExternalAnchor link="https://www.mongodb.com/" text="MongoDB" />
              <ExternalAnchor link="https://ngrok.com" text="ngrok" />
              <ExternalAnchor link="https://nodejs.org/en" text="Node JS" />
              <ExternalAnchor link="https://postman.com" text="Postman" />
            </CardSection>
          </Card>

          <div className="flex flex-col gap-10">
            <Card header="Get Involved">
              <CardSection header="Connect with Us">
                {githubLink?.link && (
                  <Link
                    className="hover:text-(--primary)"
                    href={githubLink.link}
                    target="_blank"
                  >
                    <div className="flex items-center gap-2">
                      {githubLink.icon}
                      GitHub Repo
                    </div>
                  </Link>
                )}
                <Link className="hover:text-(--primary)" href="/contact">
                  <div className="flex items-center gap-2">
                    <BsChatFill />
                    Contact Us
                  </div>
                </Link>
              </CardSection>
            </Card>

            <Card header="Other Projects">
              <CardSection header="Harbor OS">
                <p>Contacts</p>
                <p>Calendar</p>
                <p>Media</p>
              </CardSection>
            </Card>
          </div>
        </div>
      </footer>
    </SectionWrapper>
  );
};

export default Footer;
