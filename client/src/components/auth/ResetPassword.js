import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoadingOverlay, Loader } from "react-overlay-loader";
import "react-overlay-loader/styles.css";
import { notification, Modal } from "antd";

function ResetPassword({ login, resendEmail }) {
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [state, setState] = useState({
    currentpassword: "",
    newpassword: "",
    confirmpassword: "",
  });

  function onInputChange(e) {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  }

  const handleResetPassword = () => {
    if (state.currentpassword === "") {
      notification.open({
        message: "Error",
        description: "Current password field is required!",
      });
      return;
    }
    if (state.newpassword === "") {
      notification.open({
        message: "Error",
        description: "New password field is required!",
      });
      return;
    }
    if (state.confirmpassword === "") {
      notification.open({
        message: "Error",
        description: "Confirm password field is required!",
      });
      return;
    }
    if (state.newpassword !== state.confirmpassword) {
      notification.open({
        message: "Error",
        description: "New passwords do not match",
      });
      return;
    }else{
      setLoading(true);
    }
  
  };
  
  return (
    <div className="auth-container">
      <div class="auth-wrapper ">
        <h2>Reset password</h2>

        <div
          className="mb-3"
          value={state.currentpassword}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <label>Currant Password:</label>
          <input
            name="currentpassword"
            type="password"
            className="form-control"
            onChange={(e) => onInputChange(e)}
            style={{ width: "70%" }}
            placeholder="Enter Currant Password"
          />
        </div>

        <div
          className="mb-3"
          value={state.newpassword}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <label>New Password:</label>
          <input
            name="newpassword"
            type="password"
            className="form-control"
            onChange={(e) => onInputChange(e)}
            style={{ width: "70%" }}
            placeholder="Enter New Password"
          />
        </div>

        <div
          className="mb-3"
          value={state.confirmpassword}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <label>Confirm Password:</label>
          <input
            name="confirmpassword"
            type="password"
            className="form-control"
            onChange={(e) => onInputChange(e)}
            style={{ width: "70%" }}
            placeholder="Re-Enter new Password"
          />
        </div>

        <div className="d-grid" style={{ textAlign: "center" }}>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleResetPassword}
          >
            Reset password
          </button>
        </div>
        <p className="forgot-password text-right">
          go to <a href="#/signin">Sign-In</a>
        </p>
      </div>
      <Loader fullPage loading={isLoading} />
    </div>
  );
}

export default ResetPassword;