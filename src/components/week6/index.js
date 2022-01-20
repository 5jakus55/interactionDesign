import React, { Component, useState } from "react";
import NavBar from "./navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./navbar.css";
import { Home } from "./Pages/Home";
import { Discover } from "./Pages/Discover";
import { About } from "./Pages/About";
import { Support } from "./Pages/Support";
import { Download } from "./Pages/Download";

function Week6() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/discover" component={Discover} />
            <Route path="/about" component={About} />
            <Route path="/support" component={Support} />
            <Route path="/download" component={Download} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default Week6;
