import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import MainHeader from "../components/mainheader";
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
      <MainHeader pageHeading="CONTACT US" pageImg="/child.jpeg" />
		
		
		<section className="main-sec relative">
          <div className="grid sm:grid-cols-2 gap-4 container mx-auto">
            <div className="content-bx bg-no-repeat   bg-center">
              <div className="block mt-2 text-gray-900 p-8">
                <Image
                src="/sharifLogo.png"
                className="mx-auto mb-5" alt="Spica International"
                width={150}
                height={140}
              ></Image>
                <center><span className="text-xl font-bold text-center mt-3">
                Sharif-Educational-Complex
              </span></center>
                <ul className="text-center">
                <li>
                  <p className="mt-3 sm:text-lg text-sm text-gray-900 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gray-600 -mt-1 mr-1 inline"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    Sharif Complex,jati Umrah <br/>
                     <br/>
                    lahore,Pakistan
                    <a
                      href="https://www.google.com/maps/dir//SPICA+INTERNATIONAL+SCHOOL,+Hafizabad+Road,+near+Rose+Marriage+Garden,+opposite+Flow+Petrol+Pump,+Mian+Mir+Town+Gujranwala/@32.1557497,74.1158726,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x391f2bdab05a7bf5:0x1a7ff34116b9776c!2m2!1d74.1508908!2d32.1557819"
                      title="Get direction to Spica International"
                      className="tooltip"
                      target="_blank"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-4 inline text-slate-500 -mt-1"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm10.72 4.72a.75.75 0 011.06 0l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 11-1.06-1.06l1.72-1.72H9a.75.75 0 010-1.5h10.94l-1.72-1.72a.75.75 0 010-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </p>
                </li>
                <li className="flex flex-col md:flex-row text-center mx-auto justify-center">
                  <p className="text-base sm:text-lg mt-2 mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-4 w-4 text-gray-600 -mt-1 mr-1 inline"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                      />
                    </svg>
                    <a
                      href="tel: +923281215000"
                      style={{ color: "black" }}
                      className="hover:underline"
                    >
                     0300-8521730
                    </a>
                  </p>
                  <p className="text-sm sm:text-lg mt-2 text-gray-800 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-4 w-4 text-gray-600 -mt-1 mr-1 inline"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                    <a
                      className="hover:underline"
                      href="mailto:info@solnyne.com"
                      style={{ color: "black" }}
                    >
                    hr@sharif.edu.pk
                    </a>
                  </p>
                </li>
              </ul>
              </div>
            </div>

            <div className="content-bx ">

              <h3 className="text-2xl text-center">Send us your Inquiry</h3> 
           
            <form onSubmit={handleSubmit} className="mt-2">
            <div className="grid sm:grid-cols-2 gap-4">
                    <label className="block mb-4">
                      <span className="text-slate-600">Full Name</span>
                      <input
                        type="text"
                        value={fullname}
                        onChange={(e) => {
                          setFullname(e.target.value);
                        }}
                        name="fullname"
                        className="txtbx"
                        placeholder="Full Name" 
                      />
                       {errors?.fullname && (
            <p className="text-red-500">Please enter full name.</p>
          )}
                    </label>
                    <label className="block mb-4">
                      <span className="text-slate-600">Subject</span>
                      <input
                        type="text"
                        value={subject}
                        onChange={(e) => {
                          setSubject(e.target.value);
                        }}
                        name="subject"
                        className="txtbx"
                        placeholder="Subject"
                      />
                       {errors?.subject && (
            <p className="text-red-500">Please enter subject.</p>
          )}
                    </label>
                  </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                    <label className="block mb-3">
                      <span className="text-slate-600">Email Eddress</span>
                      <input
                        name="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        type="email"
                        className="txtbx"
                        placeholder="Valid Email Address"
                        
                      />
                       {errors?.email && (
            <p className="text-red-500">Please enter valid email address.</p>
          )}
                    </label>

                    <label className="block mb-3">
                        <span className="text-slate-600">Phone Number</span>
                        <input
                          name="phone"
                          value={phone}
                          onChange={(e) => {
                            setPhone(e.target.value);
                          }}
                          type="text"
                          className="txtbx"
                          placeholder="Valid Phone Number"
                          
                        />
                         {errors?.phone && (
            <p className="text-red-500">Please enter phone number.</p>
          )}
                      </label>
                     
                    </div>

                    
                    
                    <label className="block mb-4">
                      <span className="text-slate-600">Message</span>
                      <textarea
                        name="message"
                        value={message}
                        onChange={(e) => {
                          setMessage(e.target.value);
                        }}
                        className="txtbx"
                        rows="2"
                        placeholder="Message..."
                      ></textarea>
                       {errors?.message && (
            <p className="text-red-500">Please enter message.</p>
          )}
                    </label>
                    <div className="mb-2 sm:text-right text-center ">
                      <button
                        type="submit"
                        className="btn-action">
                         {buttonText}
                      </button>
                    </div>
                    <div className="text-left">
            {showSuccessMessage && (
              <p className="text-green-500 font-semibold text-sm my-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 inline mr-2 -mt-1">
  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
</svg>
 Thankyou! Your Message has been delivered.
              </p>
            )}
            {showFailureMessage && (
              <p className="text-red-500">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 inline mr-2 -mt-1">
  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
</svg>
  Oops! Something went wrong, please try again.
              </p>
            )}
          </div>
                  </form>
            </div>
          </div>

          <div className="content-bx">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3377.79781229272!2d74.14870331554248!3d32.15575448116402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f2bdab05a7bf5%3A0x1a7ff34116b9776c!2sSPICA%20INTERNATIONAL%20SCHOOL!5e0!3m2!1sen!2s!4v1681268513735!5m2!1sen!2s" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="w-full h-96 rounded-xl outline-none"></iframe>
            

 


          </div>
		  
          <div className="absolute inset-x-0 bottom-0 h-96 -z-10 text-slate-600/10 [mask-image:linear-gradient(to_bottom,transparent,white)]"><svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="pricing-pattern" width="32" height="32" patternUnits="userSpaceOnUse" x="50%" y="100%" patternTransform="translate(0 -1)"><path d="M0 32V.5H32" fill="none" stroke="currentColor"></path></pattern></defs><rect width="100%" height="100%" fill="url(#pricing-pattern)"></rect></svg></div>  
        </section>
		
    </>
  );
}
