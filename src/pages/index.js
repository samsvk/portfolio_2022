import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ITEM } from "../static/constants";
import SmoothScroll from "../components/hocs/SmoothScroll";
import { BiArrowBack } from "react-icons/bi";
import Intro from "../components/intro";
import Footer from "../components/footer";

export default function Home() {
  const [go, setGo] = useState(false);

  useEffect(() => {
    let x = setTimeout(() => {
      setGo(true);
    }, 700);
    return () => clearTimeout(x);
  }, []);

  return (
    <SmoothScroll>
      <Intro />
      <div className="wrap">
        <div className="ind">
          <header className="header">
            <AnimatePresence>
              {go && (
                <>
                  <span className="line">
                    <motion.span
                      variants={ITEM}
                      initial="hidden"
                      animate="visible"
                      custom={{ i: 1, a: 75 }}
                      className="h"
                    >
                      Hello I'm Sam
                      <span className="slash"> / </span>
                      23.02.1999 (23){" "}
                      <span className="slash"> / </span>Creative
                    </motion.span>
                  </span>
                  <span className="line">
                    <motion.span
                      variants={ITEM}
                      initial="hidden"
                      animate="visible"
                      custom={{ i: 2, a: 75 }}
                      className="h"
                    >
                      Developer in the UK{" "}
                      <span className="slash"> / </span> Raised
                      in Ireland{" "}
                      <span className="slash"> / </span>
                    </motion.span>
                  </span>

                  <span className="line">
                    <motion.span
                      variants={ITEM}
                      initial="hidden"
                      animate="visible"
                      custom={{ i: 3, a: 75 }}
                      className="h"
                    >
                      Available for Freelance @ (Oct 2022)
                    </motion.span>
                  </span>
                  <span className="line">
                    <motion.span
                      variants={ITEM}
                      initial="hidden"
                      animate="visible"
                      custom={{ i: 4, a: 75 }}
                      className="h"
                    >
                      <span className="slash">
                        {" "}
                        <BiArrowBack
                          style={{
                            verticalAlign: "middle",
                            transform: "rotate(180deg)",
                          }}
                        />{" "}
                      </span>{" "}
                      From tiny experiments to large scale
                    </motion.span>
                  </span>
                  <span className="line">
                    <motion.span
                      variants={ITEM}
                      initial="hidden"
                      animate="visible"
                      custom={{ i: 4, a: 75 }}
                      className="h"
                    >
                      consumer products; I've made it.
                    </motion.span>
                  </span>
                </>
              )}
            </AnimatePresence>
          </header>

          <Footer />
        </div>
      </div>
    </SmoothScroll>
  );
}
