import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroVideo() {
  return (
    <div className='hero-container'>
      <video src='/videos/FCEUNIMET.mp4' autoPlay loop muted />
    </div>
  );
}

export default HeroVideo;
