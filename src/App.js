import React from "react";
import { renderRoutes } from "react-router-config";
import { CustomHeader } from "./components/Basic";

function App({ route, loggedIn, logout }) {
  return (
    <div>
      <CustomHeader />
      {renderRoutes(route.routes)}
    </div>
  );
}

export default App;
