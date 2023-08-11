export interface ILyric {
  time: number;
  text: string;
}

export const parseLyric = (lyric: string) => {
  const lines = lyric.split("\n");
  // 对歌词进行解析
  const timeRegExp = /\[(\d{2}):(\d{2}).(\d{2,3})\]/;
  const lyrics: ILyric[] = [];
  lines.forEach((line) => {
    const results = timeRegExp.exec(line);
    if (!results) return;
    const time1 = Number(results[1]) * 60 * 1000;
    const time2 = Number(results[2]) * 1000;
    const time3 = results[3].length > 2 ? Number(results[3]) : Number(results[3]) * 10;
    const time = time1 + time2 + time3;
    const text = line.replace(timeRegExp, "").trim();
    lyrics.push({ time, text });
  });
  return lyrics;
};
