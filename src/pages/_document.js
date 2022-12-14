import { Html, Head, Main, NextScript } from "next/document";
import { useEffect, useState } from "react";
export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:wght@200;300;400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="selection:bg-transparent">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
