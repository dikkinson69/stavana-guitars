import React from "react";

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer>
      {new Date().toLocaleTimeString()}.{" "}
      {isOpen
        ? "Stavana handpainted guitars and items"
        : "Stavana handpainted guitars and items"}
    </footer>
  );
}

export default Footer;
