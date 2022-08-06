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

  return (
    <SmoothScroll>
      <Intro />
      <div className="wrap">
        <div className="ind">
          <header className="header">
            <AnimatePresence>
              <>
                <span className="line">
                  <motion.span
                    variants={ITEM}
                    initial={"hidden"}
                    animate={go && "visible"}
                    custom={{ i: 1, a: "200%", d: true }}
                    className="h"
                  >
                    I'm Samuel (23),{"\u00A0"}
                  </motion.span>{" "}
                </span>
                <span className="line">
                  <motion.span
                    variants={ITEM}
                    initial="hidden"
                    animate={go && "visible"}
                    custom={{ i: 2, a: "200%", d: true }}
                    className="h"
                  >
                    a digital developer,
                  </motion.span>{" "}
                </span>
                <span className="line">
                  <motion.span
                    variants={ITEM}
                    initial="hidden"
                    animate={go && "visible"}
                    custom={{ i: 3, a: "200%", d: true }}
                    className="h"
                  >
                    based in Edinburgh.
                  </motion.span>{" "}
                </span>
              </>
            </AnimatePresence>
          </header>
          <Footer />
        </div>
      </div>
    </SmoothScroll>
  );
}
