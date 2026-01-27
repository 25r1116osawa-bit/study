type Props = {
  input: string;
  onChange: (value: string) => void;
  onSend: () => void;
};

const ChatForm = ({ input, onChange, onSend }: Props) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSend();
      }}
      className="mt-4 flex gap-2"
    >
      <input
        className="flex-1 border p-2 rounded text-black"
        placeholder="メッセージを入力..."
        value={input}
        onChange={(e) => onChange(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        送信
      </button>
    </form>
  );
};

export default ChatForm;
