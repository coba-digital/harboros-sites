import type { Metadata } from "next";

// CSS Import
import "@repo/ui/globals.css"; // shared UI styles
import "./colors.css"; // local colors

// Development & Analytics
// import { GoogleAnalytics } from "@repo/utilities";
import {
  EnvironmentControl,
  GoogleAnalytics,
  socialLinks,
} from "@repo/utilities";
import {
  EnvironmentBanner,
  HarborMail,
  NavigationBar,
  StickyTop,
} from "@repo/ui";

// Metadata
export const metadata: Metadata = {
  title: "Harbor Mail - Private and self-hosted email",
  description:
    "Harbor Mail enables everyday people and privacy enthusiasts alike to host their own email server on their home network with secure storage. We provide a secure method of email communication that puts the privacy and control in the users hands with a seemless experience between desktop & apps. We empower people with easy setup, peace-of-mind, and most importantly- a prive place for you to send, receive, and store your email communication.",
};

// Navigation Links
import { navigationBarLinks } from "../links";
import { MobileProvider } from "@repo/context";

// Individual Components
import Footer from "./footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gid = process.env.NEXT_PUBLIC_GA_ID || "";

  return (
    <html lang="en">
      <head>
        <EnvironmentControl environment="development">
          <GoogleAnalytics gid={gid} />
        </EnvironmentControl>
      </head>
      <body>
        <div className="flex items-center flex-col">
          <StickyTop>
            <EnvironmentControl environment="development">
              <EnvironmentBanner />
            </EnvironmentControl>
            <MobileProvider>
              <NavigationBar
                links={navigationBarLinks}
                logoText={
                  <p>
                    <HarborMail />
                  </p>
                }
                socials={socialLinks}
              />
            </MobileProvider>
          </StickyTop>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
