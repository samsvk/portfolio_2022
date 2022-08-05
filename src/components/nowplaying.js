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
                  custom={{ i: 3, a: 20, d: false }}
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
                  custom={{ i: 4, a: 20, d: false }}
                  className="p"
                >
                  <span className="song">
                    <span className="song__title">
                      <a
                        href={`${data?.data?.songUrl}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {data?.data?.title} -{" "}
                        {data?.data?.artist}
                      </a>
                    </span>
                  </span>
                </motion.span>
              </span>
            </>
          )}
        </AnimatePresence>
      ) : (
        <AnimatePresence>
          {go && (
            <>
              <span className="pc">
                <motion.span
                  variants={ITEM}
                  initial="hidden"
                  animate="visible"
                  custom={4}
                  className="p"
                  style={{ opacity: 0.5 }}
                >
                  <GrSpotify
                    style={{
                      verticalAlign: "middle",
                    }}
                  />{" "}
                  Not Listening
                </motion.span>
              </span>
            </>
          )}
        </AnimatePresence>
      )}
    </>
  );
}
