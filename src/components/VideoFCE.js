import React from 'react';
import '../App.css';
import { Button } from './Button';
import './VideoFCE.css';

// Video que saldrá al iniciar la página y cuando esté cargando.

function VideoFCE() {
  return (
    <div className='hero-containerFCE'>
      <video src='/videos/FCEUNIMET.mp4' autoPlay muted />
    </div>
  );
}

export default VideoFCE;
