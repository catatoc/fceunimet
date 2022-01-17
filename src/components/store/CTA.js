import React from 'react';
import { motion } from 'framer-motion';
import './CTA.css';

export default function CTA() {
    return (
        <div className="store-cta-container">
            <h2>¡Pide cualquiera de estos productos rellenando el siguiente Form!</h2>
            <motion.a 
              className="store-cta-button" 
              href="https://www.google.com/forms/about/" 
              target="_blank"
              whileHover={{ scale: 1.025 }}
              whileTap={{ scale: 0.975 }}
            >
                Ir al Form
            </motion.a>
        </div>
    )
}