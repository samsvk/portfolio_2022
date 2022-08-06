import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ITEM } from "../static/constants";
import Socials from "./socials";
import NowPlaying from "./nowplaying";

const Footer = () => {
  const [go, setGo] = useState(false);

  useEffect(() => {
    let x = setTimeout(() => {
      setGo(true);
    }, 1400);
    return () => clearTimeout(x);
  }, []);

  return (
    <footer className="footer">
      <div className="grid">
        <div className="paragraph">
          <span className="pc">
            <span className="p">
              Samuel graduated in Digital Design and Development
              and is now a passionate creative. Self-taught in
              modern web technologies, Samuel spent the past
              years building industry experience in design and
              development strategy. All that empowered by his
              passion and ambition drives him to grow brands and
              products to it&apos;s full potential.
            </span>
          </span>
        </div>

        <Socials go={go} />
        <NowPlaying go={go} />
      </div>
    </footer>
  );
};

export default Footer;
