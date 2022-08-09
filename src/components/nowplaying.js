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
          <div className="flex flex-col items-start justify-center lg:items-end">
            <h2 className="text-[14px] font-[400] tracking-tight text-main-secondary leading-normal align-text-top text-start flex items-center justify-center">
              <GrSpotify
                style={{
                  verticalAlign: "middle",
                }}
              />
              {"\u00A0"}Now Playing:{"\u00A0"}
            </h2>
            <p className="tracking-tight text-[14px] align-text-top text-start  list-none text-main-default leading-normal">
              <a
                href={`${data?.data?.songUrl}`}
                target="_blank"
                rel="noreferrer"
              >
                {data?.data?.title} - {data?.data?.artist}
              </a>
            </p>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col items-end justify-center">
            <h2 className="text-[14px] font-[400] tracking-tight text-main-secondary leading-normal align-text-top text-start flex items-center justify-center">
              <GrSpotify
                style={{
                  verticalAlign: "middle",
                }}
              />
              {"\u00A0"}Not Playing{"\u00A0"}
            </h2>
            <p className="tracking-tight text-[14px] align-text-top text-start  list-none text-main-default leading-normal"></p>
          </div>
        </>
      )}
    </>
  );
}
