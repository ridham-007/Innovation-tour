import React, { useContext, useState, useEffect } from "react";
import { Modal } from "antd";
import DropdownButton from "react-bootstrap/DropdownButton";
import { NavLink } from "react-router-dom";
import { Divider } from "antd";
import AuthContext from "../context";
import { useNavigate } from "react-router-dom";
import { getAllUsers } from "../actions/auth";

function DropdownAlumni() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState([]);
  const [countUserData, setCountUserData] = useState([]);
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const onLogout = () => {
    setIsModalOpen(true);
  };
  function handleCancel() {
    setIsModalOpen(false);
  }
  function handleOk() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    auth.setStatus(false);
    navigate("/");
    setIsModalOpen(false);
  }

  const getUserDetail = async () => {
    const userData = await JSON.parse(localStorage.getItem("user"));
    setData(userData);
  };

  const allUserData = async () => {
    const userData = await getAllUsers();
    setCountUserData(userData?.allUsers);
  };

  useEffect(() => {
    getUserDetail();
    allUserData();
  }, []);

  const registeredUsers =
    countUserData?.length > 0
      ? countUserData?.filter((curUser) => curUser?.isRegistered)
      : [];

  return (
    <>
      <Modal
        title="Are you sure?"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        style={{ textAlign: "center" }}
      ></Modal>
      <DropdownButton id="dropdown-basic-button" title="LEAD Log-in">
        <NavLink
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent20"
          aria-controls="navbarSupportedContent20"
          aria-expanded="false"
          aria-label="Toggle navigation"
          to="/leader"
          className="dropdown-size dropdown-text"
        >
          Welcome LEADers
        </NavLink>
        <br></br>
        <NavLink
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent20"
          aria-controls="navbarSupportedContent20"
          aria-expanded="false"
          aria-label="Toggle navigation"
          to="/logistics"
          className="dropdown-size dropdown-text"
        >
          Logistics
        </NavLink>
        <br></br>
        <NavLink
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent20"
          aria-controls="navbarSupportedContent20"
          aria-expanded="false"
          aria-label="Toggle navigation"
          to="/hotels"
          className="dropdown-size dropdown-text"
        >
          Hotels
        </NavLink>
        <br></br>
        <NavLink
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent20"
          aria-controls="navbarSupportedContent20"
          aria-expanded="false"
          aria-label="Toggle navigation"
          to="/community"
          className="dropdown-size dropdown-text"
        >
          Community
        </NavLink>
        <br></br>
        {/* <NavLink
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent20"
          aria-controls="navbarSupportedContent20"
          aria-expanded="false"
          aria-label="Toggle navigation"
          to="/airport-trasportation"
          className="dropdown-size dropdown-text"
        >
          Airport Transportation
        </NavLink>
        <br></br> */}
        {/* <NavLink
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent20"
          aria-controls="navbarSupportedContent20"
          aria-expanded="false"
          aria-label="Toggle navigation"
          to="/deposit"
          className="dropdown-size"
        >
          Deposit
        </NavLink>
        <br></br> */}
        <NavLink
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent20"
          aria-controls="navbarSupportedContent20"
          aria-expanded="false"
          aria-label="Toggle navigation"
          to="/schedule"
          className="dropdown-size dropdown-text"
        >
          Schedule
        </NavLink>
        <br></br>
        {registeredUsers?.length <= 59 && (
          <>
            <NavLink
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent20"
              aria-controls="navbarSupportedContent20"
              aria-expanded="false"
              aria-label="Toggle navigation"
              to="/registerEvent"
              className="dropdown-size dropdown-text"
            >
              Register for Event
            </NavLink>
            <br></br>
          </>
        )}
        <NavLink
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent20"
          aria-controls="navbarSupportedContent20"
          aria-expanded="false"
          aria-label="Toggle navigation"
          to="/agreement"
          className="dropdown-size dropdown-text"
        >
          Company Visits
        </NavLink>
        <br></br>
        {/* <NavLink
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent20"
          aria-controls="navbarSupportedContent20"
          aria-expanded="false"
          aria-label="Toggle navigation"
          to="/scavenger-hunt"
          className="dropdown-size"
        >
          Scavenger Hunt
        </NavLink>
        <br></br> */}
        {data?.role === "Admin" && (
          <>
            <NavLink
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent20"
              aria-controls="navbarSupportedContent20"
              aria-expanded="false"
              aria-label="Toggle navigation"
              to="/users"
              className="dropdown-size dropdown-text"
            >
              User Management
            </NavLink>
            <br></br>
          </>
        )}
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

        <NavLink
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent20"
          aria-controls="navbarSupportedContent20"
          aria-expanded="false"
          aria-label="Toggle navigation"
          to="/Survey"
          className="dropdown-size dropdown-text"
        >
          Survey
        </NavLink>

        <Divider style={{ backgroundColor: "white", margin: 0 }} />

        <NavLink
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent20"
          aria-controls="navbarSupportedContent20"
          aria-expanded="false"
          aria-label="Toggle navigation"
          className="dropdown-size dropdown-text"
        >
          <button
            style={{ padding: 0, textAlign: "left" }}
            className="btn btn-primary"
            onClick={onLogout}
          >
            Log out
          </button>
        </NavLink>
      </DropdownButton>
    </>
  );
}

export default DropdownAlumni;
