import React from 'react';

import './messageList.css';

function MessageList({messages, userName=''}) {
    
    return (
        <div className="message-list">
          { messages?.map((msg,idx) => (
              <div key={idx}>
                {msg.user === 'bot' ? 
                  <span>Botty: </span> : 
                  <span>{userName}: </span>
                }
                <span>{msg.message}</span>
                <br />
              </div>
          ))
          }
        </div>
      );
}

export default MessageList