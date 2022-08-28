import { Modal } from "../components/modal";
import React, { useEffect, useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Head from "next/head";

export default function Home() {
  const [show, setShow] = useState("");

  return (
    <>
      <Head>
        <title>Samuel | Developer, Designer & Creator</title>
        <meta
          name="description"
          content="Samuel Campbell is a freelance developer building scalable web solutions. Focusing on serverless React / Next.js."
        />
      </Head>
      <Modal show={show.toLowerCase()} setShow={setShow} />
      <div className="max-w-[1800px] px-5 md:px-5 w-full mx-auto py-8 h-full relative min-h-screen flex flex-col rounded-md">
        <Footer />
        <Header setShow={setShow} />
      </div>
    </>
  );
}
