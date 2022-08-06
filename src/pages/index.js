import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ITEM, SOCIAL_DATA } from "../static/constants";
import SmoothScroll from "../components/hocs/SmoothScroll";

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
      <div className="max-w-[1800px] w-full mx-auto py-12">
        {/* <header className="text-[120px] text-main-default tracking-tighter leading-[0.9]">
          Hi, I'm Sam 23.02.199 (23). Digital designer and
          developer with a focus on visual identity, faster-web
          and digital products.
        </header> */}
        <header className="text-[88px] text-main-default tracking-tighter leading-[1] max-w-[80%]">
          Samuel Campbell <span className="font-thin ">/</span>{" "}
          Designer & Developer / 23.02.1999 (23) / UK Based /
          Ireland Raised / Projects (4) / Freelance (Available) /
          Email me.
        </header>
        <footer className="flex gap-8 mt-10">
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
          <div className="flex flex-col flex-1 py-2 border-t-2 border-main-secondary/20 leading-1">
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
