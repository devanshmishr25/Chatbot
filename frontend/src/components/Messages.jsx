import React, { useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "../styles/Messages.css";

const Messages = ({ messages, loading }) => {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  return (
    <div className="messages">
      {messages.map((msg, i) => (
        <div
          key={i}
          className={msg.sender === "user" ? "user-msg" : "ai-msg"}
        >
          {msg.sender === "ai" ? (
            <ReactMarkdown
              children={msg.text}
              remarkPlugins={[remarkGfm]}
              components={{
                strong: ({ children }) => <b>{children}</b>,
                em: ({ children }) => <span>{children}</span>,
                h1: ({ children }) => <h3>{children}</h3>,
                h2: ({ children }) => <h4>{children}</h4>,
                h3: ({ children }) => <h5>{children}</h5>,
                ul: ({ children }) => <ul className="list">{children}</ul>,
                li: ({ children }) => <li className="list-item"> {children}</li>,
              }}
            />
          ) : (
            <div>{msg.text}</div>
          )}
        </div>
      ))}

      {loading && <div className="ai-msg processing">⏳ AI is typing...</div>}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default Messages;
