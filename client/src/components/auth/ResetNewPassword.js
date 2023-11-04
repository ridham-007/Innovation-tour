import React, { useContext, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { notification, Modal } from "antd";
import { LoadingOverlay, Loader } from "react-overlay-loader";
import "react-overlay-loader/styles.css";
import { resetPasswordEmail } from "../../actions/auth";

function SetNewPassword() {
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [state, setState] = useState({
    newPassword: "",
    confirmpassword: "",
  });
  const [params] = useSearchParams();
  const EmailToken = params.get("token");


  function onInputChange(e) {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  }

  const handleResetPassword = async () => {
    if (state.newPassword === "") {
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
    if (state.newPassword !== state.confirmpassword) {
      notification.open({
        message: "Error",
        description: "New passwords do not match",
      });
      return;
    }
    return true
  };

  const handleSubmit = async () => {
    setLoading(true);
    const validate = await handleResetPassword()
    if(validate){
      delete state.confirmpassword;
      await resetPasswordEmail(state, EmailToken)
      navigate('/')
    }
    setLoading(false);
  }
  
  return (
    <div className="auth-container">
      <div class="auth-wrapper">
        <h2>Set new password</h2>

        <div
          className="mb-3"
          value={state.newPassword}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <label>New Password:</label>
          <input
            name="newPassword"
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
            onClick={handleSubmit}
          >
            Submit
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

export default SetNewPassword;
