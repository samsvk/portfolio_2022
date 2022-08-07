import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ITEM, SOCIAL_DATA, SLASH } from "../static/constants";
import SmoothScroll from "../components/hocs/SmoothScroll";

export default function Home() {
  const [go, setGo] = useState(false);

  useEffect(() => {
    let x = setTimeout(() => {
      setGo(true);
    }, 2000);
    return () => {
      clearTimeout(x);
    };
  }, []);

  return (
    <SmoothScroll>
      <div className="max-w-[1800px] w-full mx-auto py-12 min-h-screen h-full relative">
        <header className="text-[70px] text-main-default tracking-tighter leading-[0.95] align-text-top max-w-[80%]">
          <span className="relative inline-block overflow-hidden text-start">
            <motion.span
              variants={ITEM}
              initial="hidden"
              animate={go && "visible"}
              custom={{ i: 1, a: "120%", d: true }}
              className="inline-flex max-w-full align-text-top text-start will-change-transform"
            >
              Hello,{"\u00A0"}
            </motion.span>{" "}
          </span>
          <span className="relative inline-block overflow-hidden text-start ">
            <motion.span
              variants={ITEM}
              initial="hidden"
              animate={go && "visible"}
              custom={{ i: 2, a: "120%", d: true }}
              className="inline-flex max-w-full align-text-top text-start will-change-transform"
            >
              I'm{"\u00A0"}
            </motion.span>{" "}
          </span>
          <span className="relative inline-block overflow-hidden text-start">
            <motion.span
              variants={ITEM}
              initial="hidden"
              animate={go && "visible"}
              custom={{ i: 3, a: "120%", d: true }}
              className="inline-flex max-w-full align-text-top text-start will-change-transform"
            >
              Sam{"\u00A0"}
            </motion.span>{" "}
          </span>
          <span className="relative inline-block overflow-hidden text-start">
            <motion.span
              variants={ITEM}
              initial="hidden"
              animate={go && "visible"}
              custom={{ i: 4, a: "120%", d: true }}
              className="inline-flex max-w-full align-text-top text-start will-change-transform"
            >
              Campbell,{"\u00A0"}
            </motion.span>{" "}
          </span>
          <span className="relative inline-block overflow-hidden text-start">
            <motion.span
              variants={ITEM}
              initial="hidden"
              animate={go && "visible"}
              custom={{ i: 5, a: "120%", d: true }}
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
              custom={{ i: 6, a: "120%", d: true }}
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
              custom={{ i: 7, a: "120%", d: true }}
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
              custom={{ i: 8, a: "120%", d: true }}
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
              custom={{ i: 9, a: "120%", d: true }}
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
              custom={{ i: 10, a: "120%", d: true }}
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
              custom={{ i: 11, a: "120%", d: true }}
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
              custom={{ i: 12, a: "120%", d: true }}
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
              custom={{ i: 13, a: "120%", d: true }}
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
              custom={{ i: 14, a: "120%", d: true }}
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
              custom={{ i: 15, a: "120%", d: true }}
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
              custom={{ i: 16, a: "120%", d: true }}
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
              custom={{ i: 17, a: "120%", d: true }}
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
              custom={{ i: 18, a: "120%", d: true }}
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
              custom={{ i: 19, a: "120%", d: true }}
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
              custom={{ i: 20, a: "120%", d: true }}
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
              custom={{ i: 21, a: "120%", d: true }}
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
              custom={{ i: 22, a: "120%", d: true }}
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
                custom={{ i: 25, a: "120%", d: true }}
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
                custom={{ i: 25, a: "120%", d: true }}
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
                custom={{ i: 25, a: "120%", d: true }}
                className="inline-flex max-w-full align-text-top text-start will-change-transform"
              >
                Awards (1),
              </motion.span>{" "}
            </span>
          </div>
        </header>
        {/* <header className="text-[64px] text-main-default tracking-tighter leading-[1] max-w-[80%]">
          <div className="relative overflow-hidden">
            <motion.p
              className="inline-flex max-w-full"
              variants={ITEM}
              initial="hidden"
              animate={go && "visible"}
              custom={{ i: 3, a: "120%", d: true }}
            >
              Hello, I'm Sam Campbell (23.02.1999). A digital
              designer & developer based in Edinburgh. I love
              creating meaningful visual identities and timeless
              scaleable solutions.
            </motion.p>
          </div>

          <div className="relative overflow-hidden">
          </div>
        </header> */}
        <footer className="absolute bottom-[3rem] flex gap-8 mt-20">
          <div className="flex flex-col flex-1 py-2 border-t-2 border-main-secondary/20">
            <h2 className="text-[14px] font-[600] tracking-tight py-2">
              Socials
            </h2>
            <ul className="list-none text-main-secondary text-[14px] font-[600] tracking-tight">
              {SOCIAL_DATA.map(({ name }, i) => (
                <li key={i}>{name}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col flex-1 py-2 border-t-2 border-main-secondary/20">
            <h2 className="text-[14px] font-[600] tracking-tight py-2">
              Status
            </h2>
            <p className="list-none text-main-secondary text-[14px] font-[600] tracking-tight">
              I'm Chillin' 😎
            </p>
            <h2 className="text-[14px] font-[600] tracking-tight  py-2">
              Availability
            </h2>
            <p className="list-none text-main-secondary text-[14px] font-[600] tracking-tight">
              Available for Freelance Projects in October'22
            </p>
            <h2 className="text-[14px] font-[600] tracking-tight py-2">
              Role
            </h2>
            <p className="list-none text-main-secondary text-[14px] font-[600] tracking-tight">
              Design, Development and SEO
            </p>
          </div>
          <div className="flex flex-col flex-1 py-2 border-t-2 border-main-secondary/20">
            <h2 className="text-[14px] font-[600] tracking-tight py-2">
              About
            </h2>
            <p className="list-none text-main-secondary text-[14px] font-[600] tracking-tight">
              Samuel graduated in Digital Design and Development
              and is now a passionate creative. Self-taught in
              modern web technologies, Samuel spent the past
              years building industry experience in design and
              development strategy. All that empowered by his
              passion and ambition drives him to grow brands and
              products to it&apos;s full potential. Focusing on
              faster-web and user centered design, Samuel aims to
              provide clients with timeless and maintainable
              digital solutions.
            </p>
          </div>
        </footer>
      </div>
    </SmoothScroll>
  );
}
