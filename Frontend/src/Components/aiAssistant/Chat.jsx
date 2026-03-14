import "./Chat.css";
import "highlight.js/styles/github-dark.css";
import "./Chat.css";
import Sidebar from "./Sidebar";
import ChatWindow from "./ChatWindow";

// react-markdown
// rehype-highlight

function Chat() {
    return (
        <>
        <div className="ai-chat-wrapper">
            <Sidebar />       
            <ChatWindow />   
        </div>

        </>

    )
}

export default Chat;