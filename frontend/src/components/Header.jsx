import React from "react";
import "../styles/Header.css";

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className="chat-header">
      <h2>MERN Chatbot</h2>
      <button onClick={toggleDarkMode}>
        {darkMode ? "Light" : "Dark"}
      </button>
    </div>
  );
};

export default Header;
