import React, { useEffect, useState } from "react";
import cash from "../components/img/cash.png";
import { useNavigate } from "react-router-dom";

import { Button, Typography } from "@mui/material";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import DialogBox from "./DialogBox";
import { Loader } from "react-overlay-loader";
import { scavenger, getAllUsers } from "../actions/auth";
import { notification } from "antd";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  p: 4,
  display: "flex",
  flexDirection: "column",
  borderRadius: "2%",

  "@media (max-width: 767px)": {
    width: 350,
  },
};

export default function ScavengerHunt({ footerRef, headerRef }) {
  const navigate = useNavigate();
  const [openForm, setOpenForm] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = React.useState([]);
  const [isRegistered, setIsRegistered] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  if (user?.scavengerHunt?.cohort && user?.scavengerHunt?.name) {
    navigate("/scavenger-payment");
  }
  const allUserData = async () => {
    const userData = await getAllUsers();
    setData(userData?.allUsers);
  };

  const registerUser = () => {
    const userRegister = data.filter((current) => current._id === user._id);

    const user1 = userRegister?.find((current) => current?.scavengerHunt);

    if (user1 === undefined) {
      setIsRegistered(false);
    } else {
      setIsRegistered(true);
    }
  };

  useEffect(() => {
    allUserData();
  }, []);

  useEffect(() => {
    registerUser();
  }, [data]);

  const [scavengerData, setScavengerData] = useState({
    name: "",
    cohort: "",
  });

  const handleDialogOpen = () => {
    setOpenForm(true);
  };

  const ModelHeader = styled.div`
    display: flex;
    justify-content: space-between;
  `;
  const BottomLine = styled.div`
    width: 100%;
    height: 0.9px;
    margin-top: 10px;
    border: 1px solid #c4cfd4;
  `;

  function onInputChange(e) {
    let { name, value } = e.target;
    setScavengerData({ ...scavengerData, [name]: value });
  }

  const handleDialogClose = () => {
    setOpenForm(false);
  };

  const onSubmit = async () => {
    registerUser();

    if (scavengerData.name === "") {
      notification.open({
        message: "Error",
        description: "Name field is required!",
      });

      return;
    }

    if (scavengerData.cohort === "") {
      notification.open({
        message: "Error",
        description: "Cohort field is required!",
      });

      return;
    }

    if (isRegistered === true) {
      notification.open({
        message: "Error",
        description: "You have already Register.",
      });
      navigate("/scavenger-payment");

      return;
    }

    setLoading(true);
    const newUser = {
      ...user,
      scavengerHunt: { ...user?.scavengerHunt, ...scavengerData },
    };

    await scavenger({ scavengerData, id: user._id })
      .then((res) => {
        setLoading(false);
        if (!res.success) {
          notification.open({
            message: "Error",
            description: res.msg,
          });
        } else {
          localStorage.setItem("user", JSON.stringify(newUser));
          notification.open({
            message: "Success!",
            description: res.msg,
          });
          navigate("/scavenger-payment");
        }
      })
      .catch((err) => console.log("err", err));
  };

  const modalContent = (
    <Box sx={style}>
      <ModelHeader>
        <Typography
          variant="h6"
          component="h2"
          style={{ color: "#163356", fontSize: "22px", fontWeight: "600" }}
        >
          Register for ScavengerHunt
        </Typography>
        <CloseIcon onClick={handleDialogClose} style={{ cursor: "pointer" }} />
      </ModelHeader>
      <BottomLine />
      <div className="field_wrapper1">
        <Typography
          style={{ color: "#000000", fontWeight: "600", fontSize: "14px" }}
        >
          Name
        </Typography>
        <TextField
          margin="normal"
          style={{
            width: "70%",
            margin: "0px",
          }}
          name="name"
          size="small"
          inputProps={{ style: { fontSize: 14 } }}
          value={scavengerData.name}
          onChange={(e) => onInputChange(e)}
        />
      </div>
      <div className="field_wrapper1">
        <Typography
          style={{
            whiteSpace: "nowrap",
            color: "#000000",
            fontWeight: "600",
            fontSize: "14px",
          }}
        >
          Cohort
        </Typography>
        <TextField
          margin="normal"
          style={{ width: "70%", margin: "0px" }}
          type="text"
          size="small"
          name="cohort"
          inputProps={{ style: { fontSize: 14 } }}
          value={scavengerData.cohort}
          onChange={(e) => onInputChange(e)}
        />
      </div>
      <Button
        variant="contained"
        style={{
          alignSelf: "center",
          height: "40px",
          fontSize: "14px",
          marginTop: "15px",
          width: "50%",
          background: "#8C1515",
          fontWeight: "bold",
        }}
        onClick={onSubmit}
      >
        Register
      </Button>
    </Box>
  );

  const customHeight = headerRef?.current?.clientHeight + footerRef?.current?.clientHeight;

  return (
    <div
      id="details"
      className="scavengerWrapper"
      style={{ height: `calc(100vh - ${customHeight - 4}px)` }}
    >
      <h1 style={{ color: "#ffffff", textAlign: "center", fontSize: "4.5rem" }}>
        LEAD Scavenger Hunt - Tokyo Japan
      </h1>
      <div className="scavengerDetails">
        <div className="scavengerSection">
          <img src={cash} alt="cash" className="scavengerSectionImage"></img>
        </div>
        <div className="scavengerCenterSection">
          <h2 style={{ fontSize: '42px', marginBottom: '10px' }} onClick={handleDialogOpen}>- REGISTER -</h2>
        </div>
        <div className="scavengerSection" style={{ display: "flex", alignItems: "center" }}>
          <div className="scavengerBody">
            <p>
              Now that you have registered for the innovation tour, we would
              like to share optional activity for you to
              <br></br>
              <ul>
                <li>Learn about Tokyo Culture</li>
                <li>Learn about Unique Things available in Japan</li>
                <li>Learn to get around in Japan </li>
                <li>Learn to interact with local Citizens</li>
              </ul>
              <br></br>
              <p>
                Entry Fee: $25 (Not including the credit card fees) - non
                refundable
              </p>
              <p>
                Max. num of people: 20 (Note if there is not too much interest,
                we will refund the fees 100%)
              </p>
            </p>
          </div>
        </div>
      </div>
      <DialogBox
        open={openForm}
        onClose={handleDialogClose}
        content={modalContent}
      />
      <Loader fullPage loading={isLoading} />
    </div>
  );
}
