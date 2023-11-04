import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoadingOverlay, Loader } from "react-overlay-loader";
import "react-overlay-loader/styles.css";
import { notification, Modal } from "antd";
import { resetPassword } from "../../actions/auth";

function ResetPassword({ login, resendEmail }) {
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [password, setPassword] = useState({
    email:"",
    currentpassword: "",
    newpassword: "",
    confirmpassword: "",
  });

  function onInputChange(e) {
    let { name, value } = e.target;
    setPassword({ ...password, [name]: value });
  }

  const handleResetPassword = () => {
    if (password.currentpassword === "") {
      notification.open({
        message: "Error",
        description: "Current password field is required!",
      });
      return;
    }
    if (password.newpassword === "") {
      notification.open({
        message: "Error",
        description: "New password field is required!",
      });
      return;
    }
    if (password.confirmpassword === "") {
      notification.open({
        message: "Error",
        description: "Confirm password field is required!",
      });
      return;
    }
    if (password.newpassword !== password.confirmpassword) {
      notification.open({
        message: "Error",
        description: "New passwords do not match",
      });
      return;
    }
    return true
  };
  const handleEmailValidate = () =>{
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;;
    if(!password.email.match(emailRegex)){
      return;
    }
    return true
  }

  const handleSubmit = async () => {
    if(handleResetPassword() && handleEmailValidate()){
      delete password.confirmpassword
      await resetPassword(password);
    }
    setLoading(false)
  }

  
  return (
    <div className="auth-container">
      <div class="auth-wrapper ">
        <h2>Reset password</h2>

        <div
          className="mb-3"
          value={password.email}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <label>Email Address:</label>
          <input
            name="email"
            type="email"
            className="form-control"
            onChange={(e) => onInputChange(e)}
            style={{ width: "70%" }}
            placeholder="Enter Your Email"
          />
        </div>

        <div
          className="mb-3"
          value={password.currentpassword}
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
          value={password.newpassword}
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
          value={password.confirmpassword}
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
