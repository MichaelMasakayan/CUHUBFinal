import React from "react";
import "../styles.css";
import { NavLink, Link } from "react-router-dom";
import logo from "../images/logotransparency.png";

function UniNav() {
  return (
    <div class="hero-anime">
      <div class="navigation-wrap bg-light start-header start-style">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <nav class="navbar navbar-expand-md navbar-light">
                <a class="navbar-brand" target="_blank">
                  <img src={logo} />
                </a>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>

                <div
                  class="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul class="navbar-nav ml-auto py-4 py-md-0">
                    <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                      <Link to="/home">
                        <a class="nav-link" href="#">
                          Home
                        </a>
                      </Link>
                    </li>
                    <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                      <Link to="/calendar">
                        <a class="nav-link" href="#">
                          Calendar
                        </a>
                      </Link>
                    </li>
                    <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                      <Link to="/clubs">
                        <a class="nav-link" href="#">
                          Clubs
                        </a>
                      </Link>
                    </li>
                    <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                      <Link to="/settings">
                        <a class="nav-link" href="#">
                          Settings
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div class="my-5 py-5"></div>
    </div>
  );
}

export default UniNav;
