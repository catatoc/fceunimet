import React from 'react';
import '../../App.css';
import Store from '../store/Store';
import Footer from '../Footer';
import FloatingWhatsApp from 'react-floating-whatsapp';
import logo from './../../logo_blanco.png';

export default function StorePage() {
  // query de productos aquí
  const products = [
    { name: 'Lanyard',
      image: '',
      price: 3.00,
    },
    { name: 'Hoodie',
      image: '',
      price: 20.00,
    },
    
    { name: 'Camisa',
      image: '',
      price: 14.00,
    },
    { name: 'Samancito dorado',
      image: '',
      price: 8.00,
    },
  ]
  return (
    <>
      <Store products={products} />
      <FloatingWhatsApp allowClickAway={true} avatar={logo} phoneNumber='+584141181358' accountName='FCE UNIMET' statusMessage='Federación de Centros de Estudiantes de la Universidad Metropolitana de Caracas' chatMessage='Hola! Un gusto saludarte. Estamos a la orden para ayudarte. Ponte en contacto con nosotros para indicarte cómo es la mejor manera de resolver tu inquietud.' CSSProperties='z-index=100'  />
      <Footer />
    </>
  );
}