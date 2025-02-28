import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Nav from './nav';
import Footer from './footer';
import MainHeader from './mainheader';

export default function Layout({ children, className }) {
  return (
    <div className={`w-full mx-auto ${className}`}>
      <Head></Head>
      <Nav />
      <div className="w-full   mx-auto">{children}</div>
      <Footer />
    </div>
  );
}
