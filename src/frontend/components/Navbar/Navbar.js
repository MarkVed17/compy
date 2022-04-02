import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AUTH_TOKEN, USERNAME } from "../../constants/authConstants";
import { useAuth } from "../../contexts";
import "./Navbar.css";

function Navbar() {
  const [dropDownMenu, setDropDownMenu] = useState(false);
  const { auth, setAuth } = useAuth();
  const location = useLocation();

  const signOutHandler = () => {
    localStorage.removeItem(AUTH_TOKEN);
    localStorage.removeItem(USERNAME);
    setAuth((auth) => ({
      ...auth,
      status: false,
      token: null,
      userName: null,
    }));
  };

  return (
    <>
      <header className="header-nav nav-search">
        <NavLink to="/" className="header-logo-link">
          <img
            className="header-logo-img"
            src="/assets/Logos/compy-logo.svg"
            alt="jurassic-park-logo"
          />
        </NavLink>

        {location.pathname !== "/" && (
          <div className="std-search">
            <input
              type="text"
              placeholder="Search..."
              className="input standard nav-searchbar"
            />
            <button className="btn btn-brand btn-accent search-btn nav-searchbar-btn">
              <span className="material-icons nav-search-icon"> search </span>
            </button>
          </div>
        )}

        <div className="header-nav-links">
          <nav>
            <ul>
              <li>
                <span
                  className="header-account-link"
                  onClick={() => setDropDownMenu(!dropDownMenu)}
                >
                  {auth.userName ? `Hi, ${auth.userName}` : "Account"}
                </span>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {dropDownMenu &&
        (!auth.status ? (
          <div className="dropDown">
            <NavLink
              to="/signin"
              className={({ isActive }) =>
                isActive ? "header-link-active" : "header-link"
              }
              onClick={() => setDropDownMenu(!dropDownMenu)}
            >
              Sign-In
            </NavLink>
            <NavLink
              to="/signup"
              className={({ isActive }) =>
                isActive ? "header-link-active" : "header-link"
              }
              onClick={() => setDropDownMenu(!dropDownMenu)}
            >
              Sign-Up
            </NavLink>
          </div>
        ) : (
          <div className="dropDown">
            <NavLink
              to="/signin"
              className={({ isActive }) =>
                isActive ? "header-link-active" : "header-link"
              }
              onClick={signOutHandler}
            >
              Logout
            </NavLink>
          </div>
        ))}
    </>
  );
}

export { Navbar };
