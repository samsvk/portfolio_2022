import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ITEM, PROJECT_DATA } from "../static/constants";
import Footer from "../components/footer";
import { GoPrimitiveDot } from "react-icons/go";

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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 1.5,
              duration: 1,
              ease: "easeInOut",
            },
          }}
          className="inline-flex mb-2 ml-1"
        >
          <h2 className="mr-3 text-[14px] font-[400] tracking-tight text-main-secondary  leading-normal align-text-top text-start mb-1">
            Selected Works:
          </h2>
          <ul className="tracking-tight text-[14px] align-text-top text-start list-none text-main-default leading-normal flex gap-1.5">
            {PROJECT_DATA.map((p, i) => (
              <span
                content={`${p.tech.map((t) => t).join(", ")}`}
                className={`hover:after:opacity-100 after:duration-200 after:opacity-0 relative inline-block group text-start 
                after:bg-stone-100 after:rounded-lg 
                after:py-1 after:z-40 after:px-2.5 after:absolute 
                after:h-max after:w-max 
                after:top-[-2rem]
                after:left-[55%]
                after:translate-x-[-55%]
                after:content-[attr(content)]
                after:drop-shadow-md
                underline
                after:tracking-tight after:text-[14px] after:font-[400] after:align-text-top after:text-start after:list-none after:text-main-default after:leading-normal`}
                key={i}
              >
                <li
                  className="hover:cursor-pointer relative duration-500 font-[400] max-w-max hover:opacity-25 text-main-default flex items-center"
                  key={i}
                >
                  {PROJECT_DATA[PROJECT_DATA.length - 1].name ===
                  p.name ? (
                    <>{p.name}</>
                  ) : (
                    <>
                      {p.name}
                      {
                        <GoPrimitiveDot className="ml-1.5 text-center align-middle scale-50" />
                      }
                    </>
                  )}
                </li>
              </span>
            ))}
          </ul>
        </motion.div>
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
        </div>
      </header>
    </div>
  );
}
