
'use client';
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import MainHeader from "../components/mainheader";
import React, { useState } from "react";
import { motion } from "framer-motion"
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
      <motion.div
      className="min-h-screen mt-4 mb-4 rounded-2xl flex flex-col items-center justify-center p-10 bg-[#FAF3E0]"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Heading with Stylish Text */}
      <h1 className="text-4xl font-extrabold text-blue-900 mb-6 shadow-lg p-3 bg-white rounded-lg">
        🎓 School Section
      </h1>

      {/* Table with Soft Background */}
      <motion.table
        className="border border-gray-300 w-full max-w-3xl text-center shadow-md bg-white rounded-lg overflow-hidden"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <tbody>
          <tr className="border border-gray-300 bg-gradient-to-r from-blue-200 to-purple-300 text-white font-bold">
            <td className="p-4">Play Group (Montessori)</td>
            <td className="p-4">General Interview</td>
          </tr>
          <tr className="border border-gray-300 hover:bg-blue-100 transition">
            <td className="p-3 font-semibold">Nursery To Three</td>
            <td className="p-3">
              Mathematics, Urdu, Eng (Objective) obtained at least 50% marks in all subjects
            </td>
          </tr>
          <tr className="border border-gray-300 hover:bg-purple-100 transition">
            <td className="p-3 font-semibold">Four - Matric or O Level</td>
            <td className="p-3">
              Mathematics, Science, English, Urdu (Subjective) obtained at least 50% marks in all subjects
            </td>
          </tr>
        </tbody>
      </motion.table>

      {/* Documents Section with Soft Shadow */}
      <motion.div
        className="mt-8 w-full max-w-3xl p-6 bg-white shadow-lg rounded-lg"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h2 className="text-2xl font-bold mb-4 text-purple-900">📄 Documents Required for Admission:</h2>
        <ul className="list-disc pl-5 text-lg space-y-2 text-gray-700">
          <li>📸 4 snaps (Passport size with white background)</li>
          <li>🆔 Copy of B.Form/smart card</li>
          <li>👨‍👩‍👧‍👦 ID card copy Father & Mother</li>
          <li>🏫 Previous School Leaving Certificate</li>
          <li>📜 Previous Result Card</li>
        </ul>
      </motion.div>
    </motion.div>
    </>
  );
}
