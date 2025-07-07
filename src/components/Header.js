import React from "react";

function Header() {
  return (
    <header className="header">
      <a href="/stavana-guitars/" className="logo-link">
        <img
          src={process.env.PUBLIC_URL + "/logo/stavanaLogo.jpg"}
          alt="Stavana Logo"
          className="logo left-logo"
        />
      </a>

      <a href="/stavana-guitars/" className="logo-link">
        <img
          src={process.env.PUBLIC_URL + "/logo/StavanaLogoLink.jpg"}
          alt="Stavana Logo"
          className="header-logo"
        />
      </a>

      <a href="/stavana-guitars/" className="logo-link">
        <img
          src={process.env.PUBLIC_URL + "/logo/stavanaLogo2.jpg"}
          alt="Stavana Logo 2"
          className="logo right-logo"
        />
      </a>
    </header>
  );
}

export default Header;
