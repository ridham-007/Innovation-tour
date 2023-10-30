import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { notification, Modal } from "antd";
import { LoadingOverlay, Loader } from "react-overlay-loader";
import "react-overlay-loader/styles.css";
import AuthContext from "../../context";
import validation from "../../utils/validation";

function Sigin({ login, resendEmail }) {
  const [isLoading, setLoading] = useState(false);
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  function onInputChange(e) {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  }
  function onLoginClick() {
    if (state.email === "") {
      notification.open({
        message: "Error",
        description: "Email field is required!",
      });
      return;
    }
    if (state.password === "") {
      notification.open({
        message: "Error",
        description: "Password field is required!",
      });
      return;
    } else {
      setLoading(true);
      login(state)
        .then((res) => {
          setLoading(false);
          if (!res.success) {
            setIsModalOpen(true);
          } else {
            localStorage.setItem("token", res.token);
            localStorage.setItem("user", JSON.stringify(res.user));
            auth.setStatus(true);
            notification.open({
              message: "Success!",
              description: res.msg,
            });
            navigate("/");
          }
        })
        .catch((err) => console.log("err", err));
    }
  }
  function handleCancel() {
    setIsModalOpen(false);
  }
  const handleOk = async () => {
    setIsModalOpen(false);
    const returnData = await resendEmail(state);
    if (returnData) {
      notification.open({
        message: "Success",
        description: "We've sent verification link. Please check your mailbox",
      });
    } else {
      notification.open({
        message: "Error",
        description: "Something went wrong. Please try again later!",
      });
    }
  };
  return (
    <div className="auth-mobile-container">
      <Modal
        title="Error"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        style={{ textAlign: "center" }}
      >
        Your email is not verified yet. Would you like to resend verification
        link again?
      </Modal>
      <div class="auth-mobile-wrapper">
        <h2>Sign-In</h2>

        <div
          className="mb-3"
          value={state.email}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <label>Email:</label>
          <input
            name="email"
            type="email"
            className="form-control"
            onChange={(e) => onInputChange(e)}
            style={{ width: "70%" }}
            placeholder="Enter email"
          />
        </div>

        <div
          className="mb-3"
          value={state.password}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <label>Password:</label>
          <input
            name="password"
            type="password"
            className="form-control"
            onChange={(e) => onInputChange(e)}
            style={{ width: "70%" }}
            placeholder="Enter password"
          />
        </div>
        <p className="forgot-password text-right" style={{ marginBottom: "10px" }}>
          <a href="#/forgotpassword">Forgot password?</a>
        </p>
        <div className="d-grid" style={{ textAlign: 'center' }}>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={onLoginClick}
          >
            Sign-In
          </button>
        </div>
        <div style={{display:"flex", flexDirection:"column", alignItems:"center", marginTop: "30px", }}>
        <p className="forgot-password text-right" >
          Don't have an account? <a href="#/signup">Sign-Up</a>
        </p>
       
        <p className="forgot-password text-right">
        <a href="#/resetpassword">Reset password</a>
        </p>
        </div>
      </div>
      <Loader fullPage loading={isLoading} />
    </div>
  );
}

export default Sigin;
