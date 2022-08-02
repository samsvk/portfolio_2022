import useSWR from "swr";
import fetcher from "../static/constants";

export default function NowPlaying() {
  const { data } = useSWR("/api/now-playing", fetcher);
  // return {data.title};
  return <div className="">{data?.title}</div>;
}
