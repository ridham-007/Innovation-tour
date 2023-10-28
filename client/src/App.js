import React, { useState } from "react";
import AuthContext from "./context";
import "./index.css";

import Routes from "./routes";
function App() {
  const [authStatus, setAuthStatus] = useState(false);
  return (
    <div className="App">
      <AuthContext.Provider
        value={{ status: authStatus, setStatus: setAuthStatus }}
      >
        <Routes />
      </AuthContext.Provider>
    </div>
  );
}
export default App;
