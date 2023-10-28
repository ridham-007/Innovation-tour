import React from "react";
import SignupMobile from "../../components/auth/SignupMobile";
import { register } from "../../actions/auth";

export default function SignContainer() {
  return <SignupMobile register={register} />;
}
