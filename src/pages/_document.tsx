import Navbar from "@/components/Navbar";
import { Html, Head, Main, NextScript } from "next/document";


export default function Document() {
  return (
    <Html lang='en' className='antialiased'>
      <Head />
      <body className='min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-50 antialiased font-sans'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

