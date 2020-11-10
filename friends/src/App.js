import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute";
import './App.css';

import LoginForm from "./components/LoginForm";
import FriendsList from "./components/FriendsList";


function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const showLink = () => {
    if(loggedIn) {
      return(<li>
              <Link to="/friends">Friends List</Link>
            </li>)
    } else {
      return(<div></div>)
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
        <Switch>
          <PrivateRoute exact path="/friends" component={FriendsList}/>
          <Route path="/login" render={(props) => {
            return <LoginForm {...props} setLoggedIn={setLoggedIn} />
          }} />
          <Route component={LoginForm} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
