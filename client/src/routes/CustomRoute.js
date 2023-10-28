import React, { useEffect, useRef } from "react";
import MediaQuery from "react-responsive";
import { Routes, Route, useLocation } from "react-router-dom";

import Home from "../components/Home";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeaderMobile from "../components/HeaderMobile";

import Logistics from "../components/Logistics";
import LogisticsMobile from "../components/LogisticsMobile";
import Deposit from "../components/Deposit";
import Schedule from "../components/Schedule";
import WelcomeLeader from "../components/WelcomeLeader";
import DepositMobile from "../components/DepositMobile";
import CostConscious from "../components/CostConscious";
import CostConsciousMobile from "../components/CostConsciousMobile";
import TimeConscious from "../components/TimeConscious";
import TimeConsciousMobile from "../components/TimeConsciousMobile";
import CommerceDisclosure from "../components/CommerceDisclosure";
import Survey from "../components/Survey";

import Introduction from "../components/companies/Introduction";
import Sponsorship from "../components/companies/Sponsorship";
import ProposedAgenda from "../components/companies/ProposedAgenda";

import GuideWifi from "../components/guide/GuideWifi";
import GuideCredit from "../components/guide/GuideCredit";
import GuideWeather from "../components/guide/GuideWeather";
import GuideVisa from "../components/guide/GuideVisa";
import GuideTaxfree from "../components/guide/GuideTaxfree";
import GuideManner from "../components/guide/GuideManner";
import GuideStorage from "../components/guide/GuideStorage";
import Login from "../containers/Login";
import LoginMobile from "../containers/LoginMobile";
import SignUp from "../containers/Signup";
import SignUpMobile from "../containers/SignupMobile";
import AuthRoute from "./AuthRoute";
import UserManage from "../components/UserManage";
import HotelUpdate from "../components/HotelUpdate";
import HotelUpdateMobile from "../components/HotelUpdateMobile";
import RegisterEvent from "../components/RegisterEvent";
import TeaCeremony from "../components/TeaCeremony";
import Airport from "../components/Airport";
import ArrivalTrain from "../components/tansportation/ArrivalTrain";
import TokyoTrain from "../components/tansportation/TokyoTrain";
import ArrivalBus from "../components/tansportation/ArrivalBus";
import TokyoBus from "../components/tansportation/TokyoBus";
import DayEvent from "../components/DayEvent";
import DayEventMobile from "../components/DayEventMobile";
import BookMeeting from "../components/BookMeeting";
import ScavengerPayment from "../components/ScavengerPayment";
import ScavengerPaymentMobile from "../components/ScavengerPaymentMobile";
import AgreementForm from "../components/AgreementForm";
import Scheduler from "../components/Scheduler";
import Community from "../components/Community";

const CustomRoute = () => {
  const location = useLocation();
  const headerRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {}, [location.pathname]);

  return (
    <>
      <MediaQuery query="(min-width: 767px)">
        <div style={{ position: "relative" }}>
          <div
            className={
              location.pathname === "/scavenger-hunt"
                ? "pc_tablet1"
                : "pc_tablet"
            }
          >
            <Header headerRef={headerRef} />
            <Routes>
              <Route exact="true" path="/" element={<Home />} />
              <Route
                exact={true}
                path="/email_verified"
                element={<Home emailVerified={true} />}
              />

              <Route path="/signin" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/introduction" element={<Introduction />} />
              <Route path="/sponsorship" element={<Sponsorship />} />
              <Route path="/proposed_agenda" element={<ProposedAgenda />} />
              <Route path="/guide_credit" element={<GuideCredit />} />
              <Route path="/guide_wifi" element={<GuideWifi />} />
              <Route path="/guide_weather" element={<GuideWeather />} />
              <Route path="/guide_visa" element={<GuideVisa />} />
              <Route path="/guide_taxfree" element={<GuideTaxfree />} />
              <Route path="/guide_manner" element={<GuideManner />} />
              <Route path="/guide_storage" element={<GuideStorage />} />
              <Route
                path="/deposit"
                element={
                  <AuthRoute>
                    <Deposit />
                  </AuthRoute>
                }
              />
              <Route
                path="/leader"
                element={
                  <AuthRoute>
                    <WelcomeLeader />
                  </AuthRoute>
                }
              />
              <Route
                path="/schedule"
                element={
                  <AuthRoute>
                    {/* <Schedule /> */}
                    <Scheduler />
                  </AuthRoute>
                }
              />
              <Route
                path="/hotels"
                element={
                  <AuthRoute>
                    <HotelUpdate />
                  </AuthRoute>
                }
              />
              <Route
                path="/registerEvent"
                element={
                  <AuthRoute>
                    <RegisterEvent />
                  </AuthRoute>
                }
              />
              <Route
                path="/agreement"
                element={
                  <AuthRoute>
                    <AgreementForm />
                  </AuthRoute>
                }
              />
              <Route
                path="/bookMeeting"
                element={
                  <AuthRoute>
                    <BookMeeting />
                  </AuthRoute>
                }
              />
              <Route
                path="/users"
                element={
                  <AuthRoute>
                    <UserManage />
                  </AuthRoute>
                }
              />
              <Route
                path="/commerce-disclosure"
                element={<CommerceDisclosure />}
              />
              <Route path="/tea-ceremony" element={<TeaCeremony />} />
              <Route path="/airport-trasportation" element={<Airport />} />
              <Route path="/arrival-train-narita" element={<ArrivalTrain />} />
              <Route path="/arrival-train-haneda" element={<TokyoTrain />} />
              <Route path="/arrival-bus-narita" element={<ArrivalBus />} />
              <Route path="/arrival-bus-haneda" element={<TokyoBus />} />
              <Route
                path="/logistics"
                element={
                  <AuthRoute>
                    <Logistics />
                  </AuthRoute>
                }
              />
              <Route path="/Survey" element={<Survey />} />

              {/* <Route
                                path="/scavenger-hunt"
                                element={
                                    <AuthRoute>
                                        <ScavengerHunt headerRef={headerRef} footerRef={footerRef} />
                                    </AuthRoute>
                                }
                            /> */}
              <Route
                path="/scavenger-payment"
                element={
                  <AuthRoute>
                    <ScavengerPayment />
                  </AuthRoute>
                }
              />
              <Route
                path="/day-event"
                element={
                  <AuthRoute>
                    <DayEvent />
                  </AuthRoute>
                }
              />
              <Route
                path="/cost-conscious"
                element={
                  <AuthRoute>
                    <CostConscious />
                  </AuthRoute>
                }
              />
              <Route
                path="/time-conscious"
                element={
                  <AuthRoute>
                    <TimeConscious />
                  </AuthRoute>
                }
              />
              <Route
                path="/community"
                element={
                  <AuthRoute>
                    <Community />
                  </AuthRoute>
                }
              />
            </Routes>
            <Footer footerRef={footerRef}></Footer>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery query="(max-width: 766px)">
        <div className="wrapper, mobile">
          <nav className="navbar navbar-fixed-top navbar-inverse">
            <div className="container-fluid">
              <HeaderMobile />
            </div>
          </nav>
          <Routes>
            <Route exact={true} path="/" element={<Home />} />
            <Route
              exact={true}
              path="/email_verified"
              element={<Home emailVerified={true} />}
            />
            <Route path="/signin/" element={<LoginMobile />} />
            <Route path="/signup" element={<SignUpMobile />} />
            <Route path="/introduction" element={<Introduction />} />
            <Route path="/sponsorship" element={<Sponsorship />} />
            <Route path="/proposed_agenda" element={<ProposedAgenda />} />
            <Route path="/guide_credit" element={<GuideCredit />} />
            <Route path="/guide_wifi" element={<GuideWifi />} />
            <Route path="/guide_weather" element={<GuideWeather />} />
            <Route path="/guide_visa" element={<GuideVisa />} />
            <Route path="/guide_taxfree" element={<GuideTaxfree />} />
            <Route path="/guide_manner" element={<GuideManner />} />
            <Route path="/guide_storage" element={<GuideStorage />} />
            <Route
              path="/commerce-disclosure"
              element={<CommerceDisclosure />}
            />
            <Route
              path="/deposit"
              element={
                <AuthRoute>
                  <DepositMobile />
                </AuthRoute>
              }
            />
            <Route
              path="/leader"
              element={
                <AuthRoute>
                  <WelcomeLeader />
                </AuthRoute>
              }
            />
            <Route
              path="/schedule"
              element={
                <AuthRoute>
                  {/* <Schedule /> */}
                  <Scheduler />
                </AuthRoute>
              }
            />
            <Route
              path="/hotels"
              element={
                <AuthRoute>
                  <HotelUpdateMobile />
                </AuthRoute>
              }
            />
            <Route
              path="/registerEvent"
              element={
                <AuthRoute>
                  <RegisterEvent />
                </AuthRoute>
              }
            />
            <Route
              path="/bookMeeting"
              element={
                <AuthRoute>
                  <BookMeeting />
                </AuthRoute>
              }
            />
            <Route
              path="/agreement"
              element={
                <AuthRoute>
                  <AgreementForm />
                </AuthRoute>
              }
            />
            <Route
              path="/users"
              element={
                <AuthRoute>
                  <UserManage />
                </AuthRoute>
              }
            />
            <Route path="/tea-ceremony" element={<TeaCeremony />} />
            <Route path="/airport-trasportation" element={<Airport />} />
            <Route path="/arrival-train-narita" element={<ArrivalTrain />} />
            <Route path="/arrival-train-haneda" element={<TokyoTrain />} />
            <Route path="/arrival-bus-narita" element={<ArrivalBus />} />
            <Route path="/arrival-bus-haneda" element={<TokyoBus />} />
            <Route
              path="/logistics"
              element={
                <AuthRoute>
                  <LogisticsMobile />
                </AuthRoute>
              }
            />
            <Route path="/Survey" element={<Survey />} />
            {/* <Route
                            path="/scavenger-hunt"
                            element={
                                <AuthRoute>
                                    <ScavengerHuntMobile />
                                </AuthRoute>
                            }
                        /> */}
            <Route
              path="/scavenger-payment"
              element={
                <AuthRoute>
                  <ScavengerPaymentMobile />
                </AuthRoute>
              }
            />
            <Route
              path="/day-event"
              element={
                <AuthRoute>
                  <DayEventMobile />
                </AuthRoute>
              }
            />
            <Route
              path="/cost-conscious"
              element={
                <AuthRoute>
                  <CostConsciousMobile />
                </AuthRoute>
              }
            />
            <Route
              path="/time-conscious"
              element={
                <AuthRoute>
                  <TimeConsciousMobile />
                </AuthRoute>
              }
            />
            <Route
              path="/community"
              element={
                <AuthRoute>
                  <Community />
                </AuthRoute>
              }
            />
          </Routes>
          <Footer></Footer>
        </div>
      </MediaQuery>
    </>
  );
};

export default CustomRoute;
