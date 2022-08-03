import { getNowPlaying } from "../../static/spotify";
export default async function handler(req, res) {
  const response = await getNowPlaying();

  if (response.status === 204 || response.status > 400) {
    res
      .status(200)
      .setHeader("Content-Type", "application/json")
      .send({
        data: {
          isPlaying: false,
        },
      });
  }
  const song = await response.json();

  if (song.item === null) {
    res
      .status(200)
      .setHeader("Content-Type", "application/json")
      .send({
        data: {
          isPlaying: false,
        },
      });
  }

  const isPlaying = song.is_playing;
  const title = song.item.name;
  const artist = song.item.artists
    .map((_artist) => _artist.name)
    .join(", ");
  const album = song.item.album.name;
  const albumImageUrl = song.item.album.images[0].url;
  const songUrl = song.item.external_urls.spotify;

  res
    .status(200)
    .setHeader("Content-Type", "application/json")
    .send({
      data: {
        album,
        albumImageUrl,
        artist,
        isPlaying,
        songUrl,
        title,
      },
    });
}
