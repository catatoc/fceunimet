import React from 'react';
import { motion } from 'framer-motion';
import './CTA-FAQ.css';

export default function CTA() {
    return (
        <div className="faq-cta-container">
            <h2>¿No ves respuesta a tu pregunta? ¡Contáctanos!</h2>
            <motion.a 
              className="faq-cta-button" 
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