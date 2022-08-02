import { useEffect, useState } from "react";
import useSWR, { SWRConfig } from "swr";
import fetcher from "../static/constants";
import { motion, AnimatePresence } from "framer-motion";
import { ITEM } from "../static/constants";
import { GrSpotify } from "react-icons/gr";

export default function NowPlaying({ go }) {
  const { data } = useSWR("/api/now-playing", fetcher, {
    loadingTimeout: 5000,
    errorRetryCount: 30000,
  });

  // const [data, setData] = useState({});

  // useEffect(() => {
  //   const timeout = setTimeout(async () => {
  //     const x = await getData();
  //     setData(x);
  //   }, 3000);
  //   async function getData() {
  //     const x = await fetch("/api/now-playing");
  //     const z = await x.json();
  //     return z;
  //   }
  //   return () => clearTimeout(timeout);
  // }, []);

  return (
    <>
      {data?.data?.isPlaying ? (
        <AnimatePresence>
          {go && (
            <>
              <span className="pc">
                <motion.span
                  variants={ITEM}
                  initial="hidden"
                  animate="visible"
                  custom={0}
                  className="p"
                  style={{ opacity: 0.5 }}
                >
                  <GrSpotify
                    style={{
                      verticalAlign: "middle",
                    }}
                  />{" "}
                  Now Playing:
                </motion.span>
              </span>
              <span className="pc">
                <motion.span
                  variants={ITEM}
                  initial="hidden"
                  animate="visible"
                  custom={1}
                  className="p"
                >
                  {data?.data?.title}
                </motion.span>
              </span>
            </>
          )}
        </AnimatePresence>
      ) : (
        <div>Not Playing</div>
      )}
    </>
  );
}
