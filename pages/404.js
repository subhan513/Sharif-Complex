import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import MainHeader from "../components/mainheader";

export default function Disclamier() {
  return (
    <>
    <Head>
        <meta charSet="utf-8" />
        <meta
          content="width=device-width, initial-scale=1.0, maximum-scale=5, shrink-to-fit=no"
          name="viewport"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="generator" content="Getsol Inc." />
        <title>Server Error - Page Not Found</title>
        <meta name="title" content="Server Error - Page Not Found" />
        <meta name="description" content="Looks like you've stumbled upon a page that doesn't exist. Don't worry, we've all been there. Want to head back home?" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="revisit-after" content="1 days" />
        <meta name="author" content="Najam Awan" />
        <meta itemProp="name" content="Looks like you've stumbled upon a page that doesn't exist. Don't worry, we've all been there. Want to head back home?" />
        <meta itemProp="image" content="https://spica.edu.pk/_next/image?url=%2Fimages%2Fspica-logo2.png&w=256&q=75" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Server Error - Page Not Found" />
        <meta name="twitter:description" content="" />
        <meta name="twitter:image:src" content="https://spica.edu.pk/_next/image?url=%2Fimages%2Fspica-logo2.png&w=256&q=75" />
        <meta property="og:title" content="Server Error - Page Not Found" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://spica.edu.pk/_next/image?url=%2Fimages%2Fspica-logo2.png&w=256&q=75" />
        <meta property="og:description" content="Looks like you've stumbled upon a page that doesn't exist. Don't worry, we've all been there. Want to head back home?" />
        <meta property="og:locale" content="en" />
        <meta itemProp="image" content="https://spica.edu.pk/_next/image?url=%2Fimages%2Fspica-logo2.png&w=256&q=75" />
        <link rel="canonical" href="https://spica.edu.pk/404" />
        <link rel="preconnect" href="//www.google-analytics.com" as="script" />
        <meta name="google" content="notranslate" />
      </Head>
      <MainHeader pageHeading="404" pageImg="hdr-1.jpg" />

      <section className="main-sec">
        <div className="content-bx">
          <div className="flex justify-center items-center">
            <Link
              href="/"
              className="text-xl font-bold uppercase text-gray-500"
            >
              BACK to HOME
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
