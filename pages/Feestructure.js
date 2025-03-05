'use client';
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import MainHeader from "../components/mainheader";
import React, { useState } from "react";
const feeData = [
  {
    level: 'Montessori To V',
    admissionFee: 10000,
    security: 10000,
    examFund: 2000,
    sportsFund: 2000,
    studentCard: 200,
    tuitionFee: 8800,
  },
  {
    level: 'VI To VIII',
    admissionFee: 12000,
    security: 12000,
    examFund: 2000,
    sportsFund: 2000,
    studentCard: 200,
    tuitionFee: 11000,
  },
  {
    level: 'IX To X',
    admissionFee: 10000,
    security: 10000,
    examFund: 4000,
    sportsFund: 2000,
    studentCard: 200,
    tuitionFee: 8800,
  },
  {
    level: 'O Level',
    admissionFee: 15000,
    security: 20000,
    examFund: 3000,
    sportsFund: 2000,
    studentCard: 200,
    libraryFee: 400,
    computerFee: 500,
    labCharges: 500,
    tuitionFee: 16500,
  },
];
const feeData1 = [
  {
    level: 'Nursery To V',
    admissionFee: 5000,
    security: 5000,
    examFund: 2000,
    sportsFund: 2000,
    studentCard: 200,
    tuitionFee: 5000,
  },
  {
    level: 'VI To VIII',
    admissionFee: 5000,
    security: 5000,
    examFund: 2000,
    sportsFund: 2000,
    studentCard: 200,
    tuitionFee: 6000,
  }
];
export default function Contact() {

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [selectedLevel, setSelectedLevel] = useState(feeData[0]);
  const [selectedLevel1, setSelectedLevel1] = useState(feeData1[0]);
 
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
      <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Sharif Educational Complex Fee Structure</h1>
      <div className="flex gap-4 justify-center mb-6">
        {feeData.map((fee, index) => (
          <button 
            key={index} 
            onClick={() => setSelectedLevel(fee)}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          >
            {fee.level}
          </button>
        ))}
      </div>
      <div className="bg-white p-6 shadow-xl rounded-xl border">
        <h2 className="text-2xl font-semibold mb-4 text-center">{selectedLevel.level}</h2>
        <ul className="space-y-2">
          <li><strong>Admission Fee:</strong> Rs. {selectedLevel.admissionFee}</li>
          <li><strong>School Security (Refundable):</strong> Rs. {selectedLevel.security}</li>
          <li><strong>Annual Examination Fund:</strong> Rs. {selectedLevel.examFund}</li>
          <li><strong>Annual Sports Fund:</strong> Rs. {selectedLevel.sportsFund}</li>
          <li><strong>Student Card:</strong> Rs. {selectedLevel.studentCard}</li>
          {selectedLevel.libraryFee && <li><strong>Library Fee:</strong> Rs. {selectedLevel.libraryFee}</li>}
          {selectedLevel.computerFee && <li><strong>Computer Fee:</strong> Rs. {selectedLevel.computerFee}</li>}
          {selectedLevel.labCharges && <li><strong>Lab Charges:</strong> Rs. {selectedLevel.labCharges}</li>}
          <li><strong>Tuition Fee:</strong> Rs. {selectedLevel.tuitionFee}</li>
        </ul>
      </div>
    </div>
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Sharif Model School For Boys/Girls Fee Structure 2024-2025</h1>
      <div className="flex gap-4 justify-center mb-6">
        {feeData1.map((fee, index) => (
          <button 
            key={index} 
            onClick={() => setSelectedLevel1(fee)}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          >
            {fee.level}
          </button>
        ))}
      </div>
      <div className="bg-white p-6 shadow-xl rounded-xl border">
        <h2 className="text-2xl font-semibold mb-4 text-center">{selectedLevel1.level}</h2>
        <ul className="space-y-2">
          <li><strong>Admission Fee:</strong> Rs. {selectedLevel1.admissionFee}</li>
          <li><strong>School Security (Refundable):</strong> Rs. {selectedLevel1.security}</li>
          <li><strong>Annual Examination Fund:</strong> Rs. {selectedLevel1.examFund}</li>
          <li><strong>Annual Sports Fund:</strong> Rs. {selectedLevel1.sportsFund}</li>
          <li><strong>Student Card:</strong> Rs. {selectedLevel1.studentCard}</li>
          <li><strong>Tuition Fee:</strong> Rs. {selectedLevel1.tuitionFee}</li>
        </ul>
      </div>
    </div>

		
    </>
  );
}
