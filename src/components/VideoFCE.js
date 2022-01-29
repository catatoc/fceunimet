import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

// Video que saldrá al iniciar la página y cuando esté cargando.

function VideoFCE() {
  return (
    <div className='hero-container'>
      <video src='/videos/FCEUNIMET.mp4' autoPlay loop muted />
    </div>
  );
}

export default VideoFCE;
