
'use client';
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import MainHeader from "../components/mainheader";
import React, { useState } from "react";
import { motion } from "framer-motion"
const scholarships = [
  { type: "100% Scholarship (in Tuition Fee)", policy: "90% and above" },
  { type: "75% Scholarship (in Tuition Fee)", policy: "85% and above" },
  { type: "50% Scholarship (in Tuition Fee)", policy: "80% and above" },
  { type: "25% Scholarship (in Tuition Fee)", policy: "70% and above" },
];

const documents = [
  "Copy of Matric Result",
  "8 passport size pic with blue background",
  "Father ID copy",
  "B-form",
  "Character certificate",
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
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 p-6">
      {/* Main Heading */}
      <motion.h1
        className="text-4xl font-extrabold text-blue-900 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        🎓 College Section
      </motion.h1>

      {/* Subheading */}
      <motion.h2
        className="text-2xl font-semibold text-gray-800 mb-6"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        🏆 College Scholarship Policy (1st Year)
      </motion.h2>

      {/* Table */}
      <motion.div
        className="w-full max-w-3xl bg-white p-6 rounded-xl shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
              <th className="p-4 text-left rounded-tl-xl">Scholarship</th>
              <th className="p-4 text-left rounded-tr-xl">General Policy</th>
            </tr>
          </thead>
          <tbody>
            {scholarships.map((scholarship, index) => (
              <motion.tr
                key={index}
                className={`border-b last:border-none transition ${
                  index % 2 === 0 ? "bg-blue-100" : "bg-blue-200"
                } hover:bg-indigo-300 hover:scale-105`}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 * index }}
              >
                <td className="p-4 text-gray-800 font-medium">{scholarship.type}</td>
                <td className="p-4 text-gray-700">{scholarship.policy}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      {/* Documents Required Section */}
      <motion.h2
        className="text-2xl font-semibold text-gray-800 mt-10 mb-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        📄 Documents Required for Admission:
      </motion.h2>

      {/* List with Animations */}
      <motion.ul
        className="w-full max-w-xl bg-white p-6 rounded-xl shadow-lg list-disc list-inside"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {documents.map((doc, index) => (
          <motion.li
            key={index}
            className="text-gray-800 p-3 bg-blue-50 rounded-lg mb-2 hover:bg-indigo-200 transition hover:scale-105"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 * index }}
          >
            {doc}
          </motion.li>
        ))}
      </motion.ul>
    </div>
    </>
  );
}
