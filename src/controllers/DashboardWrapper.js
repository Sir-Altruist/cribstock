import React from "react";
import { connect } from "react-redux";
import { renderRoutes } from "react-router-config";

function DashboardWrapper({ route }) {
  return <main>{renderRoutes(route.routes)}</main>;
}

export default connect()(DashboardWrapper);
