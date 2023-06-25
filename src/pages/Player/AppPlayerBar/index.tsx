import React, { memo, useEffect, useRef, useState } from "react";
import type { FC, ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { useAppSeletor, shallowEqualApp } from "@/store";

import { Slider } from "antd";

import { AppPlayerBarWrapper, BarControl, BarPlayInfo, BarOperator } from "./styled";
import { getSongsUrl, getSongsDuration } from "@/util/playerHandle";

// 约束Props类型
interface IProps {
  children?: ReactNode;
}

const AppPlayerBar: FC<IProps> = () => {
  const [progress, setProgress] = useState(0);
  const [_, setIsPlay] = useState<boolean>(false);
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [isSilding, setIsSilding] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  // 监听播放进度
  const handleTimeUpdate = () => {
    // 当前播放的进度
    const currentTime = Math.floor(audioRef.current!.currentTime);
    // 获取总时间
    const progress = ((currentTime * 1000) / duration) * 100;
    setCurrentTime(currentTime * 1000);
    if (!isSilding) {
      setProgress(progress);
    }
  };

  // 音频播放处理
  const songHandle = () => {
    if (!audioRef?.current) return;
    const isPlay = audioRef.current.paused;
    if (isPlay) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    setIsPlay(isPlay);
  };

  // 获取歌曲数据
  const { currentSong } = useAppSeletor(
    (state) => ({
      currentSong: state.player.songDetail
    }),
    shallowEqualApp
  );
  // 进度条点击事件
  const sliderClickHandle = (value: number) => {
    setProgress(value);
    setIsSilding(false);
    setCurrentTime((value / 100) * duration);
    audioRef.current!.currentTime = (duration / 1000) * (value / 100);
  };
  // 进度条拖拽事件
  const sliderChangeHandle = (value: number) => {
    setIsSilding(true);
    setProgress(value);
    setCurrentTime((value / 100) * duration);
  };
  useEffect(() => {
    const songUrl = getSongsUrl(212233);
    if (!audioRef.current) return;
    audioRef.current.src = songUrl;
    setDuration(currentSong.dt);
  }, [currentSong]);
  return (
    <AppPlayerBarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <BarControl>
          <button className="btn sprite_playbar prev"></button>
          <button className="btn sprite_playbar play" onClick={songHandle}></button>
          <button className="btn sprite_playbar next"></button>
        </BarControl>
        <BarPlayInfo>
          <NavLink to="/discover/player">
            <img src="https://p2.music.126.net/OVkXDNmbk2uj6wE1KTZIwQ==/109951165203334337.jpg?param=34y34" alt="" />
          </NavLink>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong.name}</span>
              <span className="singer-name">{currentSong && currentSong.ar && currentSong.ar[0]?.name}</span>
            </div>
            <div className="progress">
              <Slider
                tooltip={{ open: false }}
                value={progress}
                step={0.0001}
                onChange={sliderChangeHandle}
                onAfterChange={sliderClickHandle}
              />
              <div className="time">
                <span className="current">{getSongsDuration(currentTime)}</span>
                <span className="divider">/</span>
                <span className="duration">{getSongsDuration(duration)}</span>
              </div>
            </div>
          </div>
        </BarPlayInfo>
        <BarOperator>
          <div className="left">
            <button className="btn sprite_playbar favor"></button>
            <button className="btn sprite_playbar share"></button>
          </div>
          <div className="right sprite_playbar">
            <button className="btn sprite_playbar volume"></button>
            <button className="btn sprite_playbar loop"></button>
            <button className="btn sprite_playbar playlist"></button>
          </div>
        </BarOperator>
      </div>
      <audio ref={audioRef} onTimeUpdate={handleTimeUpdate}></audio>
    </AppPlayerBarWrapper>
  );
};

// 默认Props值
AppPlayerBar.defaultProps = {};

export default memo(AppPlayerBar);
