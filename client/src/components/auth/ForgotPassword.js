import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoadingOverlay, Loader } from "react-overlay-loader";
import CircularProgress from "@mui/material/CircularProgress";
import "react-overlay-loader/styles.css";

function ForgotPassword() {
  const [isLoading, setLoading] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const onSubmit = () => {
    setShowLoader(true);
    setTimeout(() => setShowLoader(false), 3000);
  };
  return (
    <div className="auth-container">
      <div class="auth-wrapper">
        <h2>Forgot Password</h2>

        <div
          className="d-grid"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <button
            type="submit"
            className="btn btn-primary"
            onClick={onSubmit}
            loading={showLoader}
            disabled={showLoader}
            style={{ display: "flex", alignItems: "center" }}
          >
            Send Email
            {showLoader && (
              <div style={{ marginLeft: "10px", display: "flex" }}>
                <CircularProgress color="inherit" size={18} />
              </div>
            )}
          </button>
        </div>
      </div>
      <Loader fullPage loading={isLoading} />
    </div>
  );
}

export default ForgotPassword;
