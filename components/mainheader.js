import Image from 'next/image';
import Link from 'next/link';

export default function MainHeader({ pageHeading, pageImg }) {
  return (
    <>
      <header
        className="innerHeader bg-center"
        style={{ backgroundImage: "url('../images/" + pageImg + "')" }}>
        <h1>{pageHeading}</h1>

        {/* <Link href="/products" title="Products" className="showbackbtn hidden text-white hover:text-black w-auto  mt-2 absolute -bottom-3 bg-blue-400 hover:bg-opacity-100 transition-all duration-300 bg-opacity-80 border border-white rounded-full px-4 text-sm py-1 z-20 "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 inline -mt-1 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
</svg> Products
</Link> */}
        <span></span>
        <i></i>
      </header>
    </>
  );
}
