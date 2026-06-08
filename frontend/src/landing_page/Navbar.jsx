import React from 'react';
import { Link } from 'react-router-dom'; // we should use router link instead of anchor tag

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bglight border-bottom">
      <div class="container p-2">
        <Link class="navbar-brand" to="/">
          <img src="media/images/logo.svg" alt="logo" style={{ width: "25%" }} />
        </Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="d-flex" role="search">
            <ul class="navbar-nav  mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active text-muted" aria-current="page" to="/signup">Signup</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active text-muted" to="/about">About</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active text-muted" to="/products">Products</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active text-muted" to="/pricing">Pricing</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active text-muted" to="/support">Support</Link>
              </li>
              {/* hamburger menu */}
              {/* <li class="nav-item">
                <a class="nav-link active text-muted" href="#"><i class="fa-solid fa-bars"></i></a>
              </li> */}

            </ul>

          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;