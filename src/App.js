import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";
import CargosPage from "./components/pages/Cargos";
import SchoolsPage from "./components/pages/Schools";
import VideoFCE from "./components/VideoFCE";
import { useTimer } from "react-timer-hook";
import StorePage from "./components/pages/Store";
import UsPage from "./components/pages/Us";
import UniPage from "./components/pages/University";
import FAQsPage from "./components/pages/FAQs";
import CalendarPage from "./components/pages/Calendar";
import Footer from "./components/footer/Footer";

function App() {
  const [isToggled, setIsToggled] = useState(true); // Para mostrar el video inicial

  const time = new Date(); // Para asignar el timer
  time.setSeconds(time.getSeconds() + 5); // Timer 20 segundos

  const {} = useTimer({
    expiryTimestamp: time,
    autoStart: true,
    onExpire: () => setIsToggled(!isToggled),
  }); //Para que al pasar el tiempo indicado se muestre la página

  return (
    <>
      {isToggled ? (
        <VideoFCE />
      ) : (
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/services" component={Services} />
            <Route path="/products" component={Products} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/store" component={StorePage} />
            <Route path="/us" component={UsPage} />
            <Route path="/university" component={UniPage} />
            <Route path="/ayuda" component={FAQsPage} />
            {/* <Route path="/schools/:school" component={Home} /> aquí va Schools en vez de Home */}
            <Route path="/schools" component={SchoolsPage} />
            <Route path="/Cargos" component={CargosPage} />
            <Route path="/calendar" component={CalendarPage} />
          </Switch>
          <Footer />
        </Router>
      )}
    </>
  );
}

export default App;
