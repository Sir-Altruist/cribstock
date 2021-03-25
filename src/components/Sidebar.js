import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

function Sidebar({ activeItem, handleClick }) {
  return (
    <Menu fluid vertical tabular>
      <Menu.Item
        name="dashboard"
        active={activeItem === "dashboard"}
        onClick={handleClick}
        style={{
          lineHeight: "50px",
        }}
        as={Link}
        to="/dashboard/welcome"
      />
      <Menu.Item
        name="portfolio"
        active={activeItem === "portfolio"}
        onClick={handleClick}
        style={{
          lineHeight: "50px",
        }}
        as={Link}
        to="/dashboard/portfolio"
      />
      <Menu.Item
        name="stock"
        active={activeItem === "stock"}
        onClick={handleClick}
        style={{
          lineHeight: "50px",
        }}
        as={Link}
        to="/dashboard/stock"
      />
    </Menu>
  );
}

export default Sidebar;
