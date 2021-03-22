import React from "react";
import { Image } from "semantic-ui-react";
import Logo from "../../../assets/icons/logo.svg";

function Footer1() {
  return (
    <div>
      <Image src={Logo} alt="logo" />
      <p>58 Howard Street #2 San Francisco</p>
      <p>contact@homeid.com</p>
    </div>
  );
}

export default Footer1;
