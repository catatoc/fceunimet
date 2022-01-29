import React from 'react';
import '../App.css';
import { Button } from './Button';
import './VideoFCE.css';
import { Fade } from "react-awesome-reveal";

// Video que saldrá al iniciar la página y cuando esté cargando.

function VideoFCE() {
  return (
    <Fade cascade triggerOnce>
      <div className='hero-containerFCE'>
        <video src='/videos/FCEUNIMET.mp4' autoPlay muted />
      </div>
    </Fade>
  );
}

export default VideoFCE;
