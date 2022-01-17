import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import StorePage from './components/pages/Store';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/store' component={StorePage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
