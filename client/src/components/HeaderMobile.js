import React, { useContext, useState, useEffect } from "react";
import AuthContext from "../context";
import { NavLink } from "react-router-dom";
import { Modal } from "antd";
import { Divider } from "antd";
import { useNavigate } from "react-router-dom";
import { getAllUsers } from "../actions/auth";

const HeaderMobile = () => {
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
    <nav className="navbar-fixed-top navbar navbar-inverse menubarMobileWrapper">
      <section className="menubarMobile">
        <NavLink exact="true" to="/">
          <span className="navbar-brand-mobile">LEAD Innovation Tour</span>
        </NavLink>
        <button
          className="navbar-toggler first-button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent20"
          aria-controls="navbarSupportedContent20"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ backgroundColor: "#8C1515" }}
        >
          <div className="animated-icon1">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </section>
      <div
        className="collapse navbar-collapse"
        id="navbarSupportedContent20"
        style={{
          borderColor: "#8C1515",
          marginTop: "5px",
          backgroundColor: "#8C1515",
        }}
      >
        <div class="accordion" id="subMenubarItems">
          <div class="card">
            <div class="card-header" id="headingOne">
              <div
                className="btn btn-link navBarTitleWrapper"
                type="button"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-controls="collapseOne"
              >
                <div className="navLink-text">Sponsoring Company</div>
              </div>
            </div>

            <div
              id="collapseOne"
              className="collapse"
              aria-labelledby="headingOne"
              data-parent="#subMenubarItems"
            >
              <ul>
                <li
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent20"
                  aria-controls="navbarSupportedContent20"
                  className="navLink-text"
                >
                  <NavLink to="/introduction" className="navLink-text">
                    Introduction
                  </NavLink>
                </li>
                <li
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent20"
                  aria-controls="navbarSupportedContent20"
                  className="navLink-text"
                >
                  <NavLink to="/proposed_agenda" className="navLink-text">
                    Proposed Agenda
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          {/*  */}
          <div class="card">
            <div class="card-header" id="headingTwo">
              <div
                class="btn btn-link navBarTitleWrapper"
                type="button"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <div className="navLink-text">Resources</div>
              </div>
            </div>

            <div
              id="collapseTwo"
              class="collapse"
              aria-labelledby="headingTwo"
              data-parent="#subMenubarItems"
            >
              <ul>
                <li
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent20"
                  aria-controls="navbarSupportedContent20"
                  className="navLink-text"
                >
                  <NavLink to="/guide_wifi" className="navLink-text">
                    Wi-Fi & Connectivity
                  </NavLink>
                </li>
                <li
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent20"
                  aria-controls="navbarSupportedContent20"
                  className="navLink-text"
                >
                  <NavLink to="/guide_credit" className="navLink-text">
                    Currency
                  </NavLink>
                </li>
                <li
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent20"
                  aria-controls="navbarSupportedContent20"
                  className="navLink-text"
                >
                  <NavLink to="/guide_weather" className="navLink-text">
                    Weather
                  </NavLink>
                </li>
                <li
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent20"
                  aria-controls="navbarSupportedContent20"
                  className="navLink-text"
                >
                  <NavLink to="/guide_visa" className="navLink-text">
                    Visa Information
                  </NavLink>
                </li>
                <li
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent20"
                  aria-controls="navbarSupportedContent20"
                  className="navLink-text"
                >
                  <NavLink to="/guide_taxfree" className="navLink-text">
                    Tax-free Shopping
                  </NavLink>
                </li>

                <li
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent20"
                  aria-controls="navbarSupportedContent20"
                  className="navLink-text"
                >
                  <NavLink to="/guide_manner" className="navLink-text">
                    Custom & Manners
                  </NavLink>
                </li>
                <li
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent20"
                  aria-controls="navbarSupportedContent20"
                  className="navLink-text"
                >
                  <NavLink to="/guide_storage" className="navLink-text">
                    Luggage Storage & Delivery
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          {/*  */}
          {auth.status ? (
            <>
              <div class="card">
                <div class="card-header" id="headingThree">
                  <div
                    class="btn btn-link navBarTitleWrapper"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    <div className="navLink-text">LEAD Log-in</div>
                  </div>
                </div>

                <Modal
                  title="Are you sure?"
                  open={isModalOpen}
                  onOk={handleOk}
                  onCancel={handleCancel}
                  style={{ textAlign: "center" }}
                ></Modal>

                <div
                  id="collapseThree"
                  class="collapse"
                  aria-labelledby="headingThree"
                  data-parent="#subMenubarItems"
                >
                  <ul>
                    <li
                      data-toggle="collapse"
                      data-target="#navbarSupportedContent20"
                      aria-controls="navbarSupportedContent20"
                      className="navLink-text"
                    >
                      <NavLink to="/leader" className="navLink-text">
                        Welcome LEADers
                      </NavLink>
                    </li>
                    <li
                      data-toggle="collapse"
                      data-target="#navbarSupportedContent20"
                      aria-controls="navbarSupportedContent20"
                      className="navLink-text"
                    >
                      <NavLink to="/logistics" className="navLink-text">
                        Logistics
                      </NavLink>
                    </li>
                    <li
                      data-toggle="collapse"
                      data-target="#navbarSupportedContent20"
                      aria-controls="navbarSupportedContent20"
                      className="navLink-text"
                    >
                      <NavLink to="/hotels" className="navLink-text">
                        Hotels
                      </NavLink>
                    </li>
                    <li
                      data-toggle="collapse"
                      data-target="#navbarSupportedContent20"
                      aria-controls="navbarSupportedContent20"
                      className="navLink-text"
                    >
                      <NavLink to="/community" className="navLink-text">
                        Community
                      </NavLink>
                    </li>
                    {/* <li
                      data-toggle="collapse"
                      data-target="#navbarSupportedContent20"
                      aria-expanded="false"
                      aria-controls="navbarSupportedContent20"
                      className="navLink-text"
                    >
                      <NavLink to="/airport-trasportation" className="navLink-text"
                      >
                        Airport Transportation
                      </NavLink>
                    </li> */}
                    <li
                      data-toggle="collapse"
                      data-target="#navbarSupportedContent20"
                      aria-controls="navbarSupportedContent20"
                      className="navLink-text"
                    >
                      <NavLink to="/schedule" className="navLink-text">
                        Schedule
                      </NavLink>
                    </li>
                    {registeredUsers?.length <= 59 && (
                      <li
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent20"
                        aria-controls="navbarSupportedContent20"
                        className="navLink-text"
                      >
                        <NavLink to="/registerEvent" className="navLink-text">
                          Register for Event
                        </NavLink>
                      </li>
                    )}
                    <li
                      data-toggle="collapse"
                      data-target="#navbarSupportedContent20"
                      aria-controls="navbarSupportedContent20"
                      className="navLink-text"
                    >
                      <NavLink to="/agreement" className="navLink-text">
                        Company Visits
                      </NavLink>
                    </li>

                    <li
                      data-toggle="collapse"
                      data-target="#navbarSupportedContent20"
                      aria-controls="navbarSupportedContent20"
                      className="navLink-text"
                    >
                      <NavLink to="/Survey" className="navLink-text">
                        Survey
                      </NavLink>
                    </li>

                    {/* <li
                      data-toggle="collapse"
                      data-target="#navbarSupportedContent20"
                      aria-controls="navbarSupportedContent20"
                      className="navLink-text"
                    >
                      <NavLink to="/scavenger-hunt" className="navLink-text">
                        Scavenger Hunt
                      </NavLink>
                    </li> */}

                    {data?.role === "Admin" && (
                      <li
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent20"
                        aria-controls="navbarSupportedContent20"
                        className="navLink-text"
                      >
                        <NavLink to="/users" className="navLink-text">
                          User Management
                        </NavLink>
                      </li>
                    )}
                    <Divider
                      style={{
                        backgroundColor: "white",
                        margin: 0,
                        width: "40%",
                        minWidth: "40%",
                      }}
                    />
                    <li
                      data-toggle="collapse"
                      data-target="#navbarSupportedContent20"
                      aria-controls="navbarSupportedContent20"
                      className="navLink-text"
                    >
                      <NavLink className="navLink-text">
                        <button
                          style={{ padding: 0, textAlign: "left" }}
                          className="btn btn-primary"
                          onClick={onLogout}
                        >
                          Log out
                        </button>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          ) : (
            // <DropdownAlumni />
            <div class="card">
              <div class="card-header">
                <div
                  class="btn btn-link"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent20"
                  aria-expanded="false"
                  aria-controls="navbarSupportedContent20"
                >
                  <NavLink to="/signin" className="navLink-text">
                    LEAD Log-in
                  </NavLink>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default HeaderMobile;
