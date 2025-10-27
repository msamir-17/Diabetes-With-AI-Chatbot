import React, { useState } from "react";
// import axios from "axios";
// import {  Routes, Route, Link } from "react-router-dom";
import "./ChatbotPage.css";
const ChatbotPage = () => {
    const [messages, setMessages] = useState([
      { text: "Hello! I'm your diabetes assistant. How can I help you today?", sender: "bot" }
    ]);
    const [newMessage, setNewMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const API_KEY = process.env.REACT_APP_GEMINI_API_KEY;
  
    const handleSendMessage = async (e) => {
      e.preventDefault();
      if (!newMessage.trim()) return;
  
      const userMessage = { text: newMessage, sender: "user" };
      setMessages(prevMessages => [...prevMessages, userMessage]);
      setNewMessage("");
      setIsLoading(true);
  
      try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;
        const requestBody = { contents: [{ parts: [{ text: newMessage }] }] };
  
        const response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(requestBody),
        });
  
        const data = await response.json();
        console.log("Gemini Response:", data);
  
        const formatResponse = (text) => {
          return text
            .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") // **bold** -> <strong>
            .replace(/\n### (.*?)\n/g, "<br/><br/>🚀 <strong>$1</strong><br/>") // 🚀 Headings
            .replace(/\n🔹/g, "<br/><br/>📌 <strong>") // 📌 Sub-headings
            .replace(/:\n/g, ":</strong><br/>") // Colon ke baad bold closing
            .replace(/\n\*/g, "<br/>✅ ") // Bullet points ke liye checkmark emoji
            .replace(/\n\n/g, "<br/><br/>") // Paragraphs ke liye spacing
            .replace(/Warning:/g, "⚠️ <strong>Warning:</strong>") // Warning highlights
            .replace(/Important:/g, "❗ <strong>Important:</strong>"); // Important highlights
        };
        
        const botResponseText = data?.candidates?.[0]?.content?.parts?.[0]?.text || 
          "I'm sorry, I couldn't process that.";
        
        const formattedResponse = formatResponse(botResponseText);
        const botResponse = { text: formattedResponse, sender: "bot" };
        setMessages(prevMessages => [...prevMessages, botResponse]);
        
  
      } catch (error) {
        console.error("Error fetching Gemini response:", error);
        setMessages(prevMessages => [...prevMessages, { text: "Error: Unable to get a response.", sender: "bot" }]);
      } finally {
        setIsLoading(false);
      }
    };
  
    return (
      <div className="chatbot-page">
        <div className="chatbot-container">
          <div className="chatbot-header">
            <h2>Diabetes Assistant</h2>
          </div>
  
          <div className="chat-messages">
            {messages.map((message, index) => (
            <div key={index} className={`message ${message.sender}`}>
            <div className="message-bubble">
              <div dangerouslySetInnerHTML={{ __html: message.text }} />
            </div>
          </div>
          
            
            
            ))}
            {isLoading && (
              <div className="message bot">
                <div className="message-bubble typing">
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
              </div>
            )}
          </div>
  
          <form className="message-input-form" onSubmit={handleSendMessage}>
            <input type="text" placeholder="Ask me anything..." value={newMessage} onChange={(e) => setNewMessage(e.target.value)} />
            <button type="submit" disabled={isLoading}>Send</button>
          </form>
        </div>
      </div>
    );
  };

  export default ChatbotPage