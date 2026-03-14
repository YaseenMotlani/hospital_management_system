import Layout from "../Components/Common/Layout";
import Chat from "../Components/aiAssistant/Chat";
import { MyContext } from "../Components/aiAssistant/Mycontext";
import { useState } from "react";
import { v1 as uuidv1 } from "uuid";

const AiAssistant = () => {

  // 🔥 SigmaGPT App.jsx ka logic yahin aaya
  const [prompt, setPrompt] = useState("");
  const [reply, setReply] = useState(null);
  const [currThreadId, setCurrThreadId] = useState(uuidv1());
  const [prevChats, setPrevChats] = useState([]);
  const [newChat, setNewChat] = useState(true);
  const [allThreads, setAllThreads] = useState([]);

  const providerValues = {
    prompt, setPrompt,
    reply, setReply,
    currThreadId, setCurrThreadId,
    prevChats, setPrevChats,
    newChat, setNewChat,
    allThreads, setAllThreads
  };

  return (
    <Layout title="AI Assistant" >
      <MyContext.Provider value={providerValues}>
        <Chat />
      </MyContext.Provider>
    </Layout>
  );
};

export default AiAssistant;
