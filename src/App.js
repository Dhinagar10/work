import React, { useState } from "react";
import Signup from "./component/Signup";
import Login from "./component/Login";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import "./index.css";

function App() {
  const [page, setPage] = useState("signup");
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <div>
      <Navbar setPage={setPage} />
      {page === "signup" && <Signup onSignup={() => setPage("login")} />}
      {page === "login" && (
        <Login
          onLogin={(user) => {
            setCurrentUser(user);
            setPage("home");
          }}
        />
      )}
      {page === "home" && <Home user={currentUser} />}
    </div>
  );
}

export default App;
