import React, { useState } from "react";
import Header from "./components/Header";
import Messages from "./components/Messages";
import Input from "./components/Input";
import "./styles/Chat.css"; // Make sure inside src/styles/
import axios from "axios";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:5000/api/chat", {
        message: input,
      });
      setMessages([...newMessages, { sender: "ai", text: res.data.reply }]);
    } catch (error) {
      setMessages([
        ...newMessages,
        { sender: "ai", text: "⚠️ Error getting response" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`chat-wrapper ${darkMode ? "dark" : ""}`}>
      <Header darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
      <div className="chat-container">
        <Messages messages={messages} loading={loading} />
        <Input
          input={input}
          setInput={setInput}
          sendMessage={sendMessage}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default Chat;
