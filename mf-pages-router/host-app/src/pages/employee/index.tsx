import dynamic from "next/dynamic";

// const RemoteButton = dynamic(() => import("product/Product"));


// const Employee = () => {
//     return <>
//     <h1>Hello employee</h1>
//     <RemoteButton/>
//     </>

// }

// export default Employee

import App from 'next/app';
import React, { useState, useEffect, Suspense, lazy, } from 'react';

// Lazy-load the Nav component. This will not be executed server-side.
const Product = typeof window !== 'undefined' ? lazy(() => import('product/Product')) : null;



function MyApp({ Component, pageProps }:{ Component:any, pageProps:any }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This effect runs only once on mount, indicating that we are now client-side.
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
        Product && <Suspense fallback={<div>Loading navigation...</div>}>
        <Product />
      </Suspense>
      )}
      <Component {...pageProps} />
    </>
  );
}

MyApp.getInitialProps = async (ctx:any) => {
  const appProps = await App.getInitialProps(ctx);
  return { ...appProps };
};

export default MyApp;
