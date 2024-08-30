import Script from "next/script";

const GoogleTagManager = ({ gtmId }: { gtmId: string }) => (
  <>
    <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-11454847573"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-11454847573');
</script>
  </>
);

export default GoogleTagManager;
