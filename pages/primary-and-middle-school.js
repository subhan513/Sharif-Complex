import Link from "next/link";
import Image from "next/image";
import Layout from "../components/layout";
import MainHeader from "../components/mainheader";
import Head from "next/head";
import { Disclosure,Transition } from '@headlessui/react';
import { PlusIcon,MinusIcon } from "@heroicons/react/outline";

 

// const faqs = [
//   {
//     question: "Pre Planning",
//     answer:
//       "Concept, Feasibility study, financing & funding, permits & licensing",
//   },
//   {
//     question: "Designing & Engineering",
//     answer:
//       "Specification, outline & detailed design, energy estimates.",
//   },
//   {
//     question: "Construction",
//     answer:
//       "Procurement, Contracting, Logistics, Site Preparation & environment mitigation, mounting structures & Assembly subsystems.",
//   },
//   {
//     question: "Operation",
//     answer:
//       "Running the power plant in order to deliver Projected energy performance in compliance with applicable rules and regulations. Certification & Commissioning Connection to power grid.",
//   },
//   {
//     question: "Maintenance & After Sales",
//     answer:
//       "Solar maintenance services, solar repair, solar checking, solar fix, solar report, Solar O&m. After-Sales Services help to establish customer loyalty and ensure customer retainment. They mark that customer's relations with your company hasn't ended yet.",
//   },
   
// ]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function About() {
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
        <title>PRIMARY & MIDDLE SCHOOL | Spica International School</title>
        <meta
          name="title"
          content="PRIMARY & MIDDLE SCHOOL | Spica International School"
        />
        <meta
          name="description"
          content="We provides a high-quality early childhood education in a safe and nurturing environment that fosters creativity, critical thinking, and global awareness."
        />
        <link rel="icon" type="image/x-icon" href="/favicon."></link>
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="1 days" />
        <meta name="author" content="Najam Awan" />
        <meta itemProp="name" content="" />
        <meta
          itemProp="image"
          content="https://spica.edu.pk/_next/image?url=%2Fimages%2Fspica-logo2.png&w=256&q=75"
        />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="PRIMARY & MIDDLE SCHOOL | Spica International School"
        />
        <meta
          name="twitter:description"
          content="We provides a high-quality early childhood education in a safe and nurturing environment that fosters creativity, critical thinking, and global awareness."
        />
        <meta
          name="twitter:image:src"
          content="https://spica.edu.pk/_next/image?url=%2Fimages%2Fspica-logo2.png&w=256&q=75"
        />
        <meta
          property="og:title"
          content="PRIMARY & MIDDLE SCHOOL | Spica International School"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://spica.edu.pk/_next/image?url=%2Fimages%2Fspica-logo2.png&w=256&q=75"
        />
        <meta
          property="og:description"
          content="We provides a high-quality early childhood education in a safe and nurturing environment that fosters creativity, critical thinking, and global awareness."
        />
        <meta property="og:locale" content="en" />
        <meta
          itemProp="image"
          content="https://spica.edu.pk/_next/image?url=%2Fimages%2Fspica-logo2.png&w=256&q=75"
        />
        <link rel="canonical" href="https://spica.edu.pk/primary-and-middle-school" />
        <link rel="preconnect" href="//www.google-analytics.com" as="script" />
        <meta name="google" content="notranslate" />
      </Head>

      <MainHeader
        pageHeading="PRIMARY & MIDDLE SCHOOL"
        pageImg="header-2-primary-and-middle-school.png"
      />

      <section className="main-sec">
        <div
          className="content-bx1 space-y-4 container mx-auto px-4 bg-gradient-to-b from-white to-transparent rounded-xl py-5  mb-4 border border-slate-200 border-b-0 rounded-b-none pb-10 "
          style={{ boxShadow: "0px -15px 15px rgba(1,41,112,0.08)" }}
        >
          <p>
          Our focus is to help our student’s transit smoothly from Junior School to the rigorously demanding Primary and Middle School. We aspire to provide maximum opportunities to the students to explore, make choices and work in collaboration with one another.
We aim to connect our children to meet the 21st century challenges by excelling in Communication, Collaboration, Creativity and Critical Thinking. The backbone of our academics is student centered classrooms where they take active part in projects that provide them with hands on experiences. Syllabus is clearly structured to enable students and teachers to know precisely what should be learnt.
          </p>
          <p>Students are evaluated through a comprehensive assessment system that comprises of both formative and summative assessments. To ensure maximum support, students are advised, motivated and prepared as a part of an extensive re-enforcement coaching programme.
Extracurricular activities are an important feature of the School since Spica International School longs to offer opportunities and activities besides the usual curriculum. This helps our students get equipped with skills to deal with future challenges where they are expected to be independent in their approach to learning and interpersonal skills.</p>
        </div>
      </section>

      

     
   


      <div className="absolute inset-x-0 bottom-0 h-96 -z-10 text-slate-600/10 [mask-image:linear-gradient(to_bottom,transparent,white)]"><svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="pricing-pattern" width="32" height="32" patternUnits="userSpaceOnUse" x="50%" y="100%" patternTransform="translate(0 -1)"><path d="M0 32V.5H32" fill="none" stroke="currentColor"></path></pattern></defs><rect width="100%" height="100%" fill="url(#pricing-pattern)"></rect></svg></div>  
      
     
      <section className="px-5">
      <div className="relative container mx-auto max-w-7xl py-10">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center">
          <span className=" px-2 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5 text-gray-500"
            >
              <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
            </svg>
          </span>
        </div>
      </div>
    </section>
    </>
  );
}
