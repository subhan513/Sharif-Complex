import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout';
import MainHeader from '../../components/mainheader';
import Head from 'next/head';
import content from '../blogposts.json';
import getRSSFeed from '../../lib/gRssFeed';
const jobs = [
  { title: 'Science Teacher Required', description: 'Science Teacher Required for class(4-7)' },
  { title: 'Social Studies Teacher Required', description: 'Social Studies Teacher Required for class(4-7)' }
];
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

      <MainHeader pageHeading="Career" pageImg="child.jpeg" />
      <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Career</h1>
      <p className="text-gray-700 mb-4">
        Teaching is one of the most impactful and respected career paths, vital to shaping the social and economic fabric of our society. 
        At SEC, we believe that education is more than academics; it is about fostering the holistic growth of young minds. 
        Our teachers play a pivotal role in this mission, inspiring students to achieve their best while nurturing their individual strengths 
        and preparing them for the challenges of the modern world.
      </p>
      <p className="text-gray-700 mb-4">
        We seek educators who are deeply committed to their profession and understand the unique ways teenagers learn and thrive. 
        A minimum of a Master’s degree in the relevant teaching discipline is required, with preference given to experienced teachers. 
        We value individuals who bring enthusiasm, creativity, and dedication to their roles, ensuring that students receive both academic 
        excellence and personal mentorship.
      </p>
      <p className="text-gray-700 mb-4">
        Applications for teaching and non-teaching positions must be routed through the Main Office and are managed by the Public Relations Officer (PRO). 
        The PRO oversees the review and shortlisting of applications, as well as responding to employment inquiries. 
        Direct applications to the Principal or other staff members are not entertained to ensure a structured and fair process.
      </p>
      <p className="text-gray-700 mb-4">
        Prospective candidates are encouraged to send their CVs and cover letters via email to 
        <a href="mailto:hr@sharif.edu.pk" className="text-blue-500 hover:underline"> hr@sharif.edu.pk</a> 
        or submit them to the Main Office. At SEC, we are committed to building a team of passionate educators who inspire and empower 
        the leaders of tomorrow.
      </p>
    </div>
    <div className="min-h-screen p-10">
      <h1 className="text-3xl font-bold text-gray-800">Current Openings</h1>
      <div className="grid grid-cols-2 gap-6 mt-5">
        {jobs.map((job, index) => (
          <div key={index} className="p-5 border rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold">{job.title}</h2>
            <p className="text-gray-600">{job.description}</p>
            <Link href={`/apply?job=${encodeURIComponent(job.title)}`}>
              <button className="mt-3 px-4 py-2 bg-purple-700 text-white rounded-lg hover:bg-purple-900">
                Apply Now
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  
    </>
  );
}
export async function getStaticProps() {
  await getRSSFeed();
  return {
    props: {},
  };
}
