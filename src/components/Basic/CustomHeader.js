import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Button, Image, Icon } from "semantic-ui-react";
import Logo from "../../assets/icons/logo.svg";

function CustomHeader() {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);
  const closeMobile = () => setOpen(false);
  return (
    <header>
      <Container id="header">
        <Link to="/">
          <Image alt="Logo" src={Logo} className="brand" />
        </Link>
        <Icon
          name={open ? "times" : "bars"}
          size="large"
          onClick={handleClick}
          className="menu-icon"
        />
        <ul className={open ? "nav-menu active" : "nav-menu"}>
          <li name="properties" className="nav-item">
            <Link to="/properties" onClick={closeMobile} className="nav-link">
              Properties
            </Link>
          </li>
          <li name="about" className="nav-item">
            <Link to="/about" onClick={closeMobile} className="nav-link">
              About
            </Link>
          </li>
          <li name="blog" className="nav-item">
            <Link to="/blog" onClick={closeMobile} className="nav-link">
              Blog
            </Link>
          </li>
          <li name="help" className="nav-item">
            <Link to="/help" onClick={closeMobile} className="nav-link">
              Help
            </Link>
          </li>
        </ul>
        <div className="buttons">
          <Button
            basic
            className="btn"
            onClick={closeMobile}
            as={Link}
            to="/login"
          >
            Sign In
          </Button>
          <Button
            className="primary-btn"
            onClick={closeMobile}
            as={Link}
            to="/register"
          >
            Register
          </Button>
        </div>
      </Container>
    </header>
  );
}

export default CustomHeader;
