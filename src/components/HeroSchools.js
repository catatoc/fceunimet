import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSchools.css';

function HeroSchools() {
  return (
    <div className='hero-container'>
      <video src='/videos/drone.mp4' autoPlay loop muted />
      <h1>ESCUELAS</h1>
    </div>
  );
}

export default HeroSchools;