import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ITEM,
  SOCIAL_DATA,
  SLASH,
  PROJECT_DATA,
} from "../static/constants";
// import SmoothScroll from "../components/hocs/SmoothScroll";
import Footer from "../components/footer";
import Intro from "../components/intro";
import { BsArrowRight } from "react-icons/bs";

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
    <div className="max-w-[1800px] px-5 md:px-5 w-full mx-auto py-8 h-full relative min-h-screen flex flex-col-reverse lg:flex-col">
      <Footer />
      <header className="flex flex-col flex-start lg:justify-end h-full flex-1 text-[26px] md:text-[44px] lg:text-[60px] text-main-default tracking-tighter leading-[0.9] align-text-top lg:max-w-[85%] max-w-[100%] font-[300]">
        <div className="self-start justify-self-start lg:self-end lg:justify-self-end">
          <span className="relative inline-block overflow-hidden text-start">
            <motion.span
              variants={ITEM}
              initial="hidden"
              animate={go && "visible"}
              custom={{ i: 4, a: "150%", d: true }}
              className="inline-flex max-w-full align-text-top text-start will-change-transform"
            >
              Samuel{"\u00A0"}
            </motion.span>{" "}
          </span>
          <span className="relative inline-block overflow-hidden text-start">
            <motion.span
              variants={ITEM}
              initial="hidden"
              animate={go && "visible"}
              custom={{ i: 5, a: "150%", d: true }}
              className="inline-flex max-w-full align-text-top text-start will-change-transform"
            >
              (23){"\u00A0"}
            </motion.span>{" "}
          </span>
          <span className="relative inline-block overflow-hidden text-start">
            <motion.span
              variants={ITEM}
              initial="hidden"
              animate={go && "visible"}
              custom={{ i: 6, a: "150%", d: true }}
              className="inline-flex max-w-full align-text-top text-start will-change-transform"
            >
              is{"\u00A0"}
            </motion.span>{" "}
          </span>
          <span className="relative inline-block overflow-hidden text-start">
            <motion.span
              variants={ITEM}
              initial="hidden"
              animate={go && "visible"}
              custom={{ i: 7, a: "150%", d: true }}
              className="inline-flex max-w-full align-text-top text-start will-change-transform"
            >
              a{"\u00A0"}
            </motion.span>{" "}
          </span>
          <span className="relative inline-block overflow-hidden text-start">
            <motion.span
              variants={ITEM}
              initial="hidden"
              animate={go && "visible"}
              custom={{ i: 8, a: "150%", d: true }}
              className="inline-flex max-w-full align-text-top text-start will-change-transform"
            >
              freelance{"\u00A0"}
            </motion.span>{" "}
          </span>
          <span className="relative inline-block overflow-hidden text-start">
            <motion.span
              variants={ITEM}
              initial="hidden"
              animate={go && "visible"}
              custom={{ i: 9, a: "150%", d: true }}
              className="inline-flex max-w-full align-text-top text-start will-change-transform"
            >
              front-end{"\u00A0"}
            </motion.span>{" "}
          </span>
          <span className="relative inline-block overflow-hidden text-start">
            <motion.span
              variants={ITEM}
              initial="hidden"
              animate={go && "visible"}
              custom={{ i: 10, a: "150%", d: true }}
              className="inline-flex max-w-full align-text-top text-start will-change-transform"
            >
              engineer{"\u00A0"}
            </motion.span>{" "}
          </span>
          <span className="relative inline-block overflow-hidden text-start">
            <motion.span
              variants={ITEM}
              initial="hidden"
              animate={go && "visible"}
              custom={{ i: 11, a: "150%", d: true }}
              className="inline-flex max-w-full align-text-top text-start will-change-transform"
            >
              with{"\u00A0"}
            </motion.span>{" "}
          </span>
          <span className="relative inline-block overflow-hidden text-start">
            <motion.span
              variants={ITEM}
              initial="hidden"
              animate={go && "visible"}
              custom={{ i: 12, a: "150%", d: true }}
              className="inline-flex max-w-full align-text-top text-start will-change-transform"
            >
              a{"\u00A0"}
            </motion.span>{" "}
          </span>
          <span className="relative inline-block overflow-hidden text-start">
            <motion.span
              variants={ITEM}
              initial="hidden"
              animate={go && "visible"}
              custom={{ i: 13, a: "150%", d: true }}
              className="inline-flex max-w-full align-text-top text-start will-change-transform"
            >
              strong{"\u00A0"}
            </motion.span>{" "}
          </span>
          <span className="relative inline-block overflow-hidden text-start">
            <motion.span
              variants={ITEM}
              initial="hidden"
              animate={go && "visible"}
              custom={{ i: 14, a: "150%", d: true }}
              className="inline-flex max-w-full align-text-top text-start will-change-transform"
            >
              focus{"\u00A0"}
            </motion.span>{" "}
          </span>
          <span className="relative inline-block overflow-hidden text-start">
            <motion.span
              variants={ITEM}
              initial="hidden"
              animate={go && "visible"}
              custom={{ i: 15, a: "150%", d: true }}
              className="inline-flex max-w-full align-text-top text-start will-change-transform"
            >
              on{"\u00A0"}
            </motion.span>{" "}
          </span>
          <span className="relative inline-block overflow-hidden text-start">
            <motion.span
              variants={ITEM}
              initial="hidden"
              animate={go && "visible"}
              custom={{ i: 16, a: "150%", d: true }}
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
              custom={{ i: 17, a: "150%", d: true }}
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
              custom={{ i: 18, a: "150%", d: true }}
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
              custom={{ i: 19, a: "150%", d: true }}
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
              custom={{ i: 20, a: "150%", d: true }}
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
              custom={{ i: 21, a: "150%", d: true }}
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
              custom={{ i: 22, a: "150%", d: true }}
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
              custom={{ i: 23, a: "150%", d: true }}
              className="inline-flex max-w-full align-text-top text-start will-change-transform"
            >
              solutions{"\u00A0"}
            </motion.span>{" "}
          </span>
          <span className="relative inline-block overflow-hidden text-start">
            <motion.span
              variants={ITEM}
              initial="hidden"
              animate={go && "visible"}
              custom={{ i: 24, a: "150%", d: true }}
              className="inline-flex max-w-full align-text-top text-start will-change-transform"
            >
              working{"\u00A0"}
            </motion.span>{" "}
          </span>
          <span className="relative inline-block overflow-hidden text-start">
            <motion.span
              variants={ITEM}
              initial="hidden"
              animate={go && "visible"}
              custom={{ i: 25, a: "150%", d: true }}
              className="inline-flex max-w-full align-text-top text-start will-change-transform"
            >
              remotely{"\u00A0"}
            </motion.span>{" "}
          </span>
          <span className="relative inline-block overflow-hidden text-start">
            <motion.span
              variants={ITEM}
              initial="hidden"
              animate={go && "visible"}
              custom={{ i: 26, a: "150%", d: true }}
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
              custom={{ i: 27, a: "150%", d: true }}
              className="inline-flex max-w-full align-text-top text-start will-change-transform"
            >
              Edinburgh.{"\u00A0"}
            </motion.span>{" "}
          </span>
          {/* <span className="relative inline-block overflow-hidden text-start">
            <motion.span
              variants={ITEM}
              initial="hidden"
              animate={go && "visible"}
              custom={{ i: 28, a: "150%", d: true }}
              className="inline-flex max-w-full align-text-top text-start will-change-transform"
            >
              Scotland.
            </motion.span>{" "}
          </span> */}
          {/* <span className="relative inline-block overflow-hidden text-start">
              <motion.span
                variants={ITEM}
                initial="hidden"
                animate={go && "visible"}
                custom={{ i: 29, a: "150%", d: true }}
                className="inline-flex max-w-full align-text-top text-start will-change-transform"
              >
                <BsArrowRight />
                {"\u00A0"}
              </motion.span>{" "}
            </span>
            <span className="relative inline-block overflow-hidden text-start">
              <motion.span
                variants={ITEM}
                initial="hidden"
                animate={go && "visible"}
                custom={{ i: 30, a: "150%", d: true }}
                className="inline-flex max-w-full align-text-top text-start will-change-transform"
              >
                <button
                  className="group float-left text-main-default tracking-tighter leading-[0.9] align-text-top overflow-hidden
                duration-500 max-w-max hover:cursor-pointer hover:opacity-25  text-[30px] md:text-[35px] lg:text-[60px]"
                >
                  <span className="">Explore my work</span>
                  <motion.span
                    initial={{ x: "-100%" }}
                    animate={{
                      x: "0",
                      transition: {
                        ease: [0.86, 0, 0.07, 1],
                        duration: 0.65,
                        delay: 1.3,
                      },
                    }}
                    className="h-[2px] w-full bg-main-default block mt-1 lg:mt-2 group-hover:cursor-pointer group-hover:w-0 first-letter:
                  group-hover:ease-[cubic-bezier(0.86, 0, 0.07, 1)] duration-[0.65s]
                  "
                  />
                </button>
              </motion.span>
            </span> */}
        </div>
        <div className="inline-flex gap-3">
          {PROJECT_DATA.map((p, i) => (
            <span
              className="relative inline-block overflow-hidden text-start"
              key={i}
            >
              <motion.span
                variants={ITEM}
                initial="hidden"
                animate={go && "visible"}
                custom={{ i: 33, a: "150%", d: true }}
                className="inline-flex max-w-full align-text-top text-start will-change-transform"
              >
                <button
                  className="group float-left mt-5 text-main-default tracking-tighter leading-[0.9] align-text-top overflow-hidden
                duration-300 max-w-max hover:cursor-pointer hover:opacity-25"
                >
                  <span className="inline-block align-text-top text-start">
                    {PROJECT_DATA[PROJECT_DATA.length - 1]
                      .name === p.name
                      ? `${p.name}.`
                      : `${p.name},`}
                  </span>
                </button>
              </motion.span>
            </span>
          ))}
        </div>
        {/* <span className="relative inline-block overflow-hidden text-start">
          <motion.span
          variants={ITEM}
          initial="hidden"
          animate={go && "visible"}
          custom={{ i: 33, a: "150%", d: true }}
          className="inline-flex max-w-full align-text-top text-start will-change-transform"
          >
            <button
              className="group float-left mt-5 text-main-default tracking-tighter leading-[0.9] align-text-top overflow-hidden
                duration-150 max-w-max hover:cursor-pointer hover:opacity-25"
            >
              <span className="">Hush</span>
              <motion.span
                initial={{ x: "-100%" }}
                animate={{
                  x: "0",
                  transition: {
                    ease: [0.86, 0, 0.07, 1],
                    duration: 0.65,
                    delay: 1.3,
                  },
                }}
                className="h-[1.5px] w-full bg-main-default block mt-2 group-hover:cursor-pointer group-hover:w-0 first-letter:
                  group-hover:ease-[cubic-bezier(0.86, 0, 0.07, 1)] duration-[0.65s]
                  "
              />
            </button>
          </motion.span>
        </span> */}
      </header>
    </div>
  );
}
