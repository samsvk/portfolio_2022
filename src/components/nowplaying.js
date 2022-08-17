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

  return (
    <>
      <div className="relative flex-col items-start justify-center hidden md:flex md:items-end lg:items-end ">
        <Toptracks show={show} setShow={setShow} />
        {data?.data?.isPlaying ? (
          <>
            <h2 className="text-[14px] font-[400] tracking-tight text-main-secondary leading-normal align-text-top text-start flex items-center justify-start">
              <GrSpotify
                onClick={() => setShow((p) => !p)}
                className="align-middle hover:cursor-pointer"
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
          <div className="flex">
            <h2 className="w-full whitespace-nowrap text-[14px] font-[400] tracking-tight text-main-secondary leading-normal align-text-top text-start flex items-center justify-start flex-1">
              <GrSpotify
                onClick={() => setShow((p) => !p)}
                className="align-middle hover:cursor-pointer"
              />
              {"\u00A0"}Not Playing:{"\u00A0"}
            </h2>
            <p className="flex-1 tracking-tight text-[14px] align-text-top text-start  list-none text-main-default leading-normal">
              <a href={`#`} target="_blank" rel="noreferrer">
                Spotify
              </a>
            </p>
          </div>
        )}
      </div>
    </>
  );
}
