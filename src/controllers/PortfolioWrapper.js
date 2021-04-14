import React from "react";
import { connect } from "react-redux";
import { renderRoutes } from "react-router-config";

function PortfolioWrapper({ route }) {
  return <main>{renderRoutes(route.routes)}</main>;
}

export default connect()(PortfolioWrapper);
