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
                      Hello{"\u00A0"}
                    </motion.span>{" "}
                  </span>
                  <span className="line">
                    <motion.span
                      variants={ITEM}
                      initial="hidden"
                      animate="visible"
                      custom={{ i: 2, a: 70 }}
                      className="h"
                    >
                      I'm{"\u00A0"}
                    </motion.span>{" "}
                  </span>
                  <span className="line">
                    <motion.span
                      variants={ITEM}
                      initial="hidden"
                      animate="visible"
                      custom={{ i: 3, a: 70 }}
                      className="h"
                    >
                      Sam
                    </motion.span>{" "}
                  </span>
                  <span className="line">{"\u00A0"}</span>
                  <span className="line">
                    <motion.span
                      variants={ITEM}
                      initial="hidden"
                      animate="visible"
                      custom={{ i: 4, a: 70 }}
                      className="h"
                    >
                      23.
                    </motion.span>{" "}
                  </span>
                  <span className="line">
                    <motion.span
                      variants={ITEM}
                      initial="hidden"
                      animate="visible"
                      custom={{ i: 5, a: 70 }}
                      className="h"
                    >
                      02.
                    </motion.span>{" "}
                  </span>
                  <span className="line">
                    <motion.span
                      variants={ITEM}
                      initial="hidden"
                      animate="visible"
                      custom={{ i: 6, a: 70 }}
                      className="h"
                    >
                      1999
                    </motion.span>{" "}
                  </span>
                  <span className="line">
                    <motion.span
                      variants={ITEM}
                      initial="hidden"
                      animate="visible"
                      custom={{ i: 6, a: 70 }}
                      className="h"
                    >
                      (23)
                    </motion.span>{" "}
                  </span>
                  <span className="line">{"\u00A0"}</span>
                  <span className="line">
                    <motion.span
                      variants={ITEM}
                      initial="hidden"
                      animate="visible"
                      custom={{ i: 7, a: 70 }}
                      className="h"
                    >
                      Creative{"\u00A0"}
                    </motion.span>{" "}
                  </span>
                  <span className="line">
                    <motion.span
                      variants={ITEM}
                      initial="hidden"
                      animate="visible"
                      custom={{ i: 8, a: 70 }}
                      className="h"
                    >
                      Developer{"\u00A0"}
                    </motion.span>{" "}
                  </span>
                  <span className="line">
                    <motion.span
                      variants={ITEM}
                      initial="hidden"
                      animate="visible"
                      custom={{ i: 9, a: 70 }}
                      className="h"
                    >
                      in{"\u00A0"}
                    </motion.span>{" "}
                  </span>
                  <span className="line">
                    <motion.span
                      variants={ITEM}
                      initial="hidden"
                      animate="visible"
                      custom={{ i: 10, a: 70 }}
                      className="h"
                    >
                      the{"\u00A0"}
                    </motion.span>{" "}
                  </span>
                  <span className="line">
                    <motion.span
                      variants={ITEM}
                      initial="hidden"
                      animate="visible"
                      custom={{ i: 11, a: 70 }}
                      className="h"
                    >
                      UK
                    </motion.span>{" "}
                  </span>
                  <span className="line">{"\u00A0"}</span>
                  <span className="line">
                    <motion.span
                      variants={ITEM}
                      initial="hidden"
                      animate="visible"
                      custom={{ i: 12, a: 70 }}
                      className="h"
                    >
                      Available{"\u00A0"}
                    </motion.span>{" "}
                  </span>
                  <span className="line">
                    <motion.span
                      variants={ITEM}
                      initial="hidden"
                      animate="visible"
                      custom={{ i: 13, a: 70 }}
                      className="h"
                    >
                      for{"\u00A0"}
                    </motion.span>{" "}
                  </span>
                  <span className="line">
                    <motion.span
                      variants={ITEM}
                      initial="hidden"
                      animate="visible"
                      custom={{ i: 14, a: 70 }}
                      className="h"
                    >
                      Freelance{"\u00A0"}
                    </motion.span>{" "}
                  </span>
                  <span className="line">
                    <motion.span
                      variants={ITEM}
                      initial="hidden"
                      animate="visible"
                      custom={{ i: 14, a: 70 }}
                      className="h"
                    >
                      {"\u00A0"}
                    </motion.span>{" "}
                  </span>
                  <span className="line">
                    <motion.span
                      variants={ITEM}
                      initial="hidden"
                      animate="visible"
                      custom={{ i: 15, a: 70 }}
                      className="h"
                    >
                      (@Oct 2022)
                    </motion.span>{" "}
                  </span>
                  <span className="line">{"\u00A0"}</span>
                  <span className="line">
                    <motion.span
                      variants={ITEM}
                      initial="hidden"
                      animate="visible"
                      custom={{ i: 16, a: 70 }}
                      className="h"
                    >
                      From{"\u00A0"}
                    </motion.span>{" "}
                  </span>
                  <span className="line">
                    <motion.span
                      variants={ITEM}
                      initial="hidden"
                      animate="visible"
                      custom={{ i: 17, a: 70 }}
                      className="h"
                    >
                      tiny{"\u00A0"}
                    </motion.span>{" "}
                  </span>
                  <span className="line">
                    <motion.span
                      variants={ITEM}
                      initial="hidden"
                      animate="visible"
                      custom={{ i: 18, a: 70 }}
                      className="h"
                    >
                      experiments{"\u00A0"}
                    </motion.span>{" "}
                  </span>
                  <span className="line">
                    <motion.span
                      variants={ITEM}
                      initial="hidden"
                      animate="visible"
                      custom={{ i: 19, a: 70 }}
                      className="h"
                    >
                      to{"\u00A0"}
                    </motion.span>{" "}
                  </span>
                  <span className="line">
                    <motion.span
                      variants={ITEM}
                      initial="hidden"
                      animate="visible"
                      custom={{ i: 19, a: 70 }}
                      className="h"
                    >
                      large{"\u00A0"}
                    </motion.span>{" "}
                  </span>
                  <span className="line">
                    <motion.span
                      variants={ITEM}
                      initial="hidden"
                      animate="visible"
                      custom={{ i: 20, a: 70 }}
                      className="h"
                    >
                      scale{"\u00A0"}
                    </motion.span>{" "}
                  </span>
                  <span className="line">
                    <motion.span
                      variants={ITEM}
                      initial="hidden"
                      animate="visible"
                      custom={{ i: 21, a: 70 }}
                      className="h"
                    >
                      consumer{"\u00A0"}
                    </motion.span>{" "}
                  </span>
                  <span className="line">
                    <motion.span
                      variants={ITEM}
                      initial="hidden"
                      animate="visible"
                      custom={{ i: 22, a: 70 }}
                      className="h"
                    >
                      products;{"\u00A0"}
                    </motion.span>{" "}
                  </span>
                  <span className="line">
                    <motion.span
                      variants={ITEM}
                      initial="hidden"
                      animate="visible"
                      custom={{ i: 23, a: 70 }}
                      className="h"
                    >
                      I've{"\u00A0"}
                    </motion.span>{" "}
                  </span>
                  <span className="line">
                    <motion.span
                      variants={ITEM}
                      initial="hidden"
                      animate="visible"
                      custom={{ i: 24, a: 70 }}
                      className="h"
                    >
                      made{"\u00A0"}
                    </motion.span>{" "}
                  </span>
                  <span className="line">
                    <motion.span
                      variants={ITEM}
                      initial="hidden"
                      animate="visible"
                      custom={{ i: 25, a: 70 }}
                      className="h"
                    >
                      it.{"\u00A0"}
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
