"use client";

import { useState, useEffect } from "react";
import styles from "./style/VideoSlider.module.css";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

export default function VideoSlider() {
  const videos = [
    "videos/video1.mp4",
    "videos/video2.mp4",
    "videos/video3.mp4",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(true);

  const nextVideo = () => {
    setVideoLoaded(false);
    setCurrentIndex((currentIndex + 1) % videos.length);
  };

  const prevVideo = () => {
    setVideoLoaded(false);
    setCurrentIndex((currentIndex - 1 + videos.length) % videos.length);
  };

  // Indice del video dietro
  const backIndex = (currentIndex + 1) % videos.length;

  // Precarica tutti i video
  useEffect(() => {
    videos.forEach((src) => {
      const vid = document.createElement("video");
      vid.src = src;
      vid.preload = "auto";
    });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.containerVideo}>
        {/* Video dietro */}
        <video
          key={`back-${backIndex}`}
          src={videos[backIndex]}
          className={`${styles.backVideo}`}
          muted
        />

        {/* Video principale */}
        <video
          key={currentIndex}
          src={videos[currentIndex]}
          className={`${styles.mainVideo}`}
          autoPlay
          muted
          loop
          onLoadedData={() => setVideoLoaded(true)}
          style={{
            opacity: videoLoaded ? 1 : 0,
            transition: "opacity 0.3s ease-in-out",
          }}
        />
      </div>

      {/* Bottoni */}
      <div className={styles.containerBtn}>
        <a className={styles.leftButton} onClick={prevVideo}>
          <FaArrowCircleLeft />
        </a>
        <a className={styles.rightButton} onClick={nextVideo}>
          <FaArrowCircleRight />
        </a>
      </div>
    </div>
  );
}