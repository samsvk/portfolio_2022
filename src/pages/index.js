import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ITEM } from "../static/constants";
import SmoothScroll from "../components/hocs/SmoothScroll";

import Intro from "../components/intro";
import Footer from "../components/footer";

export default function Home() {
  const [go, setGo] = useState(false);

  useEffect(() => {
    let x = setTimeout(() => {
      setGo(true);
    }, 1500);
    return () => clearTimeout(x);
  }, []);

  return (
    <SmoothScroll>
      <Intro />
      <div className="ind">
        <header className="header">
          <div>
            <AnimatePresence>
              {go && (
                <>
                  <span className="line">
                    <motion.span
                      variants={ITEM}
                      initial="hidden"
                      animate="visible"
                      custom={{ i: 1, a: 72 }}
                      className="h"
                    >
                      Hello I'm Sam
                      <span className="slash"> / </span>
                      Creative Developer
                      <span className="slash"> / </span>
                      Born
                    </motion.span>
                  </span>
                  <span className="line">
                    <motion.span
                      variants={ITEM}
                      initial="hidden"
                      animate="visible"
                      custom={{ i: 2, a: 72 }}
                      className="h"
                    >
                      in the UK{" "}
                      <span className="slash"> / </span> Raised
                      in Ireland
                      <span className="slash"> / </span>
                      Available for
                    </motion.span>
                  </span>
                  <span className="line">
                    <motion.span
                      variants={ITEM}
                      initial="hidden"
                      animate="visible"
                      custom={{ i: 3, a: 72 }}
                      className="h"
                    >
                      Freelance @ August 2022
                      <span className="slash"> / </span>
                      From tiny
                    </motion.span>
                  </span>
                  <span className="line">
                    <motion.span
                      variants={ITEM}
                      initial="hidden"
                      animate="visible"
                      custom={{ i: 4, a: 72 }}
                      className="h"
                    >
                      experiments to large scale consumer
                    </motion.span>
                  </span>
                  <span className="line">
                    <motion.span
                      variants={ITEM}
                      initial="hidden"
                      animate="visible"
                      custom={{ i: 4, a: 72 }}
                      className="h"
                    >
                      products; I've made it.
                    </motion.span>
                  </span>
                </>
              )}
            </AnimatePresence>
          </div>
        </header>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
