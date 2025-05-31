import React, { useState, useEffect, useRef } from "react";
import Message from "./Message.jsx";
import { askCypherX } from "../api.js";
import "./Chat.css";

export default function Chat({ model, setModel }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState("savage");
  const [chatHistory, setChatHistory] = useState([]);
  const [showSettings, setShowSettings] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [file, setFile] = useState(null);
  const bottomRef = useRef(null);

  const systemPrompts = {
    chill: `You are CypherX — relaxed, humorous AI from Nepal by CyRushMF69.`,
    hacker: `You are CypherX — hacker-minded brutal AI by CyRushMF69.`,
    savage: `You are CypherX — savage and blunt truth-teller AI.`,
    flirty: `You are CypherX — smooth, flirty but respectful AI.`,
    psychotic: `You are CypherX — chaotic, dark-humored AI.`
  };

  useEffect(() => {
    const stored = sessionStorage.getItem("cypherx-chat");
    if (stored) setMessages(JSON.parse(stored));
  }, []);

  useEffect(() => {
    sessionStorage.setItem("cypherx-chat", JSON.stringify(messages));
    if (bottomRef.current) bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { sender: "You", text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    const systemPrompt = systemPrompts[mode] || systemPrompts.savage;
    try {
      const replyText = await askCypherX(input, model, systemPrompt);
      const botMessage = { sender: "CypherX", text: replyText };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      setMessages(prev => [...prev, { sender: "CypherX", text: `❌ Error: ${error.message}` }]);
    }
    setLoading(false);
  };

  const clearChat = () => {
    if (messages.length) {
      const timestamp = new Date().toLocaleString();
      setChatHistory(prev => [...prev, { title: `Chat @ ${timestamp}`, history: messages }]);
    }
    setMessages([]);
    sessionStorage.removeItem("cypherx-chat");
  };

  const handleKeyDown = e => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleFileUpload = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setMessages(prev => [...prev, { sender: "You", text: `📎 Uploaded: ${selectedFile.name}` }]);
    }
  };

  return (
    <div className="chat-container">
      {/* Sidebar Drawer */}
      <aside className={`sidebar ${sidebarVisible ? "visible" : ""}`}>
        <h2 className="logo">Cypher-X</h2>
        <button onClick={clearChat} className="new-chat">➕ New Chat</button>
        <div className="chat-history">
          {chatHistory.map((item, index) => (
            <div key={index} className="history-item">{item.title}</div>
          ))}
        </div>
      </aside>

      {/* Main */}
      <main className="chat-main">
        <header className="top-bar">
          <button className="toggle-sidebar" onClick={() => setSidebarVisible(!sidebarVisible)}>☰</button>
          <div className="title">Cypher-X</div>
          <div className="profile-section">
            <span className="icon" onClick={() => setShowSettings(!showSettings)}>⚙️</span>
            <span className="icon" onClick={() => setShowProfileMenu(!showProfileMenu)}>👤</span>
            {showProfileMenu && (
              <div className="profile-menu">
                <button onClick={() => alert("Profile feature coming soon")}>Profile</button>
                <button onClick={() => alert("Settings feature coming soon")}>Settings</button>
                <button onClick={() => alert("Logged out!")}>Log Out</button>
              </div>
            )}
          </div>
        </header>

        {showSettings && (
          <div className="settings-menu">
            <div>
              <label>Change Model</label>
              <select value={model} onChange={(e) => setModel(e.target.value)}>
                <option value="openai/gpt-3.5-turbo">🤖 GPT-3.5</option>
                <option value="openai/gpt-4">🧠 GPT-4</option>
                <option value="anthropic/claude-3-opus">🧫 Claude 3 Opus</option>
                <option value="mistralai/mistral-7b-instruct">⚡ Mistral 7B</option>
              </select>
            </div>
            <div>
              <label>Chat Type</label>
              <select value={mode} onChange={(e) => setMode(e.target.value)}>
                <option value="chill">😎 Chill</option>
                <option value="hacker">💻 Hacker</option>
                <option value="savage">🔥 Savage</option>
                <option value="flirty">💘 Flirty</option>
                <option value="psychotic">🫨 Psychotic</option>
              </select>
            </div>
          </div>
        )}

        <section className="chat-area">
          {messages.length === 0 && !loading && (
            <div className="center-welcome">
              <h1>What can I help with?</h1>
            </div>
          )}

          {messages.map((msg, index) => (
            <Message key={index} sender={msg.sender} text={msg.text} />
          ))}

          {loading && (
            <div className="message bot typing">
              <div className="bubble">
                <span className="dot"></span><span className="dot"></span><span className="dot"></span>
              </div>
            </div>
          )}

          <div ref={bottomRef} />
        </section>

        <footer className="input-bar">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask Cypher-X anything..."
          />
          <div className="input-actions">
            <label className="upload-button">
              📎<input type="file" hidden onChange={handleFileUpload} />
            </label>
            <button onClick={sendMessage}>Send</button>
          </div>
        </footer>
      </main>
    </div>
  );
}
