import React from "react";

import { Link } from "react-router-dom";
import Scroll from "react-scroll";
const ScrollLink = Scroll.Link;

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg py-0 m-0 navbar-light fixed-top bg-white shadow-sm">
      <div class="container-fluid py-3 px-4 navigation-container">
        <Link to="/">
          <img class="navbar-brand" src="/images/landinglogo.png" alt="logo" />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav1 ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
            <ScrollLink
                to="home-section"
                spy={true}
                smooth={true}
                 offset={-150}
                duration={100}
                className="nav-link nav-link-transparent"
                activeClass="some-active-class"
              >
                Home
              </ScrollLink>
            </li>

            <li class="nav-item">
              {/* <Link
                class="nav-link nav-link-transparent"
                to="/#how-it-works-section"
              >
                How it works
              </Link> */}
              <ScrollLink
                to="how-it-works-section"
                spy={true}
                smooth={true}
                 offset={-150}
                duration={100}
                className="nav-link nav-link-transparent"
                activeClass="some-active-class"
              >
                how it works
              </ScrollLink>
            </li>
            <li class="nav-item">
            <ScrollLink
                to="explore-section"
                spy={true}
                smooth={true}
                 offset={-130}
                duration={100}
                className="nav-link nav-link-transparent"
                activeClass="some-active-class"
              >
                Explore
              </ScrollLink>
              
            </li>
            <li class="nav-item">
            <ScrollLink
                to="about-us-section"
                spy={true}
                smooth={true}
                 offset={-130}
                duration={100}
                className="nav-link nav-link-transparent"
                activeClass="some-active-class"
              >
                About Us
              </ScrollLink>
            </li>
            <li class="nav-item">
              <Link class="nav-link nav-link-transparent" to="/Login">
                Login
              </Link>
            </li>
            <li class="nav-item sign-up-item">
              <Link
                class="nav-link nav-link-transparent sign-up-link"
                to="/Signup"
                style={{ color: "black" }}
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
