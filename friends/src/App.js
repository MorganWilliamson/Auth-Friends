import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute";
import './App.css';

import LoginForm from "./components/LoginForm";
import FriendsList from "./components/FriendsList";
import FriendCard from "./components/FriendCard";


function App() {
  // const [loggedIn, setLoggedIn] = useState(false);

  // const showLink = () => {
  //   if(loggedIn) {
  //     return(<li>
  //             <Link to="/friends">Friends List</Link>
  //           </li>)
  //   } else {
  //     return(<div></div>)
  //   }
  // }

  return (
    <Router>
      <div className="App">
        <p>App rendering.</p>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/friends">(Login to Access)</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute exact path="/friends" component={FriendsList}/>
          <PrivateRoute exact path="/friends/:id" component={FriendCard}/>
          <Route path="/login" component={LoginForm} />
          <Route component={LoginForm} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
