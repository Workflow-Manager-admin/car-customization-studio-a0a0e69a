import React from "react";
import "./Footer.css";

// PUBLIC_INTERFACE
/**
 * App footer for legal or informational links.
 */
function Footer() {
  return (
    <footer className="footer">
      <span>
        &copy; {new Date().getFullYear()} Car Configurator &mdash; All Rights Reserved
      </span>
      <nav className="footer__links">
        <a href="/privacy">Privacy Policy</a>
        <span>·</span>
        <a href="/terms">Terms of Service</a>
      </nav>
    </footer>
  );
}
export default Footer;
