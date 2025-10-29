import type { Metadata } from "next";

// CSS Import
import "@repo/ui/globals.css";
import "./globals.css";

// Development & Analytics
// import { GoogleAnalytics } from "@repo/utilities";
import { Environment } from "@repo/utilities";
import { EnvironmentBanner, NavigationBar, StickyTop } from "@repo/ui";

// Metadata
export const metadata: Metadata = {
  title: "Mail Harbor - Private and self-hosted email",
  description:
    "Mail Harbor enables everyday people and privacy enthusiasts alike to host their own email server on their home network with secure storage. We provide a secure method of email communication that puts the privacy and control in the users hands with a seemless experience between desktop & apps. We empower people with easy setup, peace-of-mind, and most importantly- a prive place for you to send, receive, and store your email communication.",
};

// Navigation Links
import { navigationBarLinks, socialLinks } from "../links";
import { MobileProvider } from "@repo/context";

// Individual Components
import Footer from "./footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* TODO add analytics */}
        {/* <Environment environment="development">
          <GoogleAnalytics />
        </Environment> */}
      </head>
      <body>
        <div className="flex items-center flex-col">
          <StickyTop>
            <Environment environment="development">
              <EnvironmentBanner />
            </Environment>
            <MobileProvider>
              <NavigationBar
                links={navigationBarLinks}
                logoText="Mail Harbor"
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
