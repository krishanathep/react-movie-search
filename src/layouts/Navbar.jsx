import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <nav class="navbar navbar-expand-lg bg-primary fixed-top">
          <div className="container">
          <Link to='/' className="navbar-brand">
            <span>REACT</span> MOVIE SEARCH
          </Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
