import Script from "next/script";

const GoogleTagManager = ({ gtmId }: { gtmId: string }) => (
  <>
    <Script
      src={`https://www.googletagmanager.com/gtag/js?id=${gtmId}`}
      strategy="afterInteractive"
    />
    <Script
      id="google-analytics"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gtmId}');
        `,
      }}
    />
  </>
);

export default GoogleTagManager;
