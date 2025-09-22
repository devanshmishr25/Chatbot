import React from "react";
import "../styles/Input.css";

const Input = ({ input, setInput, sendMessage, loading }) => {
  return (
    <div className="input-container">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask anything..."
        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
      />
      <button onClick={sendMessage} disabled={loading}>
        {loading ? "..." : "Send"}
      </button>
    </div>
  );
};

export default Input;
