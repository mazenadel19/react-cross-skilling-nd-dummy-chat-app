import MessageItem from "./MessageItem";

export default function MessageList({messages, user}) {
  return (
    <ul className="message-list">
      {messages.map((message, index) => (
        <MessageItem key={index} message={message} user={user} />
      ))}
    </ul>
  );
}
