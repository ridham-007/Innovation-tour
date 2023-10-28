import { createContext } from "react";

const AuthContext = createContext({ status: null, setStatus: null });

export default AuthContext;
