import React, {useState} from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";
import VideoFCE from './components/VideoFCE';
import { useTimer } from 'react-timer-hook';

function App() {

  const [isToggled, setIsToggled] = useState(true); // Para mostrar el video inicial

  const time = new Date(); // Para asignar el timer
  time.setSeconds(time.getSeconds() + 12); // Timer 20 segundos
  
  const {
  } = useTimer({ expiryTimestamp: time, autoStart: true, onExpire: () => setIsToggled(!isToggled)}); //Para que al pasar el tiempo indicado se muestre la página

  return (
    <>
      {isToggled ? <VideoFCE /> : 
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/products" component={Products} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
      </Router>
      }
    </>
  );
}

export default App;
