import { useState } from "react";

export default function App() {
  const [userName, setUserName] = useState("abc");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function Login() {
    setIsLoggedIn(true);
  }

  function Logout() {
    setIsLoggedIn(false);
  }

  return (
    <div style={{ padding: "2rem", textAlign: "center", fontFamily: "sans-serif" }}>
      {isLoggedIn ? (
        <div>
          <p>Welcome, <strong>{userName}</strong>!</p>
          <button 
            style={{ padding: "8px 16px", marginTop: "1rem", cursor: "pointer" }} 
            onClick={Logout}
          >
            Logout
          </button>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", maxWidth: "250px", margin: "0 auto" }}>
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input type="password" placeholder="Password" />
          <input type="number" placeholder="Age" />
          <input type="text" placeholder="ID" />

          <button 
            style={{ padding: "8px 16px", marginTop: "0.5rem", cursor: "pointer" }} 
            onClick={Login}
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
}