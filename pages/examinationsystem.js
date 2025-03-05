
'use client';
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import MainHeader from "../components/mainheader";
import React, { useState } from "react";
import { motion } from "framer-motion"



const examSystem = [
  "Academic calendar of the SEC is divided into three Terms (August, December, and March).",
  "At the end of each term, written tests are given to students and a detailed report showing the results and overall performance of each student.",
  "Each exam is followed by a Parent-Teacher Meeting to discuss the problems & performance of students with their parents.",
  "Answer scripts of exams are also shown to the parents if they desire so.",
  "Monthly tests are also conducted, and the report card is sent to the parents. Parents of weak students are called to discuss their problems.",
];
export default function Contact() {

 

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
        <title>Contact Us | Sharif Complex</title>
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
      <MainHeader pageHeading="FEE STRUCTURE" pageImg="child.jpeg" />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      {/* Heading */}
      <motion.h1
        className="text-4xl font-extrabold text-gray-900 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        📝 System of Examination
      </motion.h1>

      {/* List with Animations */}
      <motion.div
        className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {examSystem.map((item, index) => (
          <motion.div
            key={index}
            className="p-4 border-b last:border-none flex items-start space-x-3"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 * index }}
            whileHover={{ scale: 1.02 }}
          >
            <span className="text-blue-600 font-bold">{index + 1}.</span>
            <p className="text-gray-700">{item}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
    </>
  );
}
