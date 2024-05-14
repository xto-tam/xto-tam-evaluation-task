import initSocket from 'socket.io-client';
import { useEffect, useState } from 'react';
import { css } from '@emotion/css';

const socket = initSocket('http://localhost:3000');

const style = css`
  margin: 10px 10px;
`;

export const UserList = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('userActivity', (message) => setMessages(v => [...v, message]));
    socket.on('usersActivities', (messages) => setMessages(messages));
  }, []);

  if (!messages) return null;

  return (
    <div>
      {messages.map((e, i) => (
        <div key={i}>
          <span className={style}>{e.id}</span>
          <span className={style}>{e.url}</span>
        </div>
      ))}
    </div>
  );
}
