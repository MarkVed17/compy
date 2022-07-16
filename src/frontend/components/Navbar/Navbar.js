import React, { useRef, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AUTH_TOKEN, USERNAME } from "../../constants/authConstants";
import { useAuth } from "../../contexts";
import { Filters } from "../../components";
import "./Navbar.css";
import { useOnClickOutside } from "../../hooks";

function Navbar() {
  const [dropDownMenu, setDropDownMenu] = useState(false);
  const [filtersMenu, setFiltersMenu] = useState(false);
  const { auth, setAuth } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

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

  const ref = useRef();
  useOnClickOutside(ref, () => setDropDownMenu(false));

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
            <button
              className="btn btn-brand btn-accent search-btn nav-searchbar-btn"
              onClick={() => {
                setFiltersMenu(!filtersMenu);
                !filtersMenu && navigate("/search");
              }}
              title="Open Filters Modal"
            >
              <span className="material-icons nav-search-icon"> tune </span>
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
      {filtersMenu && location.pathname === "/search" && <Filters />}
      {dropDownMenu &&
        (!auth.status ? (
          <div ref={ref} className="dropDown">
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
          <div ref={ref} className="dropDown">
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
