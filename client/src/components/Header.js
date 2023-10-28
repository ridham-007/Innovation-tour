import React, { useContext } from "react";
import DropdownCompanies from "./DropdownCompanies";
import DropdownGuide from "./DropdownGuide";
import DropdownAlumni from "./DropdownAlumni";
import DropdownButton from "react-bootstrap/DropdownButton";

import { NavLink } from "react-router-dom";
import AuthContext from "../context";

function Header({ headerRef }) {
  const auth = useContext(AuthContext);
  return (
    <nav
      className="navbar-fixed-top navbar navbar-inverse"
      style={{ border: "none" }}
      ref={headerRef}
    >
      <div className="container-fluid">
        <div className="navbar-header">
          <NavLink exact="true" to="/">
            <span className="navbar-brand">LEAD Innovation Tour</span>
          </NavLink>
        </div>
        <ul
          className="nav navbar-nav navbar-right"
          style={{ alignItems: "center" }}
        >
          <li>
            <DropdownCompanies />
          </li>
          <li>
            <DropdownGuide />
          </li>
          {auth.status ? (
            <>
              <li>
                <DropdownAlumni />
              </li>
            </>
          ) : (
            <li>
              <DropdownButton id="dropdown-basic-button" title="LEAD Log-in">
                <NavLink
                  to="/signin"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent20"
                  aria-controls="navbarSupportedContent20"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  className="dropdown-text"
                  style={{ fontSize: "1.7rem", lineHeight: "21px" }}
                >
                  LEAD Log-in
                </NavLink>
                <br />
                {/* <NavLink
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent20"
                  aria-controls="navbarSupportedContent20"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  to="/commerce-disclosure"
                  className="dropdown-size"
                >
                  Commerce-Disclosure
                </NavLink> */}
              </DropdownButton>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
export default Header;
