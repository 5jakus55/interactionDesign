import React from "react";
import styled from "styled-components";
import "./App.css";
import Component1 from "./components/component1";
import Week6 from "./components/week6/index";
import Week7 from "./components/week7";
import Week8 from "./components/week8";
import Week9 from "./components/week9/index";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const StyledNav = styled.ul`
  margin: 0 auto;
  justify-content: center;
  height: 200px;
  padding: 90px;
  box-shadow: 5px 5px 5px rgba(68, 68, 68, 0.7);
  width: 200px;
  li {
    list-style: none;
    margin-right: 2%;
    margin-top: 18px;
    text-align: center;
    justify-content: center;
    font-size: 20px;
  }
  background-color: #bdd5ea;
  border-radius: 20px;
`;

const StyledHeader = styled.h1`
  text-align: center;
  margin-top: 100px;
`;

const Home = () => (
  <nav>
    <StyledHeader> Welcome to Interaction Design Assessment!</StyledHeader>
    <StyledNav>
      <li>
        <Link to="/component1"> Login Form </Link>
      </li>
      <li>
        <Link to="/week6"> Menu </Link>
      </li>
      <li>
        <Link to="/week7"> Loader Page </Link>
      </li>
      <li>
        <Link to="/week8"> Toggle </Link>
      </li>
      <li>
        <Link to="/week9"> Modal </Link>
      </li>
    </StyledNav>
  </nav>
);

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/component1">
          <Component1 />
        </Route>
        <Route path="/week6">
          <Week6 />
        </Route>
        <Route path="/week7">
          <Week7 />
        </Route>
        <Route path="/week8">
          <Week8 />
        </Route>
        <Route path="/week9">
          <Week9 />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
