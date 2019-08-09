import React from 'react';
import Shop from './pages/Shop';
import LandingPage from './pages/LandingPage';
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={LandingPage} />
      <Route path="/shop/" exact component={Shop} />
    </Router>
  );
}

export default App;
