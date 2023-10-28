import DropdownButton from "react-bootstrap/DropdownButton";
import { NavLink } from "react-router-dom";

function DropdownGuide() {
  return (
    <DropdownButton id="dropdown-basic-button" title="Resources">
      <NavLink
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent20"
        aria-controls="navbarSupportedContent20"
        aria-expanded="false"
        aria-label="Toggle navigation"
        to="/guide_wifi"
        className="dropdown-size dropdown-text"
      >
        Wi-Fi & Connectivity
      </NavLink>
      <br></br>
      <NavLink
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent20"
        aria-controls="navbarSupportedContent20"
        aria-expanded="false"
        aria-label="Toggle navigation"
        to="/guide_credit"
        className="dropdown-size dropdown-text"
      >
        Currency
      </NavLink>
      <br></br>
      <NavLink
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent20"
        aria-controls="navbarSupportedContent20"
        aria-expanded="false"
        aria-label="Toggle navigation"
        to="/guide_weather"
        className="dropdown-size dropdown-text"
      >
        Weather
      </NavLink>
      <br></br>
      <NavLink
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent20"
        aria-controls="navbarSupportedContent20"
        aria-expanded="false"
        aria-label="Toggle navigation"
        to="/guide_visa"
        className="dropdown-size dropdown-text"
      >
        Visa Information
      </NavLink>
      <br></br>
      <NavLink
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent20"
        aria-controls="navbarSupportedContent20"
        aria-expanded="false"
        aria-label="Toggle navigation"
        to="/guide_taxfree"
        className="dropdown-size dropdown-text"
      >
        Tax-free Shopping
      </NavLink>
      <br></br>
      <NavLink
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent20"
        aria-controls="navbarSupportedContent20"
        aria-expanded="false"
        aria-label="Toggle navigation"
        to="/guide_manner"
        className="dropdown-size dropdown-text"
      >
        Custom & Manners
      </NavLink>
      <br></br>
      <NavLink
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent20"
        aria-controls="navbarSupportedContent20"
        aria-expanded="false"
        aria-label="Toggle navigation"
        to="/guide_storage"
        className="dropdown-size dropdown-text"
      >
        Luggage Storage & Delivery
      </NavLink>
    </DropdownButton>
  );
}

export default DropdownGuide;
