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
    }, 1000);
    return () => {
      clearTimeout(x);
    };
  }, []);

  const text = `Hello I'm Sam 23.02.1999(23) Creative Developer in the UK Available for Freelance  (@Oct 2022) From tiny experiments to large scale consumer products; I've made it. Hello I'm Sam 23.02.1999(23) Creative Developer in the UK Available for Freelance  (@Oct 2022) From tiny experiments to large scale consumer products; I've made it. `;
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
                      custom={{ i: 1, a: 70 }}
                      className="h"
                    >
                      I'm Sam (23),{"\u00A0"}
                    </motion.span>{" "}
                  </span>
                  <span className="line">
                    <motion.span
                      variants={ITEM}
                      initial="hidden"
                      animate="visible"
                      custom={{ i: 4, a: 70 }}
                      className="h"
                    >
                      a digital developer,
                    </motion.span>{" "}
                  </span>
                  <span className="line">
                    <motion.span
                      variants={ITEM}
                      initial="hidden"
                      animate="visible"
                      custom={{ i: 4, a: 70 }}
                      className="h"
                    >
                      based in Europe
                    </motion.span>{" "}
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
