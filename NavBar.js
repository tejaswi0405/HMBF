import React, { useEffect } from "react";
import "./style.css";
import { useAuth0 } from "@auth0/auth0-react";

export default function NavBar() {
  // const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  useEffect(() => {
    let timeoutId;

    if (window.location.pathname === "/admin" && isAuthenticated) {
      // Set timeout to redirect to homepage after 10 minutes
      timeoutId = setTimeout(() => {
        window.location.href = "/";
      }, 10 * 60 * 1000);
    }

    return () => {
      clearTimeout(timeoutId); // Clear timeout on component unmount
    };
  }, [isAuthenticated]);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
        integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
        crossOrigin="anonymous"
      ></link>
      <script
        src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx"
        crossOrigin="anonymous"
      ></script>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          Hotel Management System
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/view">
                View Hotels
              </a>
            </li>
            {isAuthenticated && (
              <li className="nav-item">
                <a className="nav-link" href="/viewprofile">
                  View Profile
                </a>
              </li>
            )}
          </ul>
          {isAuthenticated && (
              <a href='/admin'><button className="access-btn">View Admin Controls</button></a>
            )}
          <form className="form-inline my-2 my-lg-0">
            {!isAuthenticated ? (
              <button className="btn btn-outline-success my-2 my-sm-0" onClick={() => loginWithRedirect()}>
                Log In
              </button>
            ) : (
              <button className="btn btn-outline-danger my-2 my-sm-0" onClick={() => logout({ returnTo: window.location.origin })}>
                Log Out
              </button>
              
            )}
          </form>
          
        </div>
      </nav>
    </>
  );
}
