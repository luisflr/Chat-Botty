import {useState, useCallback, useEffect} from "react";

import { initialMessages, newSocket } from './constants';

const useBotty = () => {

  const [botTyping, setBotTyping] = useState(false)
  const [myMessage, setMyMessage] = useState('')
  const [messages, setMessages] = useState([
      {
        user: 'bot',
        message: initialMessages.bot,
      },
    ]);

  useEffect(() => {
    newSocket.on('bot-typing', () => {
        setBotTyping(true)
      });

    newSocket.on('bot-message', (message) => {
      setLatestMessage('bot', message)
      setBotTyping(false)
    });
    
  }, []);

  const sendMessage = () => {
    setLatestMessage('me', myMessage)
    newSocket.emit('user-message', myMessage)
    setMyMessage('')
    
  }

  const setLatestMessage = useCallback(
    (userId, message) => {
      return setMessages((prev) => {
        return [
          ...prev,
          {
            user: userId,
            message,
          },
        ];
      });
    },
    []
  );

  return { botTyping, messages, myMessage, sendMessage, setMyMessage }
}

export default useBotty;