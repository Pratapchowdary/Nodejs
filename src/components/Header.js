import React from "react";
import {Outlet, Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link className="nav-link active" to="/even">
        Even
      </Link>
      <Link className="nav-link active" to="/contact">
        Contacts
      </Link>
      <Link className="nav-link active" to="/game">
        NumberGame
      </Link>
      <Link className="nav-link active" to="/counter">
        Counter
      </Link>
        <Link className="nav-link active" to="/login">
          Login
        </Link>
        <Link className="nav-link active" to="/registration">
          Registration
        </Link>
      </div>
    </div>
  </div>
</nav>
    </>
    // <div className="d-flex bg-light justify-content-center text-center">
    //   <Link className="mr-5 p-3 text-success" to="/even">
    //     Even
    //   </Link>
    //   <Link className="ml-5 p-3 text-success" to="/contact">
    //     Contacts
    //   </Link>
    //   <Link className="nav-link active" to="/game">
    //     NumberGame
    //   </Link>
    //   <Link className="nav-link active" to="/counter">
    //     Counter
    //   </Link>
    //     <Link className="nav-link active" to="/login">
    //       Login
    //     </Link>
    //     <Link className="nav-link active" to="/registration">
    //       Registration
    //     </Link>
        
    //   <Outlet />
    // </div>
  );
}
