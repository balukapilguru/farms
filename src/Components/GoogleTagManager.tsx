import Script from 'next/script';

const GoogleTagManager = ({ gtmId }: { gtmId: string }) => (
  <>
    {/* GTM Script */}
    <Script
      id="gtm-script"
      strategy="afterInteractive"
      src={`https://www.googletagmanager.com/gtag/js?id=${gtmId}`}
    />
    <Script
      id="gtm-config"
      strategy="afterInteractive"
    >
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${gtmId}');
      `}
    </Script>
  </>
);

export default GoogleTagManager;
