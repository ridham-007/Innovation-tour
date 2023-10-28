import React from "react";
import SigninMobile from "../../components/auth/SigninMobile";
import { login, resendEmail } from "../../actions/auth";

export default function LoginContainer() {
  return <SigninMobile login={login} resendEmail={resendEmail} />;
}
