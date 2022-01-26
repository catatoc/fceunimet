import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import Schools from "./components/pages/Schools";
import SignUp from "./components/pages/SignUp";
import HeroVideo from './components/HeroVideo';
import SchoolSection from "./components/SchoolSection";

function App() {
  return (
    <>
      <Router>
        {/* <HeroVideo /> */}
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/products" component={Products} />
          <Route path="/schools" component={Schools} />
          <Route path="/sign-up" component={SignUp} />

        </Switch>
      </Router>
    </>
  );
}

export default App;
