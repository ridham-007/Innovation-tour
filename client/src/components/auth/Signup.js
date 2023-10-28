import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { notification } from "antd";
import { LoadingOverlay, Loader } from "react-overlay-loader";
import "react-overlay-loader/styles.css";

function SignUp({ register }) {
  const [isLoading, setLoading] = useState(false);
  const [state, setState] = useState({
    name: "",
    email: "",
    country: "",
    address: "",
    password: "",
    phonenumber: "",
  });
  const navigate = useNavigate();
  function onInputChange(e) {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });

  }
  function onRegisterClick() {
    if (state.name === "") {
      notification.open({
        message: "Error",
        description: "Name field is required!",
      });

      return;
    }

    if (state.email === "") {
      notification.open({
        message: "Error",
        description: "Email field is required!",
      });

      return;
    }

    if (state.country === "") {
      notification.open({
        message: "Error",
        description: "Country field is required!",
      });
      return;
    }
    if (state.address === "") {
      notification.open({
        message: "Error",
        description: "Address field is required!",
      });
      return;
    }
    if (state.phonenumber === "") {
      notification.open({
        message: "Error",
        description: "Phone Number field is required!",
      });
      return;
    }
    if (state.password === "") {
      notification.open({
        message: "Error",
        description: "Password field is required!",
      });
      return;
    }
    setLoading(true);
    register(state)
      .then((res) => {
        setLoading(false);
        if (!res.success) {
          notification.open({
            message: "Error",
            description: res.msg,
          });
        } else {
          notification.open({
            message: "Success!",
            description: res.msg,
          });
          navigate("/login");
        }
      })
      .catch((err) => console.log("err", err));
  }

  return (
    <div class="auth-container">
      <div class="auth-wrapper">
        <h2 class="mt-3">Sign-Up</h2>

        <div
          class="mt-3"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <label>Name:</label>
          <input
            name="name"
            value={state.name}
            type="text"
            class="form-control"
            onChange={(e) => onInputChange(e)}
            placeholder="Please enter name"
            style={{ width: "70%" }}
            validation={{
              required: {
                value: true,
                message: "required",
              },
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
          class="mt-3"
        >
          <label>Email:</label>
          <input
            name="email"
            value={state.email}
            type="email"
            class="form-control"
            onChange={(e) => onInputChange(e)}
            style={{ width: "70%" }}
            placeholder="please enter email"
          />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
          class="mt-3"
        >
          <label>Country:</label>
          <input
            name="country"
            value={state.country}
            type="text"
            class="form-control"
            onChange={(e) => onInputChange(e)}
            style={{ width: "70%" }}
            placeholder="please enter country"
          />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
          class="mt-3"
        >
          <label>Address:</label>
          <input
            name="address"
            value={state.address}
            type="text"
            class="form-control"
            onChange={(e) => onInputChange(e)}
            style={{ width: "70%" }}
            placeholder="please enter address"
          />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
          class="mt-3"
        >
          <label>Phone:</label>
          <input
            name="phonenumber"
            value={state.phonenumber}
            type="text"
            class="form-control"
            onChange={(e) => onInputChange(e)}
            style={{ width: "70%" }}
            placeholder="please enter phone number"
          />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
          class="mb-3 mt-3"
        >
          <label>Password:</label>
          <input
            name="password"
            value={state.password}
            type="password"
            class="form-control"
            onChange={(e) => onInputChange(e)}
            style={{ width: "70%" }}
            placeholder="please enter password"
          />
        </div>

        <div class="d-grid mt-3 mb-3" style={{ textAlign: 'center' }}>
          <button class="btn btn-primary" onClick={onRegisterClick}>
            Sign-Up
          </button>
        </div>
        <p class="forgot-password text-right">
          Already registered. <a href="/#/signin">Sign-In?</a>
        </p>
      </div>
      <Loader fullPage loading={isLoading} />
    </div>
  );
}

export default SignUp;
