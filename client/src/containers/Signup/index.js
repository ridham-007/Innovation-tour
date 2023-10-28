import React from "react";
import Signup from "../../components/auth/Signup";
import { register } from "../../actions/auth";

export default function SignContainer() {
  return <Signup register={register} />;
}
