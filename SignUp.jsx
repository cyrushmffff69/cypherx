import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  console.log("SignUp component rendered"); // Check if this shows in the console

  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    if (!emailOrPhone || !username || !password || !agree) {
      setError("Please fill all fields and agree to the terms.");
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    const alreadyExists = existingUsers.some(
      (user) => user.emailOrPhone === emailOrPhone
    );

    if (alreadyExists) {
      setError("User already exists. Please log in.");
      return;
    }

    const newUser = {
      emailOrPhone,
      username,
      password,
    };

    existingUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(existingUsers));

    alert("Sign-up successful! Redirecting to login...");
    navigate("/login");
  };

  return (
    <div className="cypherx-home">
      <h1 className="home-title">Sign Up for CypherX</h1>
      <div className="input-container">
        <form onSubmit={handleSignUp}>
          <input
            type="text"
            placeholder="Email or Phone"
            className="input-field"
            value={emailOrPhone}
            onChange={(e) => setEmailOrPhone(e.target.value)}
          />
          <input
            type="text"
            placeholder="Username"
            className="input-field"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="terms">
            <input
              type="checkbox"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
            />
            <label>I agree to the Terms and Conditions</label>
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="primary-btn">Sign Up</button>
        </form>
      </div>
    </div>
  );
}
