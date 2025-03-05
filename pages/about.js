import Link from 'next/link';
import Image from 'next/image';
import Layout from '../components/layout';
import MainHeader from '../components/mainheader';
import Head from 'next/head';
import { Disclosure, Transition } from '@headlessui/react';
import { PlusIcon, MinusIcon } from '@heroicons/react/outline';

// const faqs = [
//   {
//     question: "Pre Planning",
//     answer:
//       "Concept, Feasibility study, financing & funding, permits & licensing",
//   },
//   {
//     question: "Designing & Engineering",
//     answer:
//       "Specification, outline & detailed design, energy estimates.",
//   },
//   {
//     question: "Construction",
//     answer:
//       "Procurement, Contracting, Logistics, Site Preparation & environment mitigation, mounting structures & Assembly subsystems.",
//   },
//   {
//     question: "Operation",
//     answer:
//       "Running the power plant in order to deliver Projected energy performance in compliance with applicable rules and regulations. Certification & Commissioning Connection to power grid.",
//   },
//   {
//     question: "Maintenance & After Sales",
//     answer:
//       "Solar maintenance services, solar repair, solar checking, solar fix, solar report, Solar O&m. After-Sales Services help to establish customer loyalty and ensure customer retainment. They mark that customer's relations with your company hasn't ended yet.",
//   },

// ]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function About() {
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
        <title>About Us | Sharif College Of Engineering & Technology</title>
        <meta
          name="title"
          content="About Us | Sharif College Of Engineering & Technology"
        />
        <meta
          name="description"
          content="We provides a high-quality early childhood education in a safe and nurturing environment that fosters creativity, critical thinking, and global awareness."
        />
        <link rel="icon" type="image/x-icon" href="/favicon."></link>
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="1 days" />
        <meta name="author" content="Najam Awan" />
        <meta itemProp="name" content="" />
        <meta
          itemProp="image"
          content="https://spica.edu.pk/_next/image?url=%2Fimages%2Fspica-logo2.png&w=256&q=75"
        />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="About Us | Spica International School"
        />
        <meta
          name="twitter:description"
          content="We provides a high-quality early childhood education in a safe and nurturing environment that fosters creativity, critical thinking, and global awareness."
        />
        <meta
          name="twitter:image:src"
          content="https://spica.edu.pk/_next/image?url=%2Fimages%2Fspica-logo2.png&w=256&q=75"
        />
        <meta
          property="og:title"
          content="About Us | Spica International School"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://spica.edu.pk/_next/image?url=%2Fimages%2Fspica-logo2.png&w=256&q=75"
        />
        <meta
          property="og:description"
          content="We provides a high-quality early childhood education in a safe and nurturing environment that fosters creativity, critical thinking, and global awareness."
        />
        <meta property="og:locale" content="en" />
        <meta
          itemProp="image"
          content="https://spica.edu.pk/_next/image?url=%2Fimages%2Fspica-logo2.png&w=256&q=75"
        />
        <link rel="canonical" href="https://spica.edu.pk/about" />
        <link rel="preconnect" href="//www.google-analytics.com" as="script" />
        <meta name="google" content="notranslate" />
      </Head>

      <MainHeader pageHeading="ABOUT US" pageImg="child.jpeg" />

      <section className="main-sec">
        <div
          className="content-bx1 space-y-4 container mx-auto px-4 bg-gradient-to-b from-white to-transparent rounded-xl py-5  mb-4 border border-slate-200 border-b-0 rounded-b-none pb-10 "
          style={{ boxShadow: '0px -15px 15px rgba(1,41,112,0.08)' }}>
          <p>
            <span className="font-bold">Sharif Trust</span> was founded by Late
            Mian Muhammad Sharif, a philanthropist and an industrial
            conglomerate. He was blessed with an ability to run enterprises
            efficiently. Along with flouting of industrial concerns, he had
            immense desire to establish and sponsor welfare-oriented projects
            for un-affording population. He formed Sharif Trust (1995)
            contributed by his family members. The Sharif Trust registered under
            the Societies registration Act XXI of 1860. Main objectives of this
            trust are to construct, establish and maintain educational
            institutions and hospitals including medical colleges. So far as the
            allied institutes concerns, it comprises of Sharif Medical and
            Dental College, Sharif College of Engineering and Technology, Sharif
            Educational Complex (KG to 12th grade), Sharif Medical City
            Hospital.
          </p>
          <div>
            <h3 className="text-2xl font-bold">Location</h3>
            <p>
              The Sharif Institutes are located in the South of the Lahore city,
              which is the integrating spot of the different cities of Punjab
              and its Industries. It mainly joins the Lahore city, Raiwind city
              and Sundar Industrial Area. It is conveniently connected to the
              most important and the only modern airport of Lahore. It has a
              very good excess to the city of Lahore through Ring Road. Sundar
              Industrial Estate is the most important industrial city of
              Pakistan and is just near the doors of the Sharif institutes. The
              engineering students have special prospectus in the factories of
              the industrial city during and after the completion of their
              undergraduate studies.
            </p>
          </div>
        </div>
      </section>

      <div className="grid  sm:grid-cols-2  gap-4 max-w-7xl mx-auto px-5">
        <div className="relative mx-auto max-w-md  sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none  lg:py-10">
          <div className="relative pt-32 pb-10 rounded-2xl shadow-xl overflow-hidden">
            <video
              autoPlay
              className="absolute inset-0 h-full w-full object-cover"
              controlsList="nodownload"
              loop={true}
              muted=""
              playsInline=""
              src="./images/11.mp4"></video>

            <div className="absolute inset-0 bg-indigo-500-500 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-600 via-indigo-600 opacity-90"></div>
            <div className="relative px-8">
              <h2 className="text-3xl text-white font-bold">Our Vision</h2>
              <blockquote className="mt-8">
                <div className="relative text-base sm:text-lg font-medium text-white md:flex-grow">
                  <svg
                    className="absolute top-0 left-0 transform -translate-x-3 -translate-y-6 h-8 w-8 text-slate-300"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="relative text-justify">
                  The vision of Sharif Education Complex is to create a dynamic learning environment where every student is empowered to realize their full potential. We aspire to be a leading educational institution recognized for cultivating compassionate leaders who are equipped to address global challenges. Our vision is to inspire a diverse community of learners to embrace curiosity, foster innovation, and develop a strong sense of social responsibility, ultimately contributing to a better world for future generations.
                  </p>
                  <p className="mt-3">
                    {' '}
                  </p>
                </div>

                <div className="mt-4">
                  <p className="text-base font-semibold text-slate-300">
                  Sharif Educational Complex
                  </p>
                </div>
              </blockquote>
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-md sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-10">
          <div className="relative pt-32 pb-10 rounded-2xl shadow-xl h-full overflow-hidden">
            <video
              autoPlay
              className="absolute inset-0 h-full w-full object-cover"
              controlsList="nodownload"
              loop={true}
              muted=""
              playsInline=""
              src="./images/11.mp4"></video>
            <div className="absolute inset-0 bg-[#edca8a] mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#dd9819] via-[#fabc0b] opacity-90"></div>
            <div className="relative px-8">
              <h2 className="text-3xl text-white font-bold">Our Mission</h2>
              <blockquote className="mt-8">
                <div className="relative text-base sm:text-lg font-medium text-white md:flex-grow">
                  <svg
                    className="absolute top-0 left-0 transform -translate-x-3 -translate-y-6 h-8 w-8 text-gray-200"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="relative text-justify">
                  Sharif Education Complex is committed to nurturing intellectually capable, creative, and ethically grounded individuals who will contribute wisdom, compassion, and leadership to a global society. Our mission goes beyond academic excellence; we strive to foster a vibrant learning environment that encourages critical thinking, innovation, and a passion for lifelong learning. We believe in the holistic development of our students, emphasizing personal growth, ethical values, and responsible citizenship. By providing diverse educational experiences and promoting community engagement, we prepare our students to navigate an ever-changing world and make meaningful contributions to society.
                  </p>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      <section className="container mx-auto mt-16">
        <div
          className="content-bx1 space-y-4 container mx-auto px-4 bg-gradient-to-b from-white to-transparent rounded-xl py-5  mb-4 border border-slate-200 border-b-0 rounded-b-none pb-10 "
          style={{ boxShadow: '0px -15px 15px rgba(1,41,112,0.08)' }}>
          <div className="grid lg:flex gap-10">
            <Image
              src="/founder.jpg"
              alt="Chairman Spica Haji Muhammad Bashir Ansari Gujranwala"
              width={445}
              height={591}
              className="lg:w-80 lg:h-96 w-60 h-auto shadow-xl mt-12 mx-auto"></Image>

            <div className="space-y-4 ">
              <h2 className="text-2xl text-center">Founder's Message</h2>

              <blockquote className="mt-8">
                <div className="relative text-base font-medium md:flex-grow">
                  <svg
                    className="absolute top-0 left-0 transform -translate-x-3 -translate-y-6 h-8 w-8 text-gray-200"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>

                  <p className="mt-4">Dear Students and Parents,</p>
                  <p className="mt-4">
                    Welcome to the family of Sharif Educational Complex Thank you for trusting our school and
                    admitting your child here. We place high value on our
                    partnership with parents, families and community and we
                    invite you to be an active part of our organization.{' '}
                  </p>
                  <p className="mt-4">
                   
                  </p>
                </div>
              </blockquote>

              <p>Best Regards,</p>

              <p className="font-bold">
                Chairman
                <br />
                Muhammad Sharif
                <br />
               Sharif Educaitonal Complex
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto">
        <div
          className="content-bx1 space-y-4 container mx-auto px-4 bg-gradient-to-b from-white to-transparent rounded-xl py-5  mb-4 border border-slate-200 border-b-0 rounded-b-none pb-10 "
          style={{ boxShadow: '0px -15px 15px rgba(1,41,112,0.08)' }}>
          <div className="grid lg:flex gap-10">
            <Image
              src="/pricipleImg.png"
              alt="Principal Spica International School"
              width={445}
              height={591}
              className="lg:w-80 lg:h-96 w-60 h-auto shadow-xl mt-12 mx-auto border-solid border-4 border-white hover:border-dotted"></Image>
            <div className="space-y-4 ">
              <h2 className="text-2xl text-center">Principal's Message</h2>

              <p>
              Welcome to SEC, where we have been committed to academic excellence and holistic development since 1998. As principal, I am honored to lead a school that values each student's unique potential and strives to provide a nurturing environment where they can flourish both academically and personally. At SEC, we believe that education is not just about academic success but also about building character, resilience, and a strong sense of purpose.

Sharif Education complex is a unique educational project in providing extraordinary care and education with a sense of ownership to the students. It has completed its 26 academic years obtaining very good results and achieving its mission. The mission of the school is to educate and train the generation making them right spirited Muslims and Pakistani citizens. During the education, necessary emphasis is laid on the character building and personality development of the students. The curriculum, thus, includes a broad and well-planned program for academic, mental and physical training of the students which will enable them to adopt any profession in life.

Thank you for entrusting us with your child’s education. Together, as a community of students, parents, and teachers, we aim to make their educational journey enriching and impactful. We look forward to a bright future with you as part of the SEC family.
              </p>

              <p>Warm Regards,</p>

              <p className="font-bold">
              Muhammad Ashfaq
              Principal, SEC
                <br />
               Sharif Educational Complex
              </p>
            </div>
          </div>
        </div>
      </section>

      <figure className="container pt-10 md:pt-10 mx-auto max-w-7xl ">
        <div className="text-center space-y-4 ">
          <blockquote>
            <div className="text-lg font-medium">
              <h2 className="sm:text-3xl text-xl text-indigo-600 font-bold">
                Our Values
              </h2>
              <div className="value-items mt-5">
                <p className="text-amber-500">Trustworthiness</p>
                <p className="text-cyan-600">Integrity</p>
                <p className="text-black">Efficacious</p>
                <p className="text-blue-500">Relationship</p>
                <p className="text-amber-700">Teamwork</p>
              </div>
            </div>
          </blockquote>
        </div>
      </figure>

      {/* <section className="px-5 pb-0">
        <div className="sec-heading">
          <h2>Messages</h2>
        </div>

        <div className="mt-16 grid grid-cols-1 mx-auto max-w-7xl  lg:grid-cols-3  gap-2 gap-y-16 xl:gap-y-0 sm:gap-4">
          <div className="w-full mx-auto">
            <div className="relative bg-slate-800 rounded-lg shadow-lg p-5 hover:shadow-2xl hover:-translate-y-2 duration-300   h-full ">
              <div className="relative">
                <div
                  className="w-32 h-32 mx-auto border-2  shadow-xl -mt-16 bg-white mb-4 rounded-full bg-cover bg-no-repeat bg-center"
                  style={{
                    backgroundImage: "url('./images/usman-bari.png')",
                  }}
                ></div>
                <div className="text-xs font-bold uppercase text-amber-400 tracking-widest mb-2">
                  Message from CEO
                </div>
                <h3 className="text-xl font-bold text-indigo-50 leading-snug mb-2">
                  Usman Bari Cheema
                </h3>
                <p className="text-slate-50 block text-sm sm:text-base ">
                  Solnyne Solution provides safe, reliable, sustainable and
                  low-cost solar power solutions for personal, industrial and
                  commercial energy needs. Solar energy is a revolution in the
                  fight against climate change and Solnyne is at the forefront
                  of this transformation.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full mx-auto">
            <div className="relative bg-slate-700 rounded-lg shadow-lg p-5  hover:shadow-2xl hover:-translate-y-2 duration-300  h-full">
              <div className="relative">
                <div
                  className="w-32 h-32 mx-auto border-2  shadow-xl -mt-16 bg-white mb-4 rounded-full bg-cover bg-no-repeat bg-center"
                  style={{
                    backgroundImage: "url('./images/naqash.png')",
                  }}
                ></div>
                <div className="text-xs font-bold uppercase text-amber-400 tracking-widest mb-2">
                  Message from MD
                </div>
                <h3 className="text-xl font-bold text-indigo-50 leading-snug mb-2">
                  Muhammad Naqash Ali
                </h3>
                <p className="text-slate-50 block text-sm sm:text-base ">
                  Solnyne is committed to promoting renewable energy in Pakistan
                  and working exclusively on renewable energy projects. Solar
                  energy is the most promising alternative due to its low
                  environmental impact and high economic benefits. As Pakistan
                  faces energy and environmental challenges, solar energy will
                  increasingly play a vital role in the future. With solar
                  energy, Pakistan can achieve energy security, meet the demands
                  of a growing economy, and fulfill its climate commitments.
                  Solnyne is dedicated to strengthening its capabilities and
                  evolving as an organization to meet customer expectations.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full mx-auto">
            <div className="relative bg-slate-600 rounded-lg shadow-lg p-5 hover:shadow-2xl hover:-translate-y-2 duration-300   h-full">
              <div className="relative">
                <div
                  className="w-32 h-32 mx-auto border-2  shadow-xl -mt-16 bg-white mb-4 rounded-full bg-cover bg-no-repeat bg-center"
                  style={{
                    backgroundImage: "url('./images/haroon.png')",
                  }}
                ></div>
                <div className="text-xs font-bold uppercase text-amber-400 tracking-widest mb-2">
                  Message from Director’s Engineering
                </div>
                <h3 className="text-xl font-bold text-indigo-50 leading-snug mb-2">
                  Muhammad Haroon
                </h3>
                <p className="text-slate-50 block text-sm sm:text-base ">
                  Solnye Solutions Pvt. Ltd. offers high-quality engineering
                  solutions with a focus on customer satisfaction. Our priority
                  is to maintain precision and excellence in our products and
                  services through a comprehensive quality management system and
                  internal performance reviews. Our aim is to become a leading
                  engineering organization in Pakistan by utilizing our diverse
                  experience and professional expertise to provide top-notch
                  consultancy services to clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <div className="absolute inset-x-0 bottom-0 h-96 -z-10 text-slate-600/10 [mask-image:linear-gradient(to_bottom,transparent,white)]">
        <svg
          className="absolute inset-0 h-full w-full"
          xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="pricing-pattern"
              width="32"
              height="32"
              patternUnits="userSpaceOnUse"
              x="50%"
              y="100%"
              patternTransform="translate(0 -1)">
              <path d="M0 32V.5H32" fill="none" stroke="currentColor"></path>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pricing-pattern)"></rect>
        </svg>
      </div>

      <section className="px-5">
        <div className="relative container mx-auto max-w-7xl py-10">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center">
            <span className=" px-2 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5 text-gray-500">
                <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
              </svg>
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
