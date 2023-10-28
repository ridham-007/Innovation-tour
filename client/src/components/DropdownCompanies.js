import React from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import { NavLink } from "react-router-dom";

function DropdownCompanies() {
  return (
    <>
      <div>
        <DropdownButton id="dropdown-basic-button" title="Sponsoring company">
          <NavLink
            to="/introduction"
            className="dropdown-text"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent20"
            aria-controls="navbarSupportedContent20"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Introduction
          </NavLink>
          <br></br>
          {/* 
      <NavLink to="/sponsorship" className="dropdown-text">Sponsorship</NavLink><br></br>
      */}
          <NavLink
            to="/proposed_agenda"
            className="dropdown-text"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent20"
            aria-controls="navbarSupportedContent20"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Proposed Agenda
          </NavLink>
        </DropdownButton>
      </div>
    </>
  );
}

export default DropdownCompanies;
