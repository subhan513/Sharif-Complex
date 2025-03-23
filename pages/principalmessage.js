'use client';
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import MainHeader from "../components/mainheader";
import React, { useState } from "react";

import { motion } from 'framer-motion';
export default function principalmessage() {

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
        <title>Contact Us | Sharif Educational Complex</title>
        <meta name="title" content="Contact Us | Sharif educational Complex" />
        <meta name="description" content="" />
        <link rel="icon" type="image/x-icon" href="/favicon.png"></link>
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="1 days" />
        <meta name="author" content="Najam Awan" />
        <meta itemProp="name" content="Contact Us | Spica International" />
        <meta itemProp="image" content="https://spica.edu.pk/_next/image?url=%2Fimages%2Fspica-logo2.png&w=256&q=75" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Contact Us | Spica International" />
        <meta name="twitter:description" content="" />
        <meta name="twitter:image:src" content="https://spica.edu.pk/_next/image?url=%2Fimages%2Fspica-logo2.png&w=256&q=75" />
        <meta property="og:title" content="Contact Us | Spica International" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://spica.edu.pk/_next/image?url=%2Fimages%2Fspica-logo2.png&w=256&q=75" />
        <meta property="og:description" content="" />
        <meta property="og:locale" content="en" />
        <meta itemProp="image" content="https://spica.edu.pk/_next/image?url=%2Fimages%2Fspica-logo2.png&w=256&q=75" />
        <link rel="canonical" href="https://spica.edu.pk/contact-us" />
        <link rel="preconnect" href="//www.google-analytics.com" as="script" />
        <meta name="google" content="notranslate" />
      </Head>
      <MainHeader pageHeading="Principle Message" pageImg="child.jpeg" />
      <section className="bg-gray-100 py-12 px-6 md:px-20">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="border-4 border-black rounded-lg overflow-hidden shadow-lg"
        >
          <Image 
            src="/pricipleImg.png" 
            alt="Principal" 
            width={200} 
            height={200} 
            className="w-full  h-auto"
          />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Message by Principal</h2>
          <p className="text-gray-700 leading-relaxed">
            Welcome to SEC, where we have been committed to academic excellence and holistic development since 1998. 
            As principal, I am honored to lead a school that values each student&apos;s unique potential and strives to provide 
            a nurturing environment where they can flourish both academically and personally.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Thank you for entrusting us with your child’s education. We aim to make their journey enriching and impactful.
          </p>
          <p className="font-semibold mt-6">Warm regards,<br/> Muhammad Ashfaq<br/> Principal, SEC</p>
        </motion.div>
      </div>
    </section>
		
    </>
  );
}
