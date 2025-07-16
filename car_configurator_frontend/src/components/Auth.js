import React, { useState } from "react";
import "./Auth.css";

// PUBLIC_INTERFACE
/**
 * Authentication placeholder, toggleable between login and register.
 * All logic here is stubbed out for now.
 */
function Auth() {
  const [mode, setMode] = useState("login");
  const [form, setForm] = useState({ email: "", password: "" });

  // PUBLIC_INTERFACE
  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  // PUBLIC_INTERFACE
  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder: pass auth to backend or service (not implemented)
    alert(`Authentication attempt: [${mode}] Email: ${form.email}`);
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>{mode === "login" ? "Login" : "Register"}</h2>
        <form className="auth-form" onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            autoFocus
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <button type="submit" className="auth-btn">
            {mode === "login" ? "Login" : "Register"}
          </button>
        </form>
        <div className="auth-switch">
          {mode === "login" ? (
            <span>
              No account?{" "}
              <button onClick={() => setMode("register")}>Register</button>
            </span>
          ) : (
            <span>
              Already registered?{" "}
              <button onClick={() => setMode("login")}>Login</button>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
export default Auth;
