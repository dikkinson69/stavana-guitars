import React from "react";

function Navbar({ onSelectCategory }) {
  return (
    <nav className="navbar">
      <ul>
        <li onClick={() => onSelectCategory("home")}>Home</li>
        <li onClick={() => onSelectCategory("guitars")}>Guitars</li>
        <li onClick={() => onSelectCategory("lamps")}>Lamps</li>
        <li onClick={() => onSelectCategory("other")}>Other</li>
        <li onClick={() => onSelectCategory("contact")}>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
