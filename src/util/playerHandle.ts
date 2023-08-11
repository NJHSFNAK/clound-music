export const getSongsUrl = (id: number) => `https://music.163.com/song/media/outer/url?id=${id}.mp3`;

export const getSongsDuration = (time: number) => {
  const times = Math.floor(time / 1000);
  const minute = Math.floor(times / 60)
    .toString()
    .padStart(2, "0");
  const second = (times % 60).toString().padStart(2, "0");
  return `${minute}:${second}`;
};
