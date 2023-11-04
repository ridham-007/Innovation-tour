import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoadingOverlay, Loader } from "react-overlay-loader";
import CircularProgress from "@mui/material/CircularProgress";
import "react-overlay-loader/styles.css";
import { forgotPasswordEmail } from "../../actions/auth";

function ForgotPassword() {
  const [isLoading, setLoading] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [email, setEmail] = useState('')

  const emailValidation = () => {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;;
    if(!email.match(emailRegex)){
      return;
    }
    return true
  }

  const onSubmit = async () => {
    setShowLoader(true)
    if(emailValidation()){
      await forgotPasswordEmail({email:email}) ;
    }
    setShowLoader(false);
  };


  return (
    <div className="auth-container">
      <div class="auth-wrapper">
        <h2>Forgot Password</h2>
        <div style={{ display: "flex", justifyContent: "center", marginBottom:'2rem'}}>
          <input type="email" value={email} 
          placeholder="Enter Your Email" 
          style={{width:'30rem', height:'3rem', borderRadius:'5px', padding:'0px 5px'}}
          onChange={(e) => setEmail(e.target.value)}
          />
        </div>

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
        <p className="forgot-password text-right">
          go to <a href="#/signin">Sign-In</a>
        </p>
      </div>
      <Loader fullPage loading={isLoading} />
    </div>
  );
}

export default ForgotPassword;
