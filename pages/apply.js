import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import MainHeader from "../components/mainheader";
import React from "react";
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function Contact() {
  const router = useRouter();
  const { job } = router.query;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (job) {
      setIsLoading(false);
    }
  }, [job]);

  const [name, setName] = useState('');
  const [cv, setCv] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Applied for ${job} with name: ${name}`);
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
        <title>Contact Us | Spica International</title>
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
      <MainHeader pageHeading="CONTACT US | Spica International" pageImg="child.jpeg" />
      <div className="min-h-screen flex flex-col items-center justify-center">
      {isLoading ? (
        <p className="text-gray-500 text-lg">Loading...</p>
      ) : (
        <>
          <h1 className="text-3xl font-bold">{job}</h1>
          <p className="text-gray-600">Apply for {job}</p>
          
          <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-lg mt-5">
            <input 
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-2 border rounded w-full mb-3"
            />
            <input 
              type="file"
              onChange={(e) => setCv(e.target.files[0])}
              className="p-2 border rounded w-full mb-3"
            />
            <button type="submit" className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-900">
              Submit
            </button>
          </form>
        </>
      )}
    </div>
		
    </>
  );
}

