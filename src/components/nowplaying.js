import { useEffect, useState } from "react";
import useSWR from "swr";
import fetcher from "../static/constants";

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

  console.log(data?.data);
  return <div className="">{data?.data.title}</div>;
}
