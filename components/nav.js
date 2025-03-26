import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import { motion } from 'framer-motion';
import { Menu, Dialog, Transition, Popover } from '@headlessui/react';
import { XIcon, SunIcon } from '@heroicons/react/outline';


export default function Nav() {
  const router = useRouter();
  const currentRoute = router.pathname;
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showAdmissionsDropdown, setShowAdmissionsDropdown] = useState(false);
  const [showAboutUsDropdown, setShowAboutUsDropdown] = useState(false);

  const admissionDropdownRef = useRef(null);
  const aboutDropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (admissionDropdownRef.current && !admissionDropdownRef.current.contains(event.target)) {
        setShowAdmissionsDropdown(false);
      }
      if (aboutDropdownRef.current && !aboutDropdownRef.current.contains(event.target)) {
        setShowAboutUsDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  const handleMouseEnter = (setDropdown) => {
    setDropdown(true);
  };

  const handleMouseLeave = (setDropdown) => {
    setTimeout(() => {
      setDropdown(false);
    }, 300); // **300ms ka delay diya hai taake flicker na ho**
  };

  const handleToggle = () => {
    setOpen(open => !open);
  };
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <nav className=" w-full bg-transparent  bg-opacity-30 transition-all duration-500 h-24 px-5 sm:px-10 flex items-center xl:justify-between justify-center  absolute  z-50 group">
        <div className="flex">
          <button
            type="button"
            aria-label="Mobile Menu"
            title="Mobile Menu"
            onClick={handleToggle}
            className=" sm:mt-8 left-6 flex h-10 w-10 items-center justify-center xl:hidden absolute">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 text-red-600">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
              />
            </svg>
          </button>

          <Link href="/">
          <Image className="mt-4" src="/sharifLogo.png" alt="Logo" width={100} height={100} />
        </Link>
        

          <ul className="top-links items-center ml-12 divide-x uppercase divide-slate-400 text-white divide-opacity-70 text-lg  hidden font-medium xl:flex whitespace-nowrap">
            <li>
              <Link href="/" className="hover:text-[#eb0e0e] px-3">
                Home
              </Link>{' '}
</li>
 {/* 📌 Admission Dropdown */}
 <li className="relative" ref={admissionDropdownRef}>
            <button
              className="px-3 hover:text-[#e88081]"
              onClick={() => setShowAdmissionsDropdown(!showAdmissionsDropdown)}
              onMouseEnter={() => setShowAdmissionsDropdown(true)}
              onMouseLeave={() => setShowAdmissionsDropdown(false)}
            >
              ADMISSION
            </button>

            <Transition
              show={showAdmissionsDropdown}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div
                className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5"
                onMouseEnter={() => setShowAdmissionsDropdown(true)}
                onMouseLeave={() => setShowAdmissionsDropdown(false)}
              >
                <Link href="/admissionpolicy" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Admission Policy
                </Link>
                <Link href="/classes" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Classes
                </Link>
                <Link href="/scholarships" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Scholarships
                </Link>
                <Link href="/howtoapply" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  How to Apply
                </Link>
                <Link href="/examinationsystem" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Examination System
                </Link>
              </div>
            </Transition>
          </li>

          {/* 📌 About Us Dropdown */}
          <li className="relative" ref={aboutDropdownRef}>
            <button
              className="px-3 hover:text-[#e88081]"
              onClick={() => setShowAboutUsDropdown(!showAboutUsDropdown)}
              onMouseEnter={() => setShowAboutUsDropdown(true)}
              onMouseLeave={() => setShowAboutUsDropdown(false)}
            >
              ABOUT US
            </button>

            <Transition
              show={showAboutUsDropdown}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div
                className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5"
                onMouseEnter={() => setShowAboutUsDropdown(true)}
                onMouseLeave={() => setShowAboutUsDropdown(false)}
              >
                <Link href="/principalmessage" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Principal Message
                </Link>
                <Link href="/vissionmission" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Vision & Mission
                </Link>
                {/* <Link href="/administration" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Administration
                </Link> */}
                <Link href="/facilities" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Facilities
                </Link>
                <Link href="/trustees" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Trustees
                </Link>
              </div>
            </Transition>
          </li>
      
          
            {/* <li>
              <Menu as="div" className="relative inline-block text-left px-3">
                <div>
                  <Menu.Button  className={
                  currentRoute.includes("services") || currentRoute.includes("consultation")  || currentRoute.includes("design")
                    ? "text-[#e88081]"
                    : "hover:text-[#e88081]"
                }  >ABOUT US<svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 ml-2 inline"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Menu.Button>
                </div>
                
                
                

                


                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="menuItems origin-center absolute   mt-2 w-[300px] rounded-md shadow-lg bg-white     focus:outline-none">
                    <div className="p-5">
                    <Menu.Item>
                        <Link href="#" title="Director's Message">
                        <SunIcon className="w-5 h-5 inline -mt-1 mr-1"/> Director's Message
                        </Link>
                      </Menu.Item>
                      <Menu.Item>
                        <Link href="#" title="Our Team">
                        <SunIcon className="w-5 h-5 inline -mt-1 mr-1"/> Our Team
                        </Link>
                      </Menu.Item>
                      <Menu.Item>
                        <Link href="#" title="Our Philosphy">
                        <SunIcon className="w-5 h-5 inline -mt-1 mr-1"/> Our Philosphy
                        </Link>
                      </Menu.Item>
                      <Menu.Item>
                        <Link href="#" title="Our Mission and Vision">
                        <SunIcon className="w-5 h-5 inline -mt-1 mr-1"/> Our Mission and Vision
                        </Link>
                      </Menu.Item>
                      <Menu.Item>
                        <Link href="#" title="Our Goals">
                        <SunIcon className="w-5 h-5 inline -mt-1 mr-1"/> Our Goals
                        </Link>
                      </Menu.Item>

                      <Menu.Item>
                        <Link href="#" title="Our Campus">
                        <SunIcon className="w-5 h-5 inline -mt-1 mr-1"/> Our Campus
                        </Link>
                      </Menu.Item>

                     
                       
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </li> */}

            {/* <li>
              <Menu as="div" className="relative inline-block text-left px-3">
                <div>
                  <Menu.Button className="hover:text-[#e88081]">
                    SOLUTIONS 
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 ml-2 inline"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="menuItems origin-center absolute   mt-2 w-[300px] rounded-md shadow-lg bg-white     focus:outline-none">
                    <div className="p-5">
                    <Menu.Item>
                        <Link href="../solutions/on-grid-solar-solutions" title="On Grid Solar Solutions">
                        <SunIcon className="w-5 h-5 inline -mt-1 mr-1"/> On Grid Solar Solutions
                        </Link>
                      </Menu.Item>
                      <Menu.Item>
                        <Link href="../solutions/off-grid-solar-solutions" title="On Grid Solar Solutions">
                        <SunIcon className="w-5 h-5 inline -mt-1 mr-1"/> Off Grid Solar Solutions
                        </Link>
                      </Menu.Item>
                      <Menu.Item>
                        <Link href="../solutions/hybrid-solar-solutions" title="Hybrid Solar Solutions">
                        <SunIcon className="w-5 h-5 inline -mt-1 mr-1"/> Hybrid Solar Solutions
                        </Link>
                      </Menu.Item>
                      <Menu.Item>
                        <Link href="../solutions/commercial-solar-solutions" title="Commercial Solar Solutions">
                        <SunIcon className="w-5 h-5 inline -mt-1 mr-1"/> Commercial Solar Solutions
                        </Link>
                      </Menu.Item>
                      <Menu.Item>
                        <Link href="../solutions/industrial-solar-solutions" title="Industrial Solar Solutions">
                        <SunIcon className="w-5 h-5 inline -mt-1 mr-1"/> Industrial Solar Solutions
                        </Link>
                      </Menu.Item>
 
                      <Menu.Item>
                        <Link href="../solutions/agricultural-solar-solutions" title="Agricultural Solar Solutions">
                        <SunIcon className="w-5 h-5 inline -mt-1 mr-1"/> Agricultural Solar Solutions
                        </Link>
                      </Menu.Item>
                      <Menu.Item>
                        <Link href="../solutions/residential-solar-solutions" title="Residential Solar Solutions">
                        <SunIcon className="w-5 h-5 inline -mt-1 mr-1"/> Residential Solar Solutions
                        </Link>
                      </Menu.Item>
                       
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </li> */}

            <li>
              <Link
                href="/gallery"
                //href="/solutions"
                className={
                  currentRoute.includes('gallery')
                    ? 'text-[#e88081] px-3'
                    : 'hover:text-[#e88081] px-3'
                }>
                Gallery
              </Link>
            </li>

            <li>
              <Link
                href="/blog"
                // href="/products"
                className={
                  currentRoute.includes('products')
                    ? 'text-[#e88081] px-3'
                    : 'hover:text-[#e88081] productslink px-3'
                }>
                Career
              </Link>
            </li>

            <li>
              <Link
                href="/Feestructure"
                //href="/solutions"
                className={
                  currentRoute.includes('about')
                    ? 'text-[#e88081] px-3'
                    : 'hover:text-[#e88081] px-3'
                }>
                Feestructure
              </Link>
            </li>

            <li>
              <Link
                href="/contact-us"
                className={
                  currentRoute === '/contact-us'
                    ? 'text-[#e88081] px-3'
                    : 'hover:text-[#e88081] px-3'
                }>
                CONTACT US
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center ">
          <ul className="items-center   uppercase group-hover:text-white   text-white   text-lg font-normal hidden xl:flex">
            <li className="mr-2">
              <a
                href="https://wa.me/924237860308"
                title="WhatsApp Sharif Educationl Conmplex"
                className="tooltip font-bold flex text-xl hover:-translate-y-1 duration-300 transition   text-black py-1 px-1    rounded-full ">
                <span className="w-9 h-9 bg-green-500 rounded-full flex justify-center items-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    className="w-9 h-auto fill-white"
                    viewBox="0 0 25 25"
                    fill="none">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.7272 24.3561C10.5753 24.3561 8.55361 23.8061 6.79472 22.8408L0 25L2.215 18.4661C1.09778 16.6308 0.454167 14.4786 0.454167 12.1781C0.454167 5.45222 5.94889 0 12.7275 0C19.5053 0 25 5.45222 25 12.1781C25 18.9039 19.5056 24.3561 12.7272 24.3561ZM12.7272 1.93944C7.03722 1.93944 2.40889 6.5325 2.40889 12.1781C2.40889 14.4183 3.13917 16.4931 4.37417 18.1811L3.08528 21.9833L7.05028 20.7231C8.67972 21.7928 10.6314 22.4167 12.7272 22.4167C18.4164 22.4167 23.0456 17.8239 23.0456 12.1783C23.0456 6.53278 18.4164 1.93944 12.7272 1.93944ZM18.9244 14.9828C18.8489 14.8586 18.6483 14.7836 18.3481 14.6344C18.0469 14.4853 16.5675 13.7628 16.2922 13.6636C16.0161 13.5642 15.8153 13.5139 15.615 13.8128C15.4147 14.1117 14.8381 14.7836 14.6622 14.9828C14.4867 15.1822 14.3114 15.2072 14.0106 15.0578C13.71 14.9086 12.7406 14.5933 11.5911 13.5764C10.6969 12.7853 10.0931 11.8086 9.91778 11.5094C9.74222 11.2108 9.89917 11.0494 10.0497 10.9008C10.185 10.7669 10.3506 10.5522 10.5011 10.3781C10.6517 10.2036 10.7017 10.0794 10.8017 9.88C10.9022 9.68083 10.8519 9.50667 10.7767 9.35694C10.7014 9.20778 10.0994 7.73889 9.84889 7.14111C9.59833 6.54389 9.34806 6.64333 9.17222 6.64333C8.99667 6.64333 8.79611 6.61833 8.59556 6.61833C8.395 6.61833 8.06889 6.69306 7.79306 6.99167C7.5175 7.29056 6.74056 8.01278 6.74056 9.48139C6.74056 10.9503 7.81806 12.3694 7.96889 12.5683C8.11917 12.7672 10.0494 15.8794 13.1075 17.0747C16.1667 18.2697 16.1667 17.8711 16.7183 17.8214C17.2692 17.7717 18.4975 17.0994 18.7489 16.4025C18.9992 15.705 18.9992 15.1072 18.9244 14.9828Z"></path>
                  </svg>
                </span>
              </a>
            </li>

            <li>
              <a
                href="tel:+92554233324"
                title="Call Sharif Educational Complex"
                className="tooltip font-bold flex text-xl 
                bg-gradient-to-br from-[#dc9612] via-[#f5e9b8] to-[#fbbf03] hover:to-[#dc9612] hover:via-[#ede6cd] hover:from-[#fbbf03] text-black py-1 px-1 2xl:pr-4  rounded-full  ">
                <span className="w-8 h-8 bg-white rounded-full justify-center items-center flex ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-auto text-red-700">
                    <path
                      fillRule="evenodd"
                      d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>

                <span className="2xl:ml-3 justify-center items-center hidden 2xl:flex ">
                  (055)-4233324
                </span>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 overflow-hidden z-50"
          onClose={setOpen}>
          <div className="absolute inset-0 overflow-hidden">
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0">
              <Dialog.Overlay className="absolute inset-0 bg-amber-700 bg-opacity-75 transition-opacity" />
            </Transition.Child>
            <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full">
                <div className="relative w-screen max-w-md">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0">
                    <div className="absolute top-0 left-0 -ml-8 pr-2 flex sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        className="rounded-md text-gray-300 hover:text-white focus:outline-none"
                        onClick={() => setOpen(false)}>
                        <span className="sr-only">Close panel</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="h-full flex flex-col py-3 bg-white shadow-xl overflow-y-scroll">
                    <div className="px-4 sm:px-3 mx-auto">
                      <Dialog.Title className="text-2xl font-bold text-gray-900">
                        <Image
                          src="/images/spica-logo.png"
                          alt="Spica International School"
                          className="backHome sm:w-40 w-32 cursor-pointer"
                          width={220}
                          height={100}
                          title="Spica International School"
                        />
                      </Dialog.Title>
                    </div>
                    <div className="mt-0 relative flex-1 px-4 sm:px-4">
                      {/* ////////////////////// */}

                      <ul className="1top-links items-center divide-y uppercase divide-slate-400 text-slate-700 divide-opacity-70 text-base  font-bold   whitespace-nowrap">
                        <li className="py-3">
                          <Link
                            href="/"
                            onClick={handleToggle}
                            className="hover:text-[#01b8ee] py-2">
                            Home
                          </Link>{' '}
                        </li>

                        {/* <li className="py-3">
                          ABOUT US
                           <Link  onClick={handleToggle} href="#" title="Director's Message" className="block mt-2 ml-4 text-blue-500">
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
                          </svg>Director's Message
                           </Link>
                             <Link  onClick={handleToggle} href="#" title="Our Team" className="block mt-2 ml-4 text-blue-500">
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
                          </svg>Our Team
                             </Link>
                             <Link  onClick={handleToggle} href="#" title="Our Philosphy" className="block mt-2 ml-4 text-blue-500">
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
                              </svg>Our Philosphy
                            </Link>
                             <Link  onClick={handleToggle} href="#" title="Our Mission and Vision" className="block mt-2 ml-4 text-blue-500">
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
                           Our Mission and Vision
                            </Link>
                           <Link  onClick={handleToggle} href="#" title="Our Goals" className="block mt-2 ml-4 text-blue-500">
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
                            </svg>Our Goals
                          </Link>
                          <Link  onClick={handleToggle} href="#" title="Our Campus" className="block mt-2 ml-4 text-blue-500">
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
                              </svg>Our Campus
                              </Link>
                       
                        
                        </li> */}

                        <li>
                          <Link
                            href="/about"
                            className={
                              currentRoute.includes('about')
                                ? 'text-[#e88081] px-3'
                                : 'hover:text-[#e88081] px-3'
                            }>
                            About Us
                          </Link>
                        </li>
                        <li className="py-3 productslink">
                          <Link
                            href="/gallery"
                            onClick={handleToggle}
                            className={
                              currentRoute === '/gallery'
                                ? 'text-[#01b8ee] '
                                : 'hover:text-[#01b8ee]'
                            }>
                            GALLERY
                          </Link>
                        </li>
                        <li className="py-3 productslink">
                          <Link
                            href="#"
                            onClick={handleToggle}
                            className={
                              currentRoute === '/products'
                                ? 'text-[#01b8ee] '
                                : 'hover:text-[#01b8ee]'
                            }>
                            CAREER
                          </Link>
                        </li>

                        <li className="py-3 productslink">
                          <Link
                            href="/blog"
                            onClick={handleToggle}
                            className={
                              currentRoute === currentRoute.includes('/blog')
                                ? 'text-[#01b8ee] '
                                : 'hover:text-[#01b8ee]'
                            }>
                            Blog
                          </Link>
                        </li>

                        <li className="py-3">
                          <Link
                            href="#"
                            onClick={handleToggle}
                            className={
                              currentRoute === '/solar-calculator'
                                ? 'text-[#01b8ee]'
                                : 'hover:text-[#01b8ee]'
                            }>
                            FEE VOUCHER
                          </Link>
                        </li>

                        <li className="py-3">
                          <Link
                            href="#"
                            onClick={handleToggle}
                            className={
                              currentRoute === '/contact-us'
                                ? 'text-[#01b8ee]'
                                : 'hover:text-[#01b8ee]'
                            }>
                            CONTACT US
                          </Link>
                        </li>
                      </ul>

                      <div className="mt-2 flex justify-center items-center">
                        <div>
                          <div>
                            {' '}
                            <a
                              href="tel:+92554223338"
                              title="Call"
                              className="tooltip font-bold text-xl mt-5 block hover:text-red-600">
                              {' '}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-5 h-5 inline mr-0 -mt-1">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                                />
                              </svg>
                              (055)-4223338
                            </a>
                          </div>

                          <div className="gap-x-2  panel-social relative top-0 items-center justify-center">
                            <a
                              href="https://wa.me/+923281215000"
                              title="WhatsApp Spica International"
                              className="tooltip group fill-white bg-green-500 border-black">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="25"
                                className="w-5 h-auto fill-white"
                                viewBox="0 0 25 25"
                                fill="none">
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M12.7272 24.3561C10.5753 24.3561 8.55361 23.8061 6.79472 22.8408L0 25L2.215 18.4661C1.09778 16.6308 0.454167 14.4786 0.454167 12.1781C0.454167 5.45222 5.94889 0 12.7275 0C19.5053 0 25 5.45222 25 12.1781C25 18.9039 19.5056 24.3561 12.7272 24.3561ZM12.7272 1.93944C7.03722 1.93944 2.40889 6.5325 2.40889 12.1781C2.40889 14.4183 3.13917 16.4931 4.37417 18.1811L3.08528 21.9833L7.05028 20.7231C8.67972 21.7928 10.6314 22.4167 12.7272 22.4167C18.4164 22.4167 23.0456 17.8239 23.0456 12.1783C23.0456 6.53278 18.4164 1.93944 12.7272 1.93944ZM18.9244 14.9828C18.8489 14.8586 18.6483 14.7836 18.3481 14.6344C18.0469 14.4853 16.5675 13.7628 16.2922 13.6636C16.0161 13.5642 15.8153 13.5139 15.615 13.8128C15.4147 14.1117 14.8381 14.7836 14.6622 14.9828C14.4867 15.1822 14.3114 15.2072 14.0106 15.0578C13.71 14.9086 12.7406 14.5933 11.5911 13.5764C10.6969 12.7853 10.0931 11.8086 9.91778 11.5094C9.74222 11.2108 9.89917 11.0494 10.0497 10.9008C10.185 10.7669 10.3506 10.5522 10.5011 10.3781C10.6517 10.2036 10.7017 10.0794 10.8017 9.88C10.9022 9.68083 10.8519 9.50667 10.7767 9.35694C10.7014 9.20778 10.0994 7.73889 9.84889 7.14111C9.59833 6.54389 9.34806 6.64333 9.17222 6.64333C8.99667 6.64333 8.79611 6.61833 8.59556 6.61833C8.395 6.61833 8.06889 6.69306 7.79306 6.99167C7.5175 7.29056 6.74056 8.01278 6.74056 9.48139C6.74056 10.9503 7.81806 12.3694 7.96889 12.5683C8.11917 12.7672 10.0494 15.8794 13.1075 17.0747C16.1667 18.2697 16.1667 17.8711 16.7183 17.8214C17.2692 17.7717 18.4975 17.0994 18.7489 16.4025C18.9992 15.705 18.9992 15.1072 18.9244 14.9828Z"></path>
                              </svg>
                            </a>

                            <a
                              href="spicainternationalschool@gmail.com"
                              title="Email"
                              className="emailit tooltip group fill-white bg-black border-black">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-5 h-auto fill-white">
                                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                              </svg>
                            </a>

                            <a
                              href="https://www.facebook.com/profile.php?id=100091807777245"
                              title="Spica International"
                              className="facebook tooltip group fill-white bg-[#4267B2] border-[#4267B2]">
                              <svg
                                className="w-6 h-auto fill-white"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24">
                                {' '}
                                <path d="M16.403,9H14V7c0-1.032,0.084-1.682,1.563-1.682h0.868c0.552,0,1-0.448,1-1V3.064c0-0.523-0.401-0.97-0.923-1.005 C15.904,2.018,15.299,1.999,14.693,2C11.98,2,10,3.657,10,6.699V9H8c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1l2-0.001V21 c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1v-8.003l2.174-0.001c0.508,0,0.935-0.381,0.993-0.886l0.229-1.996 C17.465,9.521,17.001,9,16.403,9z" />
                              </svg>
                            </a>

                            <a
                              href="#"
                              title="Spica International"
                              className="instagram tooltip group bg-[#405DE6] border-[#405DE6]">
                              <svg
                                xmlns="#"
                                className="w-6 h-auto fill-white"
                                viewBox="0 0 30 30">
                                {' '}
                                <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z" />
                              </svg>
                            </a>

                            <a
                              href="#"
                              title="Spica International"
                              className="youtube group tooltip bg-[#FF0000] border-[#FF0000]">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-auto fill-white"
                                viewBox="0 0 50 50">
                                <path d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z" />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* ////////////////////////////////// */}
                    </div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
