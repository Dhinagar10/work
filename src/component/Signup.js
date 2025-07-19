import React, { useState } from "react";

function Signup({ onSignup }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    if (!email || !password) return alert("All fields are required.");
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const exists = users.find((u) => u.email === email);
    if (exists) return alert("User already exists.");
    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Signup successful!");
    onSignup();
  };

  return (
    <div className="container">
      <h2>Signup</h2>
      <form onSubmit={handleSignup} className="form">
        <input type="email" placeholder="Email" value={email}
          onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password}
          onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" className="save-btn">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
