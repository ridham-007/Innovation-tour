import React from "react";
import Signin from "../../components/auth/Singin";
import { login, resendEmail } from "../../actions/auth";

export default function LoginContainer() {
  return <Signin login={login} resendEmail={resendEmail} />;
}
