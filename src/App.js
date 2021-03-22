import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routes from "./routes";
import { CustomHeader } from "./components/Basic";

function App({ loggedIn, logout }) {
  return (
    <div>
      <Router>
        <CustomHeader />
        {renderRoutes(routes)}
        {/* <CustomFooter /> */}
      </Router>
    </div>
  );
}

export default App;
