import React, { useState, useEffect } from "react";

function Home({ user }) {
  const [site, setSite] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [savedData, setSavedData] = useState([]);

  useEffect(() => {
    // Load from localStorage on first render
    const stored = JSON.parse(localStorage.getItem("passwordData")) || [];
    setSavedData(stored);
  }, []);

  const generatePassword = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let genPassword = "";
    for (let i = 0; i < 12; i++) {
      genPassword += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setPassword(genPassword);
  };

  const handleSave = () => {
    if (site && username && password) {
      const newEntry = { site, username, password };
      const updatedData = [...savedData, newEntry];
      setSavedData(updatedData);
      localStorage.setItem("passwordData", JSON.stringify(updatedData));
      setSite("");
      setUsername("");
      setPassword("");
    }
  };

  return (
    <div className="container">
      <h2>Welcome {user?.email || "User"}</h2>
      <div className="form">
        <input
          type="text"
          placeholder="Site"
          value={site}
          onChange={(e) => setSite(e.target.value)}
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <div className="password-row">
          <input
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            className="generate-btn"
            onClick={generatePassword}
          >
            🔁
          </button>
        </div>
        <button className="save-btn" onClick={handleSave}>
          Save
        </button>
      </div>

      <ul className="password-list">
        {savedData.map((item, index) => (
          <li key={index}>
            <strong>Site:</strong> {item.site} <br />
            <strong>Username:</strong> {item.username} <br />
            <strong>Password:</strong> {item.password}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
