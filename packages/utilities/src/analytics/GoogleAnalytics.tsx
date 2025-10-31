import Script from "next/script";
import ConsoleLogString from "../logging/ConsoleLogging";

interface Props {
  gid: string;
}

const GoogleAnalytics = ({ gid }: Props) => {
  if (!gid) {
    ConsoleLogString("No GID Provided: Google Analytics did not load");
    return;
  }

  ConsoleLogString(`Google Analytics Loaded: GID ${gid}`);
  return (
    <>
      {/* Google Analytics Script */}
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${gid}}`}
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${gid}');
            `,
        }}
        strategy="afterInteractive"
      />
    </>
  );
};

export default GoogleAnalytics;
