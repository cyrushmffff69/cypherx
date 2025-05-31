import React from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";

const buttonStyle = {
  padding: "1rem 2rem",
  fontSize: "1rem",
  background: "#00ffe7",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
  boxShadow: "0 0 10px #00ffe7",
  transition: "background 0.3s",
  color: "#000",
  textDecoration: "none",
  display: "inline-block",
  textAlign: "center",
};

const featureCardStyle = {
  background: "rgba(255, 255, 255, 0.05)",
  padding: "2rem",
  borderRadius: "15px",
  width: "200px",
  textAlign: "center",
  boxShadow: "0 0 15px rgba(0, 255, 231, 0.2)",
  transition: "transform 0.3s",
};

const LandingPage = () => {
  return (
    <div
      style={{
        fontFamily: "Orbitron, sans-serif",
        background: "linear-gradient(to bottom right, #0f0f1e, #1e1e2e)",
        color: "white",
        overflowX: "hidden",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start", // Change to flex-start for better scroll behavior
        paddingBottom: "2rem", // Ensure there's space at the bottom for footer
        overflowY: "auto", // Make sure vertical scrolling is enabled
      }}
    >
      <header
        style={{
          padding: "2rem",
          textAlign: "center",
          background: "rgba(0, 0, 0, 0.2)",
          width: "100%",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            color: "#00ffe7",
            textShadow: "0 0 10px #00ffe7",
          }}
        >
          Cypher-X
        </h1>
        <p>The Smart AI from next-gen by cyrushmf69</p>
      </header>

      <section
        className="hero"
        style={{
          textAlign: "center",
          padding: "4rem 2rem",
        }}
      >
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
          Welcome to the next-gen of Smart AI
        </h2>
        <p
          style={{
            fontSize: "1.2rem",
            maxWidth: "600px",
            marginBottom: "2rem",
          }}
        >
          Experience the most intelligent, responsive, and secure AI assistant
          designed for your digital life.
        </p>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Link to="/register" style={buttonStyle}>
            Register
          </Link>
          <Link to="/login" style={buttonStyle}>
            Login
          </Link>
        </div>
      </section>

      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          margin: "4rem 4rem",
          gap: "2rem",
        }}
      >
        <div style={featureCardStyle}>
          <h3>Natural Chat</h3>
          <p>
            Converse like you're talking to a real person — smart and
            emotionally intelligent.
          </p>
        </div>
        <div style={featureCardStyle}>
          <h3>Privacy First</h3>
          <p>
            Your data is safe with military-grade encryption and zero tracking
            policies.
          </p>
        </div>
        <div style={featureCardStyle}>
          <h3>Multi-Platform</h3>
          <p>
            Available on Web, Mobile, Desktop, and more with seamless sync.
          </p>
        </div>
      </section>

      <footer
        style={{
          padding: "2rem",
          textAlign: "center",
          background: "rgba(0, 0, 0, 0.2)",
          fontSize: "0.9rem",
          color: "#aaa",
          width: "100%",
        }}
      >
        &copy; 2025 Cypher-X by cyrushmf69. All Rights Reserved

        <div style={{ marginTop: "1rem", fontSize: "1.5rem" }}>
          <a
            href="https://x.com/hashtagcyrush?s=21"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#1DA1F2", margin: "0 0.5rem" }}
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com/mr.dhungana?igsh=bm5jdHg1anFlaWZ4&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#E1306C", margin: "0 0.5rem" }}
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/cyrushmf69?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#1877F2", margin: "0 0.5rem" }}
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.tiktok.com/@cyrushmf69?_t=ZS-8wAf3y8Ut7t&_r=1"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#69C9D0", margin: "0 0.5rem" }}
          >
            <FaTiktok />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
