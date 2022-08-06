export default function MessageItem({ message, user }) {
  return (
    <li
      className={
        message.username === user.username
          ? "message sender"
          : "message recipient"
      }
    >
      <p>{`${message.username}: ${message.text}`}</p>
    </li>
  );
}
