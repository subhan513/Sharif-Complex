import Link from "next/link";
import Image from "next/image";
import Layout from "../components/layout";
import MainHeader from "../components/mainheader";
import Head from "next/head";
import { Disclosure,Transition } from '@headlessui/react';
import { PlusIcon,MinusIcon } from "@heroicons/react/outline";

 

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
        <title>Gallery | Spica International School</title>
        <meta
          name="title"
          content="Gallery Spica | Spica International School"
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
          content="Gallery | Spica International School"
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
          content="Gallery | Spica International School"
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
        <link rel="canonical" href="https://spica.edu.pk/about" />
        <link rel="preconnect" href="//www.google-analytics.com" as="script" />
        <meta name="google" content="notranslate" />
      </Head>

      <MainHeader
        pageHeading="Gallery"
        pageImg="header-2.webp"
      />

      <section className="main-sec">
        <div
          className="content-bx1 space-y-4 container mx-auto px-4 bg-gradient-to-b from-white to-transparent rounded-xl py-5  mb-4 border border-slate-200 border-b-0 rounded-b-none pb-10 "
          style={{ boxShadow: "0px -15px 15px rgba(1,41,112,0.08)" }}
        >
          <p>
            <span className="font-bold">Spica International School's</span> Photo Gallery is a colorful and engaging collection that showcases the vibrant learning experiences of our students. From hands-on activities and classroom projects to field trips and community events, the Photo Gallery provides a glimpse into the rich and diverse educational opportunities that we offer. The collection is updated regularly and serves as a visual testament to the growth and development of our students. Parents and visitors can browse the Photo Gallery to see the smiling faces and proud accomplishments of our students and to gain insight into the engaging and stimulating learning environment that we provide at SPICA International School.
          </p>
        
         
        </div>
      </section>

     
    <section className="relative">

            <div className="container mx-auto">
               <div className="-m-1 flex flex-wrap md:-m-2">
                  <div className="flex w-1/2 flex-wrap">
                            <div className="w-1/2 p-1 md:p-2">
                              <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="./images/gallery/1.webp" />
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                              <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="./images/gallery/2.webp" />
                            </div>
                            <div className="w-full p-1 md:p-2">
                              <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="./images/gallery/3.webp" />
                            </div>
                          </div>
                          <div className="flex w-1/2 flex-wrap">
                            <div className="w-full p-1 md:p-2">
                              <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="./images/gallery/4.webp" />
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                              <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="./images/gallery/5.webp" />
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                              <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="./images/gallery/6.webp" />
                            </div>
                          </div>
                        </div>
            </div>

           

          <div className="container mx-auto">
               <div className="-m-1 flex flex-wrap md:-m-2">
                  <div className="flex w-1/2 flex-wrap">
                            <div className="w-1/2 p-1 md:p-2">
                              <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="./images/gallery/13.jpg" />
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                              <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="./images/gallery/14.jpg" />
                            </div>
                            <div className="w-full p-1 md:p-2">
                              <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="./images/gallery/15.jpg" />
                            </div>
                          </div>
                          <div className="flex w-1/2 flex-wrap">
                            <div className="w-full p-1 md:p-2">
                              <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="./images/gallery/16.jpg" />
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                              <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="./images/gallery/17.jpg" />
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                              <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="./images/gallery/18.jpg" />
                            </div>
                          </div>
                        </div>
            </div>

            <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
                <div className="-m-1 flex flex-wrap md:-m-2">
                  <div className="flex w-1/3 flex-wrap">
                    <div className="w-full p-1 md:p-2">
                      <img
                        alt="gallery"
                        className="block h-full w-full rounded-lg object-cover object-center"
                        src="./images/gallery/7.webp" />
                    </div>
                  </div>
                  <div className="flex w-1/3 flex-wrap">
                    <div className="w-full p-1 md:p-2">
                      <img
                        alt="gallery"
                        className="block h-full w-full rounded-lg object-cover object-center"
                        src="./images/gallery/8.webp" />
                    </div>
                  </div>
                  <div className="flex w-1/3 flex-wrap">
                    <div className="w-full p-1 md:p-2">
                      <img
                        alt="gallery"
                        className="block h-full w-full rounded-lg object-cover object-center"
                        src="./images/gallery/9.webp" />
                    </div>
                  </div>
                  <div className="flex w-1/3 flex-wrap">
                    <div className="w-full p-1 md:p-2">
                      <img
                        alt="gallery"
                        className="block h-full w-full rounded-lg object-cover object-center"
                        src="./images/gallery/10.webp" />
                    </div>
                  </div>
                  <div className="flex w-1/3 flex-wrap">
                    <div className="w-full p-1 md:p-2">
                      <img
                        alt="gallery"
                        className="block h-full w-full rounded-lg object-cover object-center"
                        src="./images/gallery/11.webp" />
                    </div>
                  </div>
                  <div className="flex w-1/3 flex-wrap">
                    <div className="w-full p-1 md:p-2">
                      <img
                        alt="gallery"
                        className="block h-full w-full rounded-lg object-cover object-center"
                        src="./images/gallery/12.webp" />
                    </div>
                  </div>
                </div>
          </div>
          <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
                <div className="-m-1 flex flex-wrap md:-m-2">
                  <div className="flex w-1/3 flex-wrap">
                    <div className="w-full p-1 md:p-2">
                      <img
                        alt="gallery"
                        className="block h-full w-full rounded-lg object-cover object-center"
                        src="./images/gallery/19.jpg" />
                    </div>
                  </div>
                  <div className="flex w-1/3 flex-wrap">
                    <div className="w-full p-1 md:p-2">
                      <img
                        alt="gallery"
                        className="block h-full w-full rounded-lg object-cover object-center"
                        src="./images/gallery/20.jpg" />
                    </div>
                  </div>
                  <div className="flex w-1/3 flex-wrap">
                    <div className="w-full p-1 md:p-2">
                      <img
                        alt="gallery"
                        className="block h-full w-full rounded-lg object-cover object-center"
                        src="./images/gallery/21.jpg" />
                    </div>
                  </div>
                  <div className="flex w-1/3 flex-wrap">
                    <div className="w-full p-1 md:p-2">
                      <img
                        alt="gallery"
                        className="block h-full w-full rounded-lg object-cover object-center"
                        src="./images/gallery/22.jpg" />
                    </div>
                  </div>
                  <div className="flex w-1/3 flex-wrap">
                    <div className="w-full p-1 md:p-2">
                      <img
                        alt="gallery"
                        className="block h-full w-full rounded-lg object-cover object-center"
                        src="./images/gallery/23.jpg" />
                    </div>
                  </div>
                  {/* <div className="flex w-1/3 flex-wrap">
                    <div className="w-full p-1 md:p-2">
                      <img
                        alt="gallery"
                        className="block h-full w-full rounded-lg object-cover object-center"
                        src="./images/gallery/12.jpg" />
                    </div>
                  </div> */}
                </div>
          </div>

        


    
      {/* <div className="mx-auto max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8 z-20">
        <div className="mx-auto   divide-y-2 divide-gray-200">
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
           Our Process
          </h2>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200 bg-white p-6 rounded-xl shadow">
            {faqs.map((faq,index) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="md:text-xl text-base">
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400 group">
                        <i className="absolute not-italic">{index+1}</i><span className="font-bold pl-5 md:pl-10 text-gray-900 group-hover:text-amber-500">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center text-amber-500">
                          <PlusIcon
                            className={classNames(open ? 'hidden' : 'flex', 'h-5 w-5 mr-4 transform')}
                            aria-hidden="true"
                          />
                           <MinusIcon
                            className={classNames(open ? 'flex' : 'hidden', 'h-5 w-5 mr-4 transform')}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Disclosure.Panel as="dd" className="mt-2 pr-2">
                      <p className="md:text-lg text-sm text-gray-500">{faq.answer}</p>
                    </Disclosure.Panel>
      </Transition>
         
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>

       
      



      </div> 


*/}
      


      <div className="absolute inset-x-0 bottom-0 h-96 -z-10 text-slate-600/10 [mask-image:linear-gradient(to_bottom,transparent,white)]"><svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="pricing-pattern" width="32" height="32" patternUnits="userSpaceOnUse" x="50%" y="100%" patternTransform="translate(0 -1)"><path d="M0 32V.5H32" fill="none" stroke="currentColor"></path></pattern></defs><rect width="100%" height="100%" fill="url(#pricing-pattern)"></rect></svg></div>  
      
      </section>
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
