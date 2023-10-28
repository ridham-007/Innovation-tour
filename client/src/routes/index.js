import React from "react";
import { HashRouter } from "react-router-dom";
import CustomRoute from "./CustomRoute";

const AppRouter = () => {
  return (
    <HashRouter>
      <CustomRoute />
    </HashRouter>
  );
}

export default AppRouter;
