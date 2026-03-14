import "./ChatWindow.css";
import { MyContext } from "./Mycontext.jsx";
import { useContext, useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import { RingLoader } from "react-spinners";

function ChatWindow() {

  const {
    prompt,
    setPrompt,
    reply,
    setReply,
    currThreadId,
    prevChats,
    setPrevChats,
    setNewChat,
    newChat
  } = useContext(MyContext);

  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [latestReply, setLatestReply] = useState(null);

  // ================= API CALL =================
  const getReply = async () => {
    if (!prompt) return;

    setLoading(true);
    setNewChat(false);

    try {
      const response = await fetch("http://localhost:8080/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: prompt,
          threadId: currThreadId
        })
      });

      const res = await response.json();
      setReply(res.reply);

    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  };

  // ================= SAVE CHAT =================
  useEffect(() => {
    if (prompt && reply) {
      setPrevChats(prev => [
        ...prev,
        { role: "user", content: prompt },
        { role: "assistant", content: reply }
      ]);
      setPrompt("");
    }
  }, [reply]);

  // ================= TYPING EFFECT =================
  useEffect(() => {

    if (reply === null) {
      setLatestReply(null);
      return;
    }

    if (!reply) return;

    const words = reply.split(" ");
    let index = 0;

    const interval = setInterval(() => {
      setLatestReply(words.slice(0, index + 1).join(" "));
      index++;
      if (index >= words.length) clearInterval(interval);
    }, 40);

    return () => clearInterval(interval);

  }, [reply]);

  const handleProfileClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="chatWindow">

      {/* NAVBAR */}
      <div className="navbar">
        <span>SigmaGpt</span>
        <div className="userIconDiv" onClick={handleProfileClick}>
          <span className="userIcon">U</span>
        </div>
      </div>

      {/* DROPDOWN */}
      {isOpen && (
        <div className="dropDown">
          <div className="dropDownItem">Upgrade Plan</div>
          <div className="dropDownItem">Settings</div>
          <div className="dropDownItem">Log Out</div>
        </div>
      )}

      {/* CHAT BODY */}
      <div className="chatBody">

        {newChat && (
          <h1 className="newChatTitle">Start a New Chat!</h1>
        )}

        <div className="chats">

          {prevChats?.slice(0, -1).map((chat, idx) => (
            <div
              key={idx}
              className={chat.role === "user" ? "userDiv" : "gptDiv"}
            >
              {chat.role === "user" ? (
                <p className="userMessage">{chat.content}</p>
              ) : (
                <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
                  {chat.content}
                </ReactMarkdown>
              )}
            </div>
          ))}

          {/* TYPING EFFECT */}
          {prevChats.length > 0 && latestReply !== null && (
            <div className="gptDiv">
              <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
                {latestReply}
              </ReactMarkdown>
            </div>
          )}

        </div>
      </div>

      {/* LOADER */}
      {loading && <RingLoader color="#fff" />}

      {/* INPUT */}
      <div className="chatInput">
        <div className="inputBox">
          <input
            placeholder="Ask anything"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && getReply()}
          />
          <div id="submit" onClick={getReply}>➤</div>
        </div>
        <p className="info">
          SigmaGpt can make mistakes. Check important info.
        </p>
      </div>

    </div>
  );
}

export default ChatWindow;