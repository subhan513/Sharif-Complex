'use client';
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import MainHeader from "../components/mainheader";
import React, { useState } from "react";

import { motion } from 'framer-motion';
export default function Contact() {

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
 
   const [errors, setErrors] = useState({}); 
   const [buttonText, setButtonText] = useState("Send Message"); 
   const [showSuccessMessage, setShowSuccessMessage] = useState(false);
   const [showFailureMessage, setShowFailureMessage] = useState(false); 
    
   const handleValidation = () => {
     let tempErrors = {};
     let isValid = true;
 
     if (fullname.length <= 0) {
       tempErrors["fullname"] = true;
       isValid = false;
     }
     if (email.length <= 0) {
       tempErrors["email"] = true;
       isValid = false;
     }
     if (subject.length <= 0) {
       tempErrors["subject"] = true;
       isValid = false;
     }
     if (phone.length <= 0) {
      tempErrors["phone"] = true;
      isValid = false;
    }
     if (message.length <= 0) {
       tempErrors["message"] = true;
       isValid = false;
     }
 
     setErrors({ ...tempErrors });
     console.log("errors", errors);
     return isValid;
   };

   const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending");
      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          email: email,
          fullname: fullname,
          subject: subject,
          phone: phone,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Send");

        setPhone("");
        setFullname("");
        setEmail("");
        setMessage("");
        setSubject("");
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Send");
      setPhone("");
      setFullname("");
      setEmail("");
      setMessage("");
      setSubject("");
    }
    console.log(fullname, email, subject, message);
  };
  const members = [
    {
      name: 'Mian Muhammad Sharif',
      role: 'Founding Chairman',
      image: '/founder.jpg',
    },
    {
      name: 'Mian Muhammad Nawaz Sharif',
      role: 'Present Chairman & Trustee',
      image: '/images/nawazsharif.jpg',
    },
    {
      name: 'Maryam Nawaz Sharif',
      role: 'Chairperson',
      image: '/images/maryamnawaz.jpeg',
    },
  ];

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

      <section className="py-10 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">BOARD OF TRUSTEES</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {members.map((member, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-4">
            <Image
              src={member.image}
              alt={member.name}
              width={300}
              height={300}
              className="rounded-lg object-cover"
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-700">{member.name}</h3>
            <p className="text-gray-500">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
    </>
  );
}

