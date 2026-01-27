// Step1 

import { useState } from "react";

const UseChat= () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ role: "user" | "ai"; text: string }[]>([]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { role: "user" as const, text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
      const data = await response.json();
      setMessages((prev) => [...prev, { role: "ai", text: data.text }]);
    } catch (error) {
      console.error(error);
    }
  };

  return { input, messages, setInput, sendMessage };
}

export default UseChat