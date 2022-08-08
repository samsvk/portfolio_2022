import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ITEM, SOCIAL_DATA, SLASH } from "../static/constants";
import SmoothScroll from "../components/hocs/SmoothScroll";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Intro from "../components/intro";

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
      {/* <Intro /> */}
      <div className="max-w-[1800px] w-full mx-auto py-12  h-full relative">
        {/* <Navbar /> */}

        <Footer />
        <header className="text-[35px] lg:text-[66px] text-main-default tracking-tighter leading-[0.9] align-text-top lg:max-w-[87%] max-w-[100%]">
          <span className="relative inline-block overflow-hidden text-start">
            <motion.span
              variants={ITEM}
              initial="hidden"
              animate={go && "visible"}
              custom={{ i: 5, a: "200%", d: true }}
              className="inline-flex max-w-full align-text-top text-start will-change-transform"
            >
              A{"\u00A0"}
            </motion.span>{" "}
          </span>
          <span className="relative inline-block overflow-hidden text-start">
            <motion.span
              variants={ITEM}
              initial="hidden"
              animate={go && "visible"}
              custom={{ i: 6, a: "200%", d: true }}
              className="inline-flex max-w-full align-text-top text-start will-change-transform"
            >
              digital{"\u00A0"}
            </motion.span>{" "}
          </span>
          <span className="relative inline-block overflow-hidden text-start">
            <motion.span
              variants={ITEM}
              initial="hidden"
              animate={go && "visible"}
              custom={{ i: 7, a: "200%", d: true }}
              className="inline-flex max-w-full align-text-top text-start will-change-transform"
            >
              designer{"\u00A0"}
            </motion.span>{" "}
          </span>
          <span className="relative inline-block overflow-hidden text-start">
            <motion.span
              variants={ITEM}
              initial="hidden"
              animate={go && "visible"}
              custom={{ i: 8, a: "200%", d: true }}
              className="inline-flex max-w-full align-text-top text-start will-change-transform"
            >
              &{"\u00A0"}
            </motion.span>{" "}
          </span>
          <span className="relative inline-block overflow-hidden text-start">
            <motion.span
              variants={ITEM}
              initial="hidden"
              animate={go && "visible"}
              custom={{ i: 9, a: "200%", d: true }}
              className="inline-flex max-w-full align-text-top text-start will-change-transform"
            >
              developer{"\u00A0"}
            </motion.span>{" "}
          </span>
          <span className="relative inline-block overflow-hidden text-start">
            <motion.span
              variants={ITEM}
              initial="hidden"
              animate={go && "visible"}
              custom={{ i: 10, a: "200%", d: true }}
              className="inline-flex max-w-full align-text-top text-start will-change-transform"
            >
              based{"\u00A0"}
            </motion.span>{" "}
          </span>
          <span className="relative inline-block overflow-hidden text-start">
            <motion.span
              variants={ITEM}
              initial="hidden"
              animate={go && "visible"}
              custom={{ i: 11, a: "200%", d: true }}
              className="inline-flex max-w-full align-text-top text-start will-change-transform"
            >
              in{"\u00A0"}
            </motion.span>{" "}
          </span>
          <span className="relative inline-block overflow-hidden text-start">
            <motion.span
              variants={ITEM}
              initial="hidden"
              animate={go && "visible"}
              custom={{ i: 12, a: "200%", d: true }}
              className="inline-flex max-w-full align-text-top text-start will-change-transform"
            >
              Edinburgh.{"\u00A0"}
            </motion.span>{" "}
          </span>
          <span className="relative inline-block overflow-hidden text-start">
            <motion.span
              variants={ITEM}
              initial="hidden"
              animate={go && "visible"}
              custom={{ i: 13, a: "200%", d: true }}
              className="inline-flex max-w-full align-text-top text-start will-change-transform"
            >
              I{"\u00A0"}
            </motion.span>{" "}
          </span>
          <span className="relative inline-block overflow-hidden text-start">
            <motion.span
              variants={ITEM}
              initial="hidden"
              animate={go && "visible"}
              custom={{ i: 14, a: "200%", d: true }}
              className="inline-flex max-w-full align-text-top text-start will-change-transform"
            >
              love{"\u00A0"}
            </motion.span>{" "}
          </span>
          <span className="relative inline-block overflow-hidden text-start">
            <motion.span
              variants={ITEM}
              initial="hidden"
              animate={go && "visible"}
              custom={{ i: 15, a: "200%", d: true }}
              className="inline-flex max-w-full align-text-top text-start will-change-transform"
            >
              creating{"\u00A0"}
            </motion.span>{" "}
          </span>
          <span className="relative inline-block overflow-hidden text-start">
            <motion.span
              variants={ITEM}
              initial="hidden"
              animate={go && "visible"}
              custom={{ i: 16, a: "200%", d: true }}
              className="inline-flex max-w-full align-text-top text-start will-change-transform"
            >
              meaningful{"\u00A0"}
            </motion.span>{" "}
          </span>
          <span className="relative inline-block overflow-hidden text-start">
            <motion.span
              variants={ITEM}
              initial="hidden"
              animate={go && "visible"}
              custom={{ i: 17, a: "200%", d: true }}
              className="inline-flex max-w-full align-text-top text-start will-change-transform"
            >
              visual{"\u00A0"}
            </motion.span>{" "}
          </span>
          <span className="relative inline-block overflow-hidden text-start">
            <motion.span
              variants={ITEM}
              initial="hidden"
              animate={go && "visible"}
              custom={{ i: 18, a: "200%", d: true }}
              className="inline-flex max-w-full align-text-top text-start will-change-transform"
            >
              identities{"\u00A0"}
            </motion.span>{" "}
          </span>
          <span className="relative inline-block overflow-hidden text-start">
            <motion.span
              variants={ITEM}
              initial="hidden"
              animate={go && "visible"}
              custom={{ i: 19, a: "200%", d: true }}
              className="inline-flex max-w-full align-text-top text-start will-change-transform"
            >
              and{"\u00A0"}
            </motion.span>{" "}
          </span>
          <span className="relative inline-block overflow-hidden text-start">
            <motion.span
              variants={ITEM}
              initial="hidden"
              animate={go && "visible"}
              custom={{ i: 20, a: "200%", d: true }}
              className="inline-flex max-w-full align-text-top text-start will-change-transform"
            >
              timeless{"\u00A0"}
            </motion.span>{" "}
          </span>
          <span className="relative inline-block overflow-hidden text-start">
            <motion.span
              variants={ITEM}
              initial="hidden"
              animate={go && "visible"}
              custom={{ i: 21, a: "200%", d: true }}
              className="inline-flex max-w-full align-text-top text-start will-change-transform"
            >
              scaleable{"\u00A0"}
            </motion.span>{" "}
          </span>
          <span className="relative inline-block overflow-hidden text-start">
            <motion.span
              variants={ITEM}
              initial="hidden"
              animate={go && "visible"}
              custom={{ i: 22, a: "200%", d: true }}
              className="inline-flex max-w-full align-text-top text-start will-change-transform"
            >
              solutions.{"\u00A0"}
            </motion.span>{" "}
          </span>
          <div className="mt-10">
            <span className="relative inline-block overflow-hidden text-start">
              <motion.span
                variants={ITEM}
                initial="hidden"
                animate={go && "visible"}
                custom={{ i: 25, a: "200%", d: true }}
                className="inline-flex max-w-full align-text-top text-start will-change-transform"
              >
                Projects (4),
              </motion.span>{" "}
            </span>
            <span className="relative inline-block overflow-hidden text-start">
              <motion.span
                variants={ITEM}
                initial="hidden"
                animate={go && "visible"}
                custom={{ i: 25, a: "200%", d: true }}
                className="inline-flex max-w-full align-text-top text-start will-change-transform"
              >
                Featured (2),
              </motion.span>{" "}
            </span>
            <span className="relative inline-block overflow-hidden text-start">
              <motion.span
                variants={ITEM}
                initial="hidden"
                animate={go && "visible"}
                custom={{ i: 25, a: "200%", d: true }}
                className="inline-flex max-w-full align-text-top text-start will-change-transform"
              >
                Awards (1)
              </motion.span>{" "}
            </span>
          </div>
        </header>
      </div>
    </SmoothScroll>
  );
}
