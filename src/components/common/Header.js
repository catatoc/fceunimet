import React from 'react';
import './Header.css';

export default function Header({ image = '', title = '', text = '' }) {
  return (
    <div className="header-container"
      style={{
        'height': '100vh',
        'width': '100%',
        'display': 'grid',
        'gridTemplateColumns': 'repeat(2, 1fr)',
        'justifyContent': 'center',
        'alignItems': 'center',
        'backgroundImage': `url(${image})`,
        'objectFit': 'contain',
        'backgroundRepeat': 'no-repeat',
        'backgroundPosition': 'center',
        'backgroundSize': 'cover',
        'boxShadow': 'inset 0 0 0 1000px rgba(0, 0, 0, 0.2)',
        }}
      >
        <div className="gradient" />
        <div className="header-text">
            <h1>TIENDA</h1>
            <p>texto sobre merch</p>
        </div>
    </div>
  )
}