import { Modal } from "../components/modal";
import React, { useEffect, useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { motion } from "framer-motion";
import { PROJECT_DATA } from "../static/constants";
import Link from "next/link";

export default function Home() {
  const [show, setShow] = useState("");

  return (
    <>
      <Modal show={show.toLowerCase()} setShow={setShow} />
      <div className="max-w-[1800px] px-5 md:px-5 w-full mx-auto py-8 h-full relative min-h-screen flex flex-col-reverse md:flex-col rounded-md">
        <Link href="resume"> Resume</Link>
        <Footer />
        <Header setShow={setShow} />
      </div>
    </>
  );
}
