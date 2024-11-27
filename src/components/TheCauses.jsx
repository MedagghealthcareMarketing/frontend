import React, { useState } from "react";
import Styles from "../components/TheCauses.module.css";
import { TheCausesCard } from "./TheCausesCard";
import vidThump from "../assets/Thumbnail/deepashree thumbnail@3x.webp";
import GaeVideo from "../assets/Videos/GAE.mp4"

export const TheCauses = ({ data }) => {
  const [isPlaying, setIsPlaying] = useState(false); // State to track if the video is playing

  const handlePlayClick = () => {
    setIsPlaying(true); // Set isPlaying to true when clicked
  };

  return (
    <div>
      <div className={`container ${Styles.TheCauses}`}>
        <div className={`row mt-5 p-1 ${Styles.Row}`} >
          <div className={`col-8 ${Styles.ColLeft}`} >
            <div className="CausesFrame position-relative">
              <h2>What Are The Causes of Knee Pain?</h2>
              <TheCausesCard data={data} />
            </div>
          </div>
          <div className={`col-4 ${Styles.ColRight}`} >
            <div className={`VidFrame ${Styles.VidFrame}`} >
              {/* Video thumbnail */}
              {!isPlaying ? (
                <img
                  src={vidThump}
                  alt="Video Thumbnail"
                  className={`img-fluid ${Styles.VidThumb}`}
                  style={{ cursor: "pointer" }}
                  onClick={handlePlayClick} // On click, the video starts playing
                />
              ) : (
                <video controls autoPlay className={`${Styles.Video} img-fluid`}>
                  <source src={GaeVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
