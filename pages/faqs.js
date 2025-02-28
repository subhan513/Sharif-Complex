import Link from "next/link";
import Image from "next/image";
import Layout from "../components/layout";
import MainHeader from "../components/mainheader";
import Head from "next/head";
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from "@heroicons/react/outline";

  
const faqs = [

  {
    question: "What makes Spica International?",
    answer: "Our school is a project owned by the Mr. Muhammad Shahid Ansari education company called Spica International School Gujranwala Campus. We offer an international curriculum and deliver it through authentic learning and assessment. ",
  },
  {
    question: "What grades are being offered as of now?",
    answer: "We are offering classes from Playgroup to Grade VII at the moment, preparing students to lead the world.",
  },
  {
    question: "What are the school’s long term plans?",
    answer: "It is our ambition to provide quality education to the student’s and open further schools across Pakistan.",
  },

  {
    question: "What is the school admission criterion?",
    answer: "Visit the school at your appointed time to understand the school culture, philosophy and teaching dynamics. An entrance test and interview to assess the child’s learning capacity and development needs. Submission of duly filled Spica International School admission form, along with the copies of required documents. Submission of school admission fee, security fee and an advance tuition fee.",
  },
  {
    question: "When does an academic session start? ",
    answer: "A new term for an academic year commences in February and ends in March.",
  },
  {
    question: "What is the fee structure?",
    answer: "Please visit the school office to enquire about the fee and admission for your child.",
  },
  {
    question: "How will I know what’s happening in my child’s classroom and in the school?",
    answer: "We value timely communication with parents and how this effective partnership benefits our students. Spica International School uses 21st Century communication tool called ClassDojo (interactive mobile & computer application) to keep parents updated. The software, Face book page, instagram and website gives parents access to learning activities, photographs, their children’s performance and school based information. Teachers post daily activities  to parents via email and ClassDojo. The application also has a messaging portal that parents can use to keep regular contact with the school. Apart from this, formal written reports are provided to parents twice each academic year and also on daily basis. ",
  },

  {
	question: "How many teachers are there in one class of the Preschool Programme?",
    answer: "There is usually one lead teacher and one or more assistant teachers in a preschool classroom. The exact ratio of teachers to children can also vary based on state or local regulations and the age range of the children in the classroom.",
  },
   
];
 
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function Faqs() {
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
        <title>FAQs | Spica International School</title>
        <meta
          name="title"
          content="FAQs | Spica International School"
        />
        <meta
          name="description"
          content="Have questions about Spica International? Check out our FAQs page for answers!"
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
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
          content="FAQs | Spica International School"
        />
        <meta
          name="twitter:description"
          content="Have questions about Spica International? Check out our FAQs page for answers!"
        />
        <meta
          name="twitter:image:src"
          content="https://spica.edu.pk/_next/image?url=%2Fimages%2Fspica-logo2.png&w=256&q=75"
        />
        <meta
          property="og:title"
          content="About Us | Spica International School"
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content="https://spica.edu.pk/_next/image?url=%2Fimages%2Fspica-logo2.png&w=256&q=75"
        />
        <meta
          property="og:description"
          content="Have questions about Spica International? Check out our FAQs page for answers!"
        />
        <meta property="og:locale" content="en" />
        <meta
          itemProp="image"
          content="https://spica.edu.pk/_next/image?url=%2Fimages%2Fspica-logo2.png&w=256&q=75"
        />
        <link rel="canonical" href="https://spica.edu.pk/faqs" />
        <link rel="preconnect" href="//www.google-analytics.com" as="script" />
        <meta name="google" content="notranslate" />
      </Head>

      <MainHeader
        pageHeading="Frequently Asked Questions"
        pageImg="hdr-1.jpg"
      />

      <section className="main-sec pb-16 relative">
        <div
          className="content-bx1 space-y-4 container mx-auto px-4 bg-gradient-to-b from-white to-transparent rounded-xl py-5 pb-24  mb-4 border border-slate-200 border-b-0 rounded-b-none "
          style={{ boxShadow: "0px -15px 15px rgba(1,41,112,0.08)" }}
        >
          <div className="bg-transparent w-full mx-auto">
                <dl>
                  {faqs.map((faq) => (
                    <Disclosure as="div" key={faq.question} className="pt-3">
                      {({ open }) => (
                        <>
                          <dt className="text-lg">
                            <Disclosure.Button
                              
                              className="w-full sm:px-6 sm:py-3 px-3 py-2  border border-slate-300
      bg-gradient-to-br from-white via-slate-100 to-zinc-200 text-gray-700 rounded-lg text-base sm:text-lg font-medium shadow 
      text-left  flex justify-between items-start "
                            >
                              <span className="font-medium text-gray-900">
                                {faq.question}
                              </span>
                              <span className="ml-6 h-7 flex items-center text-red-500">
                                <ChevronDownIcon
                                  className={classNames(
                                    open ? "-rotate-180" : "rotate-0",
                                    "h-6 w-6 transform"
                                  )}
                                  aria-hidden="true"
                                />
                              </span>
                            </Disclosure.Button>
                          </dt>
                          <Disclosure.Panel
                            as="dd"
                            className="transition-all p-5 duration-700 text-sm sm:text-base text-gray-600"
                          >
                            <p className="text-base text-gray-800">
                              {faq.answer}
                            </p>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </dl>
              </div>
          
        </div>

        <div className="absolute inset-x-0 bottom-0 h-96 -z-10 text-slate-600/10 [mask-image:linear-gradient(to_bottom,transparent,white)]"><svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="pricing-pattern" width="32" height="32" patternUnits="userSpaceOnUse" x="50%" y="100%" patternTransform="translate(0 -1)"><path d="M0 32V.5H32" fill="none" stroke="currentColor"></path></pattern></defs><rect width="100%" height="100%" fill="url(#pricing-pattern)"></rect></svg></div> 
      </section>
       
     
    </>
  );
}
