import Link from "next/link";
import Image from "next/image";
import Layout from "../components/layout";
import MainHeader from "../components/mainheader";
import Head from "next/head";

import React, { useState } from "react";
export default function reServation() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [vtype, setVtype] = useState("");
  const [phone, setPhone] = useState("");
  const [detail, setDetail] = useState("");
  const [servicetype, setService] = useState("");
  const [passengers, setPassengers] = useState("");
  const [paddress, setPaddress] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");

  const [errors, setErrors] = useState({});
  const [buttonText, setButtonText] = useState("Submit");
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
    if (vtype.length <= 0) {
      tempErrors["vtype"] = true;
      isValid = false;
    }
    if (phone.length <= 0) {
      tempErrors["phone"] = true;
      isValid = false;
    }
    if (servicetype.length <= 0) {
      tempErrors["servicetype"] = true;
      isValid = false;
    }
    if (passengers.length <= 0) {
      tempErrors["passengers"] = true;
      isValid = false;
    }
    if (paddress.length <= 0) {
      tempErrors["paddress"] = true;
      isValid = false;
    }

    if (destination.length <= 0) {
      tempErrors["destination"] = true;
      isValid = false;
    }

    if (date.length <= 0) {
      tempErrors["date"] = true;
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
      setButtonText("Submitting");
      const res = await fetch("/api/sendgridres", {
        body: JSON.stringify({
          email: email,
          fullname: fullname,
          phone: phone,
          date: date,
          paddress: paddress,
          passengers: passengers,
          vtype: vtype,
          servicetype: servicetype,
          destination: destination,
          detail: detail,
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
        setButtonText("Submit");

        setPhone("");
        setFullname("");
        setEmail("");
        setVtype("");
        setDetail("");
        setPassengers("");
        setPaddress("");
        setDestination("");
        setDate("");
        setService("");

        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Submit");
      setPhone("");
      setFullname("");
      setEmail("");
      setDetail("");
      setVtype("");
      setPassengers("");
      setPaddress("");
      setDestination("");
      setDate("");
      setService("");
    }
    console.log(
      fullname,
      email,
      vtype,
      detail,
      servicetype,
      paddress,
      destination,
      passengers,
      date,
      phone
    );
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
        <title>Online Admission | SPICA International School</title>
        <meta name="title" content="Online Admission | SPICA International School" />
        <meta name="description" content="" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="1 days" />
        <meta name="author" content="Najam Awan" />
        <meta itemProp="name" content="" />
        <meta itemProp="image" content="" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Online Admission | SPICA International School" />
        <meta name="twitter:description" content="" />
        <meta name="twitter:image:src" content="" />
        <meta
          property="og:title"
          content="Online Admission | SPICA International School"
        />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="" />
        <meta
          property="og:description"
          content=""
        />
        <meta property="og:locale" content="en" />
        <meta
          itemProp="image"
          content=""
        />
        <link rel="canonical" href="https://spica.edu.pk/online-admission" />
        <link rel="preconnect" href="//www.google-analytics.com" as="script" />
        <meta name="google" content="notranslate" />
      </Head>

      <MainHeader pageHeading="Online Admission Form" pageImg="hdr-1.webp" />

      <section className="main-sec">
        <div
          className="content-bx space-y-4 bg-no-repeat bg-center bg-cover"
          // style={{ backgroundImage: "url('/images/bg-res.jpg')" }}
        >
          <p>
            Spica International School is a vibrant and nurturing environment
            that is specifically designed for children aged 2 to 5 years old.
            With a strong focus on early childhood education, the school
            provides a range of stimulating and engaging activities that promote
            learning and development in a fun and supportive atmosphere. From
            the colorful and interactive classrooms to the spacious outdoor play
            area, every aspect of Spica International School has been
            thoughtfully designed to meet the unique needs of young learners.
          </p>

          <form className="mt-2 " onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-4 max-w-6xl mx-auto bg-white p-5 bg-opacity-80 border shadow rounded-lg" >
            <div className="space-y-4">
              
                <label className="block">
                  <span className="text-slate-600">Child's Full Name</span>
                  <input
                    type="text"
                    value={fullname}
                    onChange={(e) => {
                      setFullname(e.target.value);
                    }}
                    name="fullname"
                    className="txtbx"
                     
                  />
                  {errors?.fullname && (
                    <p className="text-red-500">Please enter full name.</p>
                  )}
                </label>
                <div className="grid  md:grid-cols-2 gap-3">
                  <label className="block">
                    <span className="text-slate-600">Gender</span>
                    <select
                      className="txtbx bg-transparent py-3 font-sans bg-white"
                      name="vtype"
                      value={vtype}
                      onChange={(e) => {
                        setVtype(e.target.value);
                      }}
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>

                    {errors?.vtype && (
                      <p className="text-red-500">
                        Please select vehicle type.
                      </p>
                    )}
                  </label>

                  <label className="block">
                    <span className="text-slate-600">Date of Birth</span>

                    <input
                      type="date"
                      value={date}
                      onChange={(e) => {
                        setDate(e.target.value);
                      }}
                      name="date"
                      className="txtbx"
                    />
                    {errors?.date && (
                      <p className="text-red-500">Please enter date.</p>
                    )}
                  </label>
                </div>
                <div className="grid  md:grid-cols-2 gap-3">
                  <label className="block">
                    <span className="text-slate-600">Place of Birth </span>
                    <input
                      type="text"
                      value={paddress}
                      onChange={(e) => {
                        setPaddress(e.target.value);
                      }}
                      name="paddress"
                      className="txtbx bg-white"
                    />
                    {errors?.paddress && (
                      <p className="text-red-500">
                        Please enter pickup address.
                      </p>
                    )}
                  </label>

                  <label className="block">
                    <span className="text-slate-600">
                      Admission Class Desired{" "}
                    </span>
                    <input
                      type="text"
                      value={destination}
                      onChange={(e) => {
                        setDestination(e.target.value);
                      }}
                      name="destination"
                      className="txtbx"
                    />
                    {errors?.destination && (
                      <p className="text-red-500">Please enter destination.</p>
                    )}
                  </label>
                </div>
                <div className="grid  md:grid-cols-2 gap-3">
                  <label className="block">
                    <span className="text-slate-600">
                      Father's/ Mother's name{" "}
                    </span>
                    <input
                      type="text"
                      maxLength="3"
                      value={passengers}
                      onChange={(e) => {
                        setPassengers(e.target.value);
                      }}
                      name="passengers"
                      className="txtbx"
                    />
                    {errors?.passengers && (
                      <p className="text-red-500">Please enter passengers.</p>
                    )}
                  </label>

                  <label className="block">
                    <span className="text-slate-600">
                      Father's profession / occupation{" "}
                    </span>
                    <input
                      type="text"
                      value={date}
                      onChange={(e) => {
                        setDate(e.target.value);
                      }}
                      name="date"
                      className="txtbx"
                    />
                    {errors?.date && (
                      <p className="text-red-500">Please enter date.</p>
                    )}
                  </label>
                </div>
                <div className="grid  md:grid-cols-2 gap-3">
                  <label className="block">
                    <span className="text-slate-600">
                      Father's / Whatsapp #
                    </span>
                    <input
                      name="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      type="email"
                      className="txtbx"
                      
                    />
                    {errors?.email && (
                      <p className="text-red-500">
                        Please enter valid email address.
                      </p>
                    )}
                  </label>

                  <label className="block">
                    <span className="text-slate-600">Telephone #</span>
                    <input
                      name="phone"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                      type="text"
                      className="txtbx"
                     
                    />
                    {errors?.phone && (
                      <p className="text-red-500">Please enter phone number.</p>
                    )}
                  </label>
                </div>
                <div className="grid  md:grid-cols-2 gap-3">
                  <label className="block">
                    <span className="text-slate-600">Father's CNIC</span>
                    <input
                      name="phone"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                      type="text"
                      className="txtbx"
                    />
                    {errors?.phone && (
                      <p className="text-red-500">Please enter phone number.</p>
                    )}
                  </label>

                  <label className="block">
                    <span className="text-slate-600">
                      Nationality of parents
                    </span>
                    <input
                      name="phone"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                      type="text"
                      className="txtbx"
                    />
                    {errors?.phone && (
                      <p className="text-red-500">Please enter phone number.</p>
                    )}
                  </label>
                </div>{" "}
                <div className="grid  md:grid-cols-2 gap-3">
                  <label className="block">
                    <span className="text-slate-600">Mother's Watsapp #</span>
                    <input
                      name="phone"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                      type="text"
                      className="txtbx"
                    />
                    {errors?.phone && (
                      <p className="text-red-500">Please enter phone number.</p>
                    )}
                  </label>

                  <label className="block">
                    <span className="text-slate-600">
                      Mother's Telephone #{" "}
                    </span>
                    <input
                      name="phone"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                      type="text"
                      className="txtbx"
                    />
                    {errors?.phone && (
                      <p className="text-red-500">Please enter phone number.</p>
                    )}
                  </label>
                </div>
                <label className="block">
                  <span className="text-slate-600">Mother's CNIC :</span>
                  <input
                    name="phone"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                    type="text"
                    className="txtbx"
                     
                  />
                  {errors?.phone && (
                    <p className="text-red-500">Please enter phone number.</p>
                  )}
                </label>
                <label className="block">
                  <span className="text-slate-600">Email Address:</span>
                  <input
                    name="email"
                    value={email}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                    type="email"
                    className="txtbx"
                     
                  />
                  {errors?.phone && (
                    <p className="text-red-500">Please enter Email Address.</p>
                  )}
                </label>
              </div>

              <div className="space-y-4">
                <label className="block">
                  <span className="text-slate-600">
                    {" "}
                    Guardian's/ Bearer's name & address
                  </span>
                  <input
                    name="phone"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                    type="text"
                    className="txtbx"
                     
                  />
                  {errors?.phone && (
                    <p className="text-red-500">Please enter phone number.</p>
                  )}
                </label>

                <label className="block">
                  <span className="text-slate-600">
                    Guardian's profession / occupation
                  </span>
                  <input
                    name="phone"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                    type="text"
                    className="txtbx"
                    
                  />
                  {errors?.phone && (
                    <p className="text-red-500">Please enter phone number.</p>
                  )}
                </label>
                <div className="grid  md:grid-cols-2 gap-3">
                  <label className="block">
                    <span className="text-slate-600">
                      Guardian's Whatsapp #
                    </span>
                    <input
                      name="phone"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                      type="text"
                      className="txtbx"
                    />
                    {errors?.phone && (
                      <p className="text-red-500">Please enter phone number.</p>
                    )}
                  </label>

                  <label className="block">
                    <span className="text-slate-600">Telephone #</span>
                    <input
                      name="phone"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                      type="text"
                      className="txtbx"
                    />
                    {errors?.phone && (
                      <p className="text-red-500">Please enter phone number.</p>
                    )}
                  </label>
                </div>
                <label className="block">
                  <span className="text-slate-600">Religion</span>
                  <input
                    name="phone"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                    type="text"
                    className="txtbx"
                  />
                  {errors?.phone && (
                    <p className="text-red-500">Please enter phone number.</p>
                  )}
                </label>

                <label className="block">
                  <span className="text-slate-600">
                    Name of previous school
                  </span>
                  <input
                    name="phone"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                    type="text"
                    className="txtbx"
                  />
                  {errors?.phone && (
                    <p className="text-red-500">Please enter phone number.</p>
                  )}
                </label>

                <label className="block">
                  <span className="text-slate-600">
                    Sibblings studying in Spica International School
                  </span>
                  <input
                    name="phone"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                    type="text"
                    className="txtbx"
                  />
                  {errors?.phone && (
                    <p className="text-red-500">Please enter phone number.</p>
                  )}
                </label>

                <label className="block">
                  <span className="text-slate-600">
                    Siblings studying in any Spica International School
                  </span>
                  <input
                    name="phone"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                    type="text"
                    className="txtbx"
                  />
                  {errors?.phone && (
                    <p className="text-red-500">Please enter phone number.</p>
                  )}
                </label>

                <label className="block">
                  <span className="text-slate-600">Class</span>
                  <input
                    name="phone"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                    type="text"
                    className="txtbx"
                  />
                  {errors?.phone && (
                    <p className="text-red-500">Please enter phone number.</p>
                  )}
                </label>

                <label className="block">
                  <span className="text-slate-600">
                    Birth certificate / Leaving certificate attached
                  </span>
                  <input
                    name="phone"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                    type="text"
                    className="txtbx"
                  />
                  {errors?.phone && (
                    <p className="text-red-500">Please enter phone number.</p>
                  )}
                </label>

                {/* <label className="block">
                  <span className="text-slate-600">Any Detail</span>
                  <textarea
                    name="detail"
                    value={detail}
                    onChange={(e) => {
                      setDetail(e.target.value);
                    }}
                    className="txtbx"
                    rows="2"
                   
                  ></textarea>
                </label> */}
                 <label className="block">
                  <span className="text-slate-600">Home Address</span>
                  <textarea
                    name="detail"
                    value={detail}
                    onChange={(e) => {
                      setDetail(e.target.value);
                    }}
                    className="txtbx"
                    rows="2"
                   
                  ></textarea>
                </label>
                <div className="mb-2 sm:text-right text-center mt-3 ">
                  <button type="submit" disabled className="btn-action cursor-not-allowed hover:from-red-500 hover:to-red-500 bg-gradient-to-b from-red-600 to-red-500 w-full">
                    {buttonText}
                  </button>
                
                </div>
                <div className="text-left">
                  {showSuccessMessage && (
                    <p className="text-green-500 font-semibold text-sm my-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5 inline mr-2 -mt-1"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Thankyou! Your Reservation detail has been submitted. Our
                      Representative will respond shortly.
                    </p>
                  )}
                  {showFailureMessage && (
                    <p className="text-red-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5 inline mr-2 -mt-1"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Oops! Something went wrong, please try again.
                    </p>
                  )}
                </div>
              </div>
            </div>
            
          </form>
        </div>
      </section>
    </>
  );
}
