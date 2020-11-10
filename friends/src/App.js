import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const showLink = () => {
    if(loggedIn) {
      return(<li>
              <Link to="/friends">Friends List</Link>
            </li>)
    }
  }

  return (
    <Router>
      <div className="App">
        <p>App rendering.</p>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          {
            showLink()
          }
        </ul>
      </div>
    </Router>
  );
};

export default App;
