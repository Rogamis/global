import React from "react";
import "../style/video.mp4"

const videoBackgroud = () => {
  return (
    <div>
      <video loop autoPlay>
        <source
          src="../style/video.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
}

export default videoBackgroud