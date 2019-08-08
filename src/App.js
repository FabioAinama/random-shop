import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <h1>Welcome to our Random Shop!</h1>
      <p>Discover all we got to sell by clicking the button below</p>
      <button>
        <Link to="/shop/">Go to shop</Link>
      </button>
    </Router>
  );
}

export default App;
