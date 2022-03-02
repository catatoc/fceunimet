import React from "react";
import { useRef, useState } from "react";
import "../App.css";
import { Button } from "./Button";
import "./VideoFCE.css";
import { Fade } from "react-awesome-reveal";

// Video que saldrá al iniciar la página y cuando esté cargando.

function VideoFCE({ childToParent }) {
  let firstVideoEnded = true;

  const videoRef = useRef();
  const setPlayBack = () => {
    videoRef.current.playbackRate = 10;
  };

  return (
    <Fade cascade triggerOnce>
      <div className="hero-containerFCE">
        <video
          src="/videos/FCEUNIMET-min.mp4"
          autoPlay
          muted
          ref={videoRef}
          onCanPlay={() => setPlayBack()}
          onEnded={() => childToParent(firstVideoEnded)}
        />
      </div>
    </Fade>
  );
}

export default VideoFCE;
