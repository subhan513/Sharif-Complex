
'use client';
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import MainHeader from "../components/mainheader";
import React, { useState } from "react";
import { motion } from "framer-motion"
export default function Contact() {


  const [activeTab, setActiveTab] = useState("Junior School");

  const classesData = {
    "Junior School": ["Montessori to 3"],
    "Prep School": ["Grade 4 to 6"],
    "Senior School": ["Grade 7 to 10"],
    "SMSB": ["O Level"],
    "SMSG (Only Girls)": ["Girls O Level Section"],
  };
 

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
        📚 Classes
      </motion.h1>

      {/* Tab Buttons */}
      <motion.div
        className="flex space-x-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {Object.keys(classesData).map((tab) => (
          <motion.button
            key={tab}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 font-semibold rounded-md transition ${
              activeTab === tab
                ? "bg-orange-500 text-white shadow-lg"
                : "text-red-500 hover:text-orange-500"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </motion.button>
        ))}
      </motion.div>

      {/* Class Table with Animation */}
      <motion.div
        className="mt-6 w-full max-w-lg"
        key={activeTab} // Key change will trigger re-animation
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <table className="w-full border-collapse shadow-lg rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="p-3 text-left">Class</th>
              <th className="p-3 text-left">Details</th>
            </tr>
          </thead>
          <tbody>
            {classesData[activeTab].map((detail, index) => (
              <motion.tr
                key={index}
                className="bg-blue-100 border-b"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
              >
                <td className="p-3 font-bold">{activeTab}</td>
                <td className="p-3">{detail}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
    </>
  );
}
