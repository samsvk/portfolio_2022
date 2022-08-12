import useSWR, { SWRConfig } from "swr";
import fetcher from "../static/constants";
import { GrSpotify } from "react-icons/gr";
import Toptracks from "./toptracks";
import { useState } from "react";

export default function NowPlaying() {
  const [show, setShow] = useState(false);
  const { data } = useSWR("/api/now-playing", fetcher, {
    loadingTimeout: 5000,
    errorRetryCount: 30000,
  });

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
      <div className="relative flex flex-col justify-center it ems-start lg:items-end">
        <Toptracks show={show} setShow={setShow} />
        {data?.data?.isPlaying ? (
          <>
            <h2 className="text-[14px] font-[400] tracking-tight text-main-secondary leading-normal align-text-top text-start flex items-center justify-center">
              <GrSpotify
                onClick={() => setShow((p) => !p)}
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
          </>
        ) : (
          <>
            <h2 className="text-[14px] font-[400] tracking-tight text-main-secondary leading-normal align-text-top text-start flex items-center justify-center">
              <GrSpotify
                style={{
                  verticalAlign: "middle",
                }}
              />
              {"\u00A0"}Not Playing{"\u00A0"}
            </h2>
            <p className="tracking-tight text-[14px] align-text-top text-start  list-none text-main-default leading-normal"></p>
          </>
        )}
      </div>
    </>
  );
}
