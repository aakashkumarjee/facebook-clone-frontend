import React from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav> */}
        <Switch>
          <Route path="/profile/:id">
            <Profile profileId="5" />
          </Route>
          <Route path="/profile">
            <Navbar/>
            <Profile />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
