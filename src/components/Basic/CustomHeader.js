import React from "react";
import { Link } from "react-router-dom";
import { Container, Menu, Button } from "semantic-ui-react";
import Logo from "../../assets/icons/logo.svg";

function CustomHeader() {
  return (
    <header>
      <Container id="header">
        <Link to="/">
          <img alt="Logo" src={Logo} />
        </Link>

        <Menu as="nav" text size="huge">
          <Menu.Menu>
            <Menu.Item name="about">
              <Link to="/about">About</Link>
            </Menu.Item>
            <Menu.Item name="blog">
              <Link to="/blog">Blog</Link>
            </Menu.Item>
            <Menu.Item name="partners">
              <Link to="/partners">Partners</Link>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        <div className="buttons">
          <Button basic className="btn">
            Login
          </Button>
          <Button className="btn primary-btn">Register</Button>
        </div>
      </Container>
    </header>
  );
}

export default CustomHeader;
