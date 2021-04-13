import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Button, Image, Icon } from "semantic-ui-react";
import Logo from "../../assets/icons/logo1.svg";
// import Logo from "../../assets/icons/logo1.svg";

function CustomHeader() {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);
  const closeMobile = () => setOpen(false);
  return (
    <header>
      <Container id="header">
        <Link to="/">
          <Image src={Logo} style={{ width: "15rem", marginLeft: "-1.5rem" }} />
        </Link>
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
          <li className="nav-item buttons-2">
            <div className="button-1-mobile">
              <Button
                basic
                className="btn"
                onClick={closeMobile}
                as={Link}
                to="/login"
              >
                Sign In
              </Button>
            </div>
            <div className="button-2-mobile">
              <Button
                className="primary-btn"
                onClick={closeMobile}
                as={Link}
                to="/register"
              >
                Register
              </Button>
            </div>
          </li>
        </ul>
        <Icon
          name={open ? "times" : "bars"}
          size="large"
          onClick={handleClick}
          className="menu-icon"
        />
      </Container>
      {/* <Grid>
        <Grid.Row only='computer'>
        <Container id="header">
        <Link to="/">
          <div className='brand'>
          <Image src={Logo} alt='logo' style={{ width: '3.5rem', height: '3.5rem', marginBottom: '1rem', marginRight: '-.5rem'}} avatar />
          <span style={{ fontSize: '1.7rem', fontWeight: '700', color: 'black', textTransform: 'uppercase'}}>Cribstock</span>
          </div>
        </Link>
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
        <Icon
          name={open ? "times" : "bars"}
          size="large"
          onClick={handleClick}
          className="menu-icon"
        />
      </Container>
        </Grid.Row>
        <Grid.Row only='tablet'>
        <Container id="header">
        <Link to="/">
        <div className='brand'>
          <Image src={Logo} alt='logo' style={{ width: '3.5rem', height: '3.5rem', marginBottom: '1rem', marginRight: '-.5rem'}} avatar />
          <span style={{ fontSize: '1.7rem', fontWeight: '700', color: 'black', textTransform: 'uppercase'}}>Cribstock</span>
          </div>
        </Link>
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
        <Icon
          name={open ? "times" : "bars"}
          size="large"
          onClick={handleClick}
          className="menu-icon"
        />
      </Container>
        </Grid.Row>
        <Grid.Row only='mobile'>
        <Container id="header">
        <Link to="/">
        <div className='brand'>
          <Image src={Logo} alt='logo' style={{ width: '3.5rem', height: '3.5rem', marginBottom: '1rem', marginRight: '-.5rem'}} avatar />
          <span style={{ fontSize: '1.7rem', fontWeight: '700', color: 'black', textTransform: 'uppercase'}}>Cribstock</span>
          </div>
        </Link>
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
        <li className="nav-item">
          <div className='buttons'>
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
        </li>
        </ul>
        <Icon
          name={open ? "times" : "bars"}
          size="large"
          onClick={handleClick}
          className="menu-icon"
        />
      </Container>
        </Grid.Row>
      </Grid> */}
    </header>
  );
}

export default CustomHeader;
