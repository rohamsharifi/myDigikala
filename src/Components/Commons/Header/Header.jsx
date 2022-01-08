import React from "react";
import { Link } from "react-router-dom";

import HeaderInput from "./HeaderInput";
import "./HeaderLogoStyle.css";
import "./HeaderInputStyle.css";

const Header = () => {
  return (
    <div>
      <nav
        className="navbar fixed-top navbar-expand-sm"
        style={{ height: 70, backgroundColor: "white" }}
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#ED1B34",
            fontSize: 30,
            marginRight: 5,
            fontWeight: 'bolder',
            marginTop: 10,
          }}
        >
          digikala
        </Link>
        <HeaderInput />
      </nav>
    </div>
  );
};

export default Header;
