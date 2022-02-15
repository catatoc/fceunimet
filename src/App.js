import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";
import VideoFCE from './components/VideoFCE';
import { useTimer } from 'react-timer-hook';
import StorePage from './components/pages/Store';
import UsPage from './components/pages/Us';
import FAQs from './components/pages/FAQs';
import Footer from "./components/footer/Footer";

function App() {
  const [firstVideoEnded, setfirstVideoEnded] = useState(false); //variable que permite saber si el video inicial termino

  const childToParent = (childdata) => {
    //comunicacion entre este componente y el VideoFCE.js para saber si video termino
    setfirstVideoEnded(childdata);
  };

  // const [isToggled, setIsToggled] = useState(true); // Para mostrar el video inicial

  // const time = new Date(); // Para asignar el timer
  // time.setSeconds(time.getSeconds() + 5); // Timer 20 segundos

  // const {} = useTimer({
  //   expiryTimestamp: time,
  //   autoStart: true,
  //   onExpire: () => setIsToggled(!isToggled),
  // }); //Para que al pasar el tiempo indicado se muestre la página

  return (
    <>
      {!firstVideoEnded ? (
        <VideoFCE childToParent={childToParent} />
      ) : (
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/services" component={Services} />
            <Route path="/products" component={Products} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/store" component={StorePage} />
            <Route path='/us' component={UsPage} />
            <Route path='/ayuda' component={FAQs} />
          </Switch>
          {/* <Footer /> */}
        </Router>
      )}
    </>
  );
}

export default App;
