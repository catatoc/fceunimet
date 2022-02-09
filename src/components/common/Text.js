import React from 'react';
import './Text.css';

export default function Text({ text = '' }) {
  return (
    <div className="text-container">
      <h2>{text}</h2>
    </div>
  )
}