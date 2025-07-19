import React from "react";

function Navbar({ setPage }) {
  return (
    <nav className="navbar">
      <button onClick={() => setPage("home")}>Home</button>
      <button onClick={() => setPage("signup")}>Signup</button>
      <button onClick={() => setPage("login")}>Login</button>
    </nav>
  );
}

export default Navbar;
