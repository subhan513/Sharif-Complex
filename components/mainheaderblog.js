import Image from 'next/image';
import Link from 'next/link';

export default function MainHeaderBlog ({pageHeading,pageImg}) {
    return (
      <>
        <header className="innerHeaderb bg-center" style= {{backgroundImage:"url('../images/"+pageImg+"')"}} >        
        <span></span>
        </header>
         
      </>
    );
    }