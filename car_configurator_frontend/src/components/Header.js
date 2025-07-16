import React from "react";
import "./Header.css";

// PUBLIC_INTERFACE
/**
 * Header with navigation for the Car Configurator.
 * Shows app title, nav links (Login/Profile, etc.), and theme toggle if provided.
 */
function Header({ onThemeToggle, theme }) {
  return (
    <header className="header">
      <div className="header__brand">
        <span className="header__logo">🚗</span>
        <span className="header__title">Car Configurator</span>
      </div>
      <nav className="header__nav">
        {/* Placeholders for nav items */}
        <a href="/" className="header__nav-link">
          Home
        </a>
        <a href="/configurator" className="header__nav-link">
          Configurator
        </a>
        <a href="/profile" className="header__nav-link">
          Profile
        </a>
        <a href="/login" className="header__nav-link header__nav-login">
          Login
        </a>
        {/* Placeholder Theme Switch */}
        {onThemeToggle && (
          <button
            className="header__theme-btn"
            onClick={onThemeToggle}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        )}
      </nav>
    </header>
  );
}

export default Header;
