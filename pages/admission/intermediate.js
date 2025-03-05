import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
// import Layout from "../components/layout";
import MainHeader from "../../components/mainheader";
import React, { useState } from "react";

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
   const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    motherName: "",
    dob: "",
    address: "",
    class: "",
    bForm: "",
    gender: "",
    religion: "",
    city: "",
    province: "",
    matricRollNo: "",
    matricObtainedMarks: "",
    matricTotalMarks: "",
    contact: "",
    guardianContact: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Form submitted successfully!");
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
      <div className="min-h-screen flex flex-col items-center justify-center p-10">
      <h1 className="text-3xl font-bold mb-6">Intermediate Admission Form</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-red-50 p-6 rounded-lg shadow-lg w-full max-w-3xl"
      >
        <div className="grid grid-cols-2 gap-4">
          <input type="text" name="name" placeholder="Name *" onChange={handleChange} className="p-2 border rounded w-full" required />
          <input type="text" name="fatherName" placeholder="Father Name *" onChange={handleChange} className="p-2 border rounded w-full" required />
          <input type="text" name="motherName" placeholder="Mother Name *" onChange={handleChange} className="p-2 border rounded w-full" required />
          <input type="date" name="dob" placeholder="Date Of Birth *" onChange={handleChange} className="p-2 border rounded w-full" required />
          <input type="text" name="address" placeholder="Address *" onChange={handleChange} className="p-2 border rounded w-full" required />
          <input type="text" name="class" placeholder="Class *" onChange={handleChange} className="p-2 border rounded w-full" required />
          <input type="text" name="bForm" placeholder="B-Form (if Applicable) *" onChange={handleChange} className="p-2 border rounded w-full" required />
          <input type="text" name="gender" placeholder="Gender *" onChange={handleChange} className="p-2 border rounded w-full" required />
          <input type="text" name="religion" placeholder="Religion *" onChange={handleChange} className="p-2 border rounded w-full" required />
          <input type="text" name="city" placeholder="City *" onChange={handleChange} className="p-2 border rounded w-full" required />
          <input type="text" name="province" placeholder="Province *" onChange={handleChange} className="p-2 border rounded w-full" required />
          <input type="text" name="matricRollNo" placeholder="Matric Roll No *" onChange={handleChange} className="p-2 border rounded w-full" required />
          <input type="text" name="matricObtainedMarks" placeholder="Matric Obtained Marks *" onChange={handleChange} className="p-2 border rounded w-full" required />
          <input type="text" name="matricTotalMarks" placeholder="Matric Total Marks *" onChange={handleChange} className="p-2 border rounded w-full" required />
          <input type="text" name="contact" placeholder="Contact No *" onChange={handleChange} className="p-2 border rounded w-full" required />
          <input type="text" name="guardianContact" placeholder="Guardian Contact No *" onChange={handleChange} className="p-2 border rounded w-full" required />
        </div>

        <button type="submit" className="bg-purple-700 text-white px-6 py-3 rounded-lg w-full mt-5 hover:bg-purple-900">
          Submit
        </button>
      </form>
    </div>
		
		
    </>
  );
}
