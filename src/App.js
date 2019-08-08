import React from 'react';
import Shop from './pages/Shop';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const LandingPage = () => (
  <>
      <h1>Welcome to our Random Shop!</h1>
      <p>Discover all we got to sell by clicking the button below</p>
      <button>
        <Link to="/shop/">Go to shop</Link>
      </button>
  </>
)

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={LandingPage} />
      <Route path="/shop/" exact component={Shop} />
    </Router>
  );
}

export default App;
