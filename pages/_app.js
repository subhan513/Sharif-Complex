import Layout from '../components/layout';
import '../styles/globals.css';

import { Inter } from '@next/font/google';
import { Roboto_Condensed } from '@next/font/google';
const inter = Inter({ subsets: ['latin'] });
const robotos = Roboto_Condensed({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
});
function MyApp({ Component, pageProps }) {
  return (
    <Layout className={robotos.className}>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
        h1,
        h2,
        h3,
        nav {
          font-family: ${robotos.style.fontFamily};
        }
      `}</style>

      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
