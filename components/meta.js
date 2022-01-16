import Head from "next/head";
import { useRouter } from "next/router";

const CANONICAL_DOMAIN = "https://swiftninja.io";

export default function Meta() {
  const router = useRouter();
  const _pathSliceLength = Math.min.apply(Math, [
    router.asPath.indexOf("?") > 0
      ? router.asPath.indexOf("?")
      : router.asPath.length,
    router.asPath.indexOf("#") > 0
      ? router.asPath.indexOf("#")
      : router.asPath.length,
  ]);
  const canonicalURL =
    CANONICAL_DOMAIN + router.asPath.substring(0, _pathSliceLength);

  return (
    <Head>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1"
      />
      <meta
        name="description"
        content="Swift Ninja - Yet another Online Swift Playground, which allows you to directly create, share, run Swift Programs on your Web Browser."
      />
      <meta name="author" content="nghia@proxyman.io" />
      {/* <link
        rel="apple-touch-icon"
        sizes="57x57"
        href="/favicon/apple-icon-57x57.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href="/favicon/apple-icon-60x60.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="/favicon/apple-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="/favicon/apple-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/favicon/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/favicon/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/favicon/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/favicon/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/favicon/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      /> */}
      <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#333333"></link>
      <link rel="canonical" href={canonicalURL} />
      {/* <link rel="manifest" href="/manifest.json" /> */}
      <meta name="msapplication-TileColor" content="#ffffff" />
      {/* <meta
        name="msapplication-TileImage"
        content="/favicon/ms-icon-144x144.png"
      /> */}
      <meta name="robots" content="index,follow"></meta>
      <meta name="googlebot" content="index,follow"></meta>
      <meta property="og:site_name" content="Swift Ninja"></meta>
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US"></meta>
      <meta property="og:url" content="https://swiftninja.io/" />
      <meta
        property="og:title"
        content="Swift Ninja - Online Swift Playground"
      />
      <meta
        property="og:description"
        content="Swift Ninja - Yet another Online Swift Playground, which allows you to directly create, share, run Swift Programs on your Web Browser."
      />
      {/* <meta
        property="og:image"
        content="https://proxyman.io/assets/images/proxyman-promo-v1.png"
      />
      <meta name="twitter:creator" content="@proxyman_app"></meta>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@proxyman_app" />
      <meta */}
        name="twitter:title"
        content="Swift Ninja - Online Swift Playground"
      />
      <meta
        name="twitter:description"
        content="Swift Ninja - Yet another Online Swift Playground, which allows you to directly create, share, run Swift Programs on your Web Browser."
      />
      {/* <meta
        name="twitter:image"
        content="https://proxyman.io/assets/images/proxyman-promo-v1.png"
      />
      <link
        rel="alternate"
        type="application/rss+xml"
        title="Proxyman's Blog RSS Feed"
        href="/rss.xml"
      ></link> */}
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8"></meta>
      <meta httpEquiv="Content-Language" content="en"></meta>
      <meta name="apple-mobile-web-app-title" content="Swift Ninja"></meta>
      <meta name="application-name" content="Swift Ninja"></meta>
      <meta name="theme-color" content="#000000"></meta>
    </Head>
  );
}
