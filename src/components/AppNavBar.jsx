import React from "react";
import { Link } from "react-router-dom";

const AppNavBar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark fw-bold">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            Trivia Questions App
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ms-auto">
              <Link class="nav-link active" aria-current="page" to="/">
                Home
              </Link>
              <Link class="nav-link disabled" to="/">
                Features
              </Link>
              <Link class="nav-link disabled" to="/">
                Pricing
              </Link>
              <Link class="nav-link disabled" to="/">
                Disabled
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default AppNavBar;
