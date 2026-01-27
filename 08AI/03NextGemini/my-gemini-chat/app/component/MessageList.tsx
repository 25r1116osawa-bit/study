type Message = {
  role: "user" | "ai";
  text: string;
};

type Props = {
  messages: Message[];
};

const MessageList = ({ messages }: Props) => {
  return (
    <div className="flex-1 overflow-y-auto border p-4 rounded-lg bg-gray-50 space-y-4">
      {messages.map((msg, i) => (
        <div
          key={i}
          className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
        >
          <div
            className={`p-3 rounded-lg max-w-[80%] ${
              msg.role === "user" ? "bg-blue-600 text-white" : "bg-white border text-gray-800"
            }`}
          >
            {msg.text}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageList;
