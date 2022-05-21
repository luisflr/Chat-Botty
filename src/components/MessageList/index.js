import React from "react";

import "./messageList.css";

function MessageList({ messages, userName = "" }) {
  return (
    <div className="position-relative">
      <div className="chat-messages p-4">
        {messages?.map((msg, idx) => (
          <div key={idx}>
            {msg.user === "bot" ? (
              <div className="chat-message-left pb-4">
                <div>
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar1.png"
                    className="rounded-circle mr-1"
                    alt="Chris Wood"
                    width="40"
                    height="40"
                  />
                  <div className="text-muted small text-nowrap mt-2">
                    2:33 am
                  </div>
                </div>
                <div className="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
                  <div className="font-weight-bold mb-1">Botty: </div>
                  {msg.message}
                </div>
              </div>
            ) : (
              <div className="chat-message-right pb-4">
                <div>
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar1.png"
                    className="rounded-circle mr-1"
                    alt="Chris Wood"
                    width="40"
                    height="40"
                  />
                  <div className="text-muted small text-nowrap mt-2">
                    2:33 am
                  </div>
                </div>
                <div className="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
                  <div className="font-weight-bold mb-1">{userName}: </div>
                  {msg.message}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MessageList;
