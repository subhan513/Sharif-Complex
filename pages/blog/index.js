import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout';
import MainHeader from '../../components/mainheader';
import Head from 'next/head';
import content from '../blogposts.json';
import getRSSFeed from '../../lib/gRssFeed';

export default function Blog() {
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
        <title>
          Insightful Blog Posts | Source for Thought-Provoking Content
        </title>
        <meta
          name="title"
          content="Insightful Blog Posts | Source for Thought-Provoking Content"
        />
        <meta
          name="description"
          content="Explore our blog for a diverse range of articles that will inform, entertain, and inspire you. From news and trends to lifestyle and culture, we've got you covered."
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="1 days" />
        <meta name="author" content="Najam Awan" />
        <meta
          itemProp="name"
          content="Explore our blog for a diverse range of articles that will inform, entertain, and inspire you. From news and trends to lifestyle and culture, we've got you covered."
        />
        <meta
          itemProp="image"
          content="https://spica.edu.pk/_next/image?url=%2Fimages%2Fspica-logo2.png&w=256&q=75"
        />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Insightful Blog Posts | Source for Thought-Provoking Content"
        />
        <meta
          name="twitter:description"
          content="Explore our blog for a diverse range of articles that will inform, entertain, and inspire you. From news and trends to lifestyle and culture, we've got you covered."
        />
        <meta
          name="twitter:image:src"
          content="https://spica.edu.pk/_next/image?url=%2Fimages%2Fspica-logo2.png&w=256&q=75"
        />
        <meta
          property="og:title"
          content="Insightful Blog Posts | Source for Thought-Provoking Content"
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content="https://spica.edu.pk/_next/image?url=%2Fimages%2Fspica-logo2.png&w=256&q=75"
        />
        <meta
          property="og:description"
          content="Explore our blog for a diverse range of articles that will inform, entertain, and inspire you. From news and trends to lifestyle and culture, we've got you covered."
        />
        <meta property="og:locale" content="en" />
        <meta
          itemProp="image"
          content="https://spica.edu.pk/_next/image?url=%2Fimages%2Fspica-logo2.png&w=256&q=75"
        />
        <link rel="canonical" href="https://spica.edu.pk/blog" />
        <link rel="preconnect" href="//www.google-analytics.com" as="script" />
        <meta name="google" content="notranslate" />
      </Head>

      <MainHeader pageHeading="Spica Blog" pageImg="header-1.jpg" />

      <section className="main-sec  relative md:pb-24 pb-16">
        <div className="mt-4   mx-auto grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1 gap-5  container ">
          {content.posts.map((post, index) => {
            return (
              <div
                key={post.slug + '_' + index}
                className="flex flex-col rounded-lg shadow-lg overflow-hidden group hover:-translate-y-2 duration-300 transition">
                <div className="flex-shrink-0">
                  <Image
                    className="h-48 w-full object-cover"
                    width={400}
                    height={300}
                    src={post.featured_img}
                    alt={post.title}
                  />
                </div>
                <div className="flex-1 bg-white border-b p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-amber-500 capitalize">
                      {post.category}
                    </p>
                    <a href={'blog/' + post.slug} className="block mt-2">
                      <p className="text-base sm:text-xl font-semibold text-gray-900 group-hover:text-blue-600">
                        {post.title}
                      </p>
                    </a>
                    <p className="mt-3 text-sm sm:text-base text-gray-500">
                      {post.shortdescription}
                    </p>
                  </div>
                  <div className="mt-2 flex items-center">
                    <div className="ml-0">
                      <p className="text-sm font-medium text-gray-900">
                        {post.author}
                      </p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <time dateTime={post.datetime}>{post.date}</time>
                        <span aria-hidden="true">&middot;</span>
                        <span>{post.readingTime} read</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="absolute inset-x-0 bottom-0 h-96 -z-10 text-slate-600/10 [mask-image:linear-gradient(to_bottom,transparent,white)]">
          <svg
            className="absolute inset-0 h-full w-full"
            xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="pricing-pattern"
                width="32"
                height="32"
                patternUnits="userSpaceOnUse"
                x="50%"
                y="100%"
                patternTransform="translate(0 -1)">
                <path d="M0 32V.5H32" fill="none" stroke="currentColor"></path>
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill="url(#pricing-pattern)"></rect>
          </svg>
        </div>
      </section>
    </>
  );
}
export async function getStaticProps() {
  await getRSSFeed();
  return {
    props: {},
  };
}
