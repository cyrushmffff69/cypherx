import React, { useEffect, useCallback } from "react";

export default function Message({
  sender,
  text,
  input,
  setInput,
  setMessages,
  setLoading,
  username,
  systemPrompts,
  model,
  askCypherX,
  mode,
}) {
  const speakText = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    speechSynthesis.speak(utterance);
  };

  const sendMessage = useCallback(
    async (message) => {
      if (!message.trim()) return;

      setMessages((prevMessages) => [...prevMessages, { sender: "You", text: message }]);
      setInput("");
      setLoading(true);

      const systemPrompt = `${username ? `The user's name is ${username}.` : ""} ${
        systemPrompts[mode] || systemPrompts.savage
      }`;

      try {
        const replyText = await askCypherX(message, model, systemPrompt);
        const botMessage = { sender: "CypherX", text: replyText };

        setMessages((prev) => [...prev, botMessage]);
        speakText(replyText);
      } catch (error) {
        console.error("Error with askCypherX:", error);
        setMessages((prev) => [
          ...prev,
          { sender: "CypherX", text: "Oops! Something went wrong. Please try again." },
        ]);
      } finally {
        setLoading(false);
      }
    },
    [askCypherX, model, mode, setInput, setLoading, setMessages, systemPrompts, username]
  );

  useEffect(() => {
    if (input) {
      sendMessage(input);
    }
  }, [input, sendMessage]);

  return (
    <div className={`message ${sender === "You" ? "user" : "bot"}`}>
      <div className="avatar">
        <span role="img" aria-label={sender === "You" ? "user" : "ai"}>
          {sender === "You" ? "🧑" : "🧠"}
        </span>
      </div>
      <div className="bubble">{text}</div>
    </div>
  );
}
