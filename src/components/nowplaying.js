import useSWR, { SWRConfig } from "swr";
import fetcher from "../static/constants";
import { motion, AnimatePresence } from "framer-motion";
import { ITEM } from "../static/constants";
import { GrSpotify } from "react-icons/gr";

export default function NowPlaying() {
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
        <>
          <div className="song opac">
            <div style={{ opacity: 0.5 }}>
              <GrSpotify
                style={{
                  verticalAlign: "middle",
                }}
              />
              {"\u00A0"}Now Playing:{"\u00A0"}
            </div>
            <div className="song__title">
              <a
                href={`${data?.data?.songUrl}`}
                target="_blank"
                rel="noreferrer"
              >
                {data?.data?.title} - {data?.data?.artist}
              </a>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="song opac">
            <div style={{ opacity: 0.5 }}>
              <GrSpotify
                style={{
                  verticalAlign: "middle",
                }}
              />
              {"\u00A0"}Not Playing{"\u00A0"}
            </div>
          </div>
        </>
      )}
    </>
  );
}
