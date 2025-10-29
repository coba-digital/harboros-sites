// Components
import { socialLinks } from "@/links";
import {
  ExternalAnchor,
  IconHeaderList,
  InlineColumn,
  SectionWrapper,
} from "@repo/ui";
import Link from "next/link";
import { BsChatFill } from "react-icons/bs";

// Icons
import { FaRegCheckCircle } from "react-icons/fa";
import { FiTool } from "react-icons/fi";
import { RiShakeHandsLine } from "react-icons/ri";

// import CCM from "@/assets/logos/CCM.webp";
const githubLink = socialLinks.find((s) => s.name === "github");

const Footer = () => {
  return (
    <SectionWrapper
      backgroundColor="bg-gray-100"
      classes="border-t-3 border-t-gray-200"
    >
      <footer className="py-30 px-5 w-full grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-10">
        <InlineColumn animate={false} alwaysLeftAligned>
          <div className="flex flex-col gap-5">
            <Link
              className="font-bold text-3xl text-gray-700 self-start"
              href="/"
            >
              Mail Harbor
            </Link>
            <p className="max-w-150 text-gray-500">
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
        <div className="border-3 border-transparent lg:border-l-gray-200 border-t-gray-200 pt-20 lg:pt-0 lg:border-t-transparent text-nowrap flex flex-col sm:flex-row gap-20 sm:gap-5">
          <InlineColumn animate={false}>
            <IconHeaderList icon={FiTool} title="Our Toolkit">
              <div className="mb-5">
                <h6>Front-End</h6>
                <ExternalAnchor link="https://nextjs.org/" text="Next JS" />
                <ExternalAnchor link="https://react.dev" text="React JS" />
                <ExternalAnchor
                  link="https://turborepo.com/"
                  text="Turborepo"
                />
                <ExternalAnchor
                  link="https://www.typescriptlang.org"
                  text="Typescript"
                />
              </div>
              <div className="mb-5">
                <h6>Back-End</h6>
                <ExternalAnchor
                  link="https://www.mongodb.com/"
                  text="MongoDB"
                />
                <ExternalAnchor link="https://ngrok.com" text="ngrok" />
                <ExternalAnchor link="https://nodejs.org/en" text="Node JS" />
                <ExternalAnchor link="https://postman.com" text="Postman" />
              </div>
            </IconHeaderList>
          </InlineColumn>

          <InlineColumn animate={false}>
            <IconHeaderList icon={RiShakeHandsLine} title="Get Involved">
              <div className="mb-5">
                <h6>Connect with Us</h6>
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
                    <BsChatFill className="hover:text-(--primary)" />
                    Contact Us
                  </div>
                </Link>
              </div>
            </IconHeaderList>

            <IconHeaderList icon={FaRegCheckCircle} title="Other Projects">
              <div className="mb-5">
                <h6>Harbor OS</h6>
                <p>Contacts</p>
                <p>Calendar</p>
                <p>Media</p>
              </div>
            </IconHeaderList>
          </InlineColumn>
        </div>
      </footer>
    </SectionWrapper>
  );
};

export default Footer;
