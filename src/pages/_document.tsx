import { Html, Head, Main, NextScript } from "next/document";


export default function Document() {
  return (
    <Html lang='en' className='bg-white text-slate-900 antialiased'>
      <Head />
      <body className='min-h-screen bg-slate-50 dark:bg-slate-900 antialiased font-sans'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

