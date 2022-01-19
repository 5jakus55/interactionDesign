import React, { Component, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MenuItems } from "./menuItems";
import logo from "./assets/logo.png";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import "./main.css";

class Week5 extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="Navbar-items">
        <div className="menu-logo">
          <img src={logo} />
        </div>
        <div className="menu-icon" onClick={this.handleClick}>
          {this.state.clicked ? <CgClose /> : <HiOutlineMenuAlt3 />}
        </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Week5;
