import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <nav class="navbar navbar-expand-lg bg-primary fixed-top">
          <div className="container">
            <Link to="/" className="navbar-brand">
              <i class="fas fa-video"></i>&nbsp; <span>REACT</span> MOVIE SEARCH
            </Link>
              <ul class="navbar-nav ml-auto">
                <li className='nav-item'>
                  <a className='nav-link' href="https://github.com/krishanathep/react-movie-search"><i className="fab fa-github"></i></a>
                </li>
              </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
