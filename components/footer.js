import Image from "next/image";
import Link from "next/link";
export default function Footer({ children, home }) {
  return (
    <>
      <section
        id="sec-footer"
        className=" bg-[#87CEEB] sec-footer border-t group bg-center bg-no-repeat bg-cover relative"
        // style={{ backgroundImage: "url('../images/footer-spica.webp')" }}
      >
        <div className="w-full- h-full group-hover:opacity-80  absolute inset-0 z-10   "></div>
        <div className="container mx-auto px-5 z-20 relative">
          <div className="grid grid-cols-1 md:grid-cols-2   lg:grid-cols-4 text-black">
            <div className="md:col-span-2">
              <h2 className="text-lg sm:text-xl font-semibold py-2">
                About Sharif Educational Complex
              </h2>
              <div className="flex text-sm sm:text-base pr-10">
                <div><p>
                At Sharif Educational Complex, we believe in nurturing young minds through play-based learning experiences. Our experienced teachers create a safe and stimulating environment where children can explore, discover, and learn at their own pace. We focus on developing social, emotional, cognitive, and physical skills to prepare children for success in school and beyond.
             
                </p>
                <Link
                      href="#"
                      className=" pr-4  py-1 mt-4 border px-4 rounded-full inline-block  no-underline"
                      title="About Spica"
                    >
                     Sharif Educational Complex
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 inline -mt-1"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                        />
                      </svg>
                    </Link>
                    </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg sm:text-xl font-semibold py-2 mt-3 uppercase md:mt-0">
                Important Links
              </h2>
              <div className="flex flex-col space-y-3 sm:space-y-2 text-sm sm:text-base">
                <Link
                  href="#"
                  title="Applicant Performa"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 inline -mt-1 mr-1"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Home Page
                </Link>
                <Link
                  href="#"
                  title="Online Admission"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 inline -mt-1 mr-1"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Online Admission
                </Link>
                {/* <Link href="https://school.spica.edu.pk/apk/android_app_4.0.apk" title="Download Android App">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 inline -mt-1 mr-1"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Android App
                </Link> */}

                <Link href="http://localhost:3000/about" title="Staff Login">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 inline -mt-1 mr-1"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                 About Us
                </Link>

                <Link href="http://localhost:3000/Feestructure" title="Student Login">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 inline -mt-1 mr-1"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                 FeeStructure
                </Link>

                <Link href="http://localhost:3000/scholarships" title="Parent's Login">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 inline -mt-1 mr-1"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Scholarships
                </Link>

                <Link href="http://localhost:3000/admissionpolicy" title="Admin Login">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 inline -mt-1 mr-1"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                  AdmissionPolicy
                </Link>
              </div>
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-semibold py-2 mt-3 md:mt-0">
                Contact Us
              </h2>

              <div className="flex-1">
                <div className="block mt-2">
                  <h2 className="text-xl font-bold text-red-400">
                    Sharif-Educational-Complex
                  </h2>
                  <p className="mt-3 sm:text-base text-sm text-gray-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-black -mt-1 mr-1 inline"
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
                   <span className="text-black">Jati Umrah, Lahore</span>
                  </p>
                  <p className="text-base mt-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-4 w-4 text-black -mt-1 mr-1 inline"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                      />
                    </svg>
                    <a href="tel:+923281215000"> 042 378 60308-10</a>
                  </p>
                  {/* <p className="text-base mt-2">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-4 w-4 text-gray-300 -mt-1 mr-1 inline"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                      />
                    </svg>
                    <a href="tel:+92554233324"></a>
                  </p> */}
                  <p className="text-base mt-2">
                  {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-4 w-4 text-gray-300 -mt-1 mr-1 inline"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                      />
                    </svg> */}

                    <a href="tel:+92554223338"></a>
                  </p>
                  <p className="text-base mt-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 256 256" strokeWidth="1.5" stroke="currentColor" width="16" height="16">
                    <g strokeLinecap="round" strokeLinejoin="round">
                      <path d="M 13.636 18.872 l 0.159 0.002 c 0.098 0.002 0.196 0.008 0.291 0.014 ..." />
                    </g>
                  </svg>

                    <a href="mailto:info@spica.edu.pk"> hr@sharif.edu.pk</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="pg-footer  ">
          <div className="  w-full h-full py-2">
            <div className="flex flex-col md:flex-row md:justify-between">
              <div className="ftr-links text-black">
              <Link href="#" title="Privacy Policy">
                  Privacy Policy
                </Link>
                 
                <Link href="#" title="Legal Disclaimer">
                  Legal Disclaimer
                </Link>
                <Link href="#" title="Terms of Use">
                  Terms of Use
                </Link>
                <Link href="#" title="Site Map">
                  Site Map
                </Link>
              </div>
              <div className=" text-black copy mt-3 md:mt-0 ">
                <span className="text-black">Copyright &copy; Sharif Educational Complex.</span>
              </div>
            </div>
          </div>
        </footer>
      </section>

      {/* <div className="top-social">
        <a
          href="mailto:info@spica.edu.pk"
          title="Email"
          className="emailit tooltip group  bg-slate-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-auto fill-white"
          >
            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
          </svg>
        </a>

        <a
          href="https://www.facebook.com/Spicainternationalschool/"
          title="Spica International School"
          className="facebook tooltip group bg-[#4267B2]"
        >
          <svg
            className="w-[18px] h-auto fill-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            {" "}
            <path d="M16.403,9H14V7c0-1.032,0.084-1.682,1.563-1.682h0.868c0.552,0,1-0.448,1-1V3.064c0-0.523-0.401-0.97-0.923-1.005 C15.904,2.018,15.299,1.999,14.693,2C11.98,2,10,3.657,10,6.699V9H8c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1l2-0.001V21 c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1v-8.003l2.174-0.001c0.508,0,0.935-0.381,0.993-0.886l0.229-1.996 C17.465,9.521,17.001,9,16.403,9z" />
          </svg>
        </a>

        <a
          href="https://www.instagram.com/spica_international_school/"
          title="Spica International Instagram"
          className="instagram tooltip group   bg-[#405DE6] "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-[18px] h-auto fill-white"
            viewBox="0 0 30 30"
          >
            {" "}
            <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z" />
          </svg>
        </a>

        <a
          href="https://www.youtube.com"
          title="Spica International Youtube"
          className="youtube group tooltip  bg-[#FF0000]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-[18px] h-auto fill-white"
            viewBox="0 0 50 50"
          >
            <path d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z" />
          </svg>
        </a>
      </div> */}
    </>
  );
}
