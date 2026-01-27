// 例: component/ParentChat.tsx
// コンポーネント依存関係：https://docs.google.com/document/d/1Lh0peQqVZwk-sy6yiC0suuEn08oBRYA0Pn1FjppsmfA/edit?tab=t.0

"use client"
import useChat from "./useChat";
import MessageList from "./MessageList";
import ChatForm from "./ChatForm";


const ParentChat = () => {
  const { input, messages, setInput, sendMessage } = useChat();
  return (
    <main className="max-w-2xl mx-auto p-4 flex flex-col h-screen">
      <h1 className="text-2xl font-bold mb-4">Gemini Chat App</h1>
      <MessageList messages={messages} />
      <ChatForm input={input} onChange={setInput} onSend={sendMessage} />
    </main>
  );
};

export default ParentChat;
