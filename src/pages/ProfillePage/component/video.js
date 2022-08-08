import React from 'react'
import videoBg from "../video/backgroundProfille.mp4";

function VideoProfille() {
  return (
    <video src={videoBg} autoPlay loop muted width="100%"
        style={{
            position: "absolute",
            width: "100%",
            left: "50%",
            top: "50%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: "-1",
            filter: "brightness(50%)"
        }}>  
        </video>
  )
}

export default VideoProfille