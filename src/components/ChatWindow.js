import ChatBox from "./ChatBox";
import MessageList from "./MessageList";

function ChatWindow({ user, messages, sendMessage }) {
  function addMessage(message) {
    sendMessage(user.username, message);
  }

  return (
    <div className="chat-window">
      <h2>Super Awesome Chat</h2>
      <div className="name sender">{user.username}</div>

      <MessageList messages={messages} user={user} />

      <div>
        <ChatBox sendMessage={addMessage} />
      </div>
    </div>
  );
}

export default ChatWindow;
