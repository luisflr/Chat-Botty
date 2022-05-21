import React from "react";

import { useAuth0 } from "@auth0/auth0-react";

import MessageController from "components/MessageController";
import useBotty from "./useBotty";
import MessageList from "components/MessageList";
import CustomButton from "components/CustomButton";

import "./chatBotty.css";
import ConnectedUsers from "components/ConnectedUsers";
import HeaderChat from "components/HeaderChat";

function ChatBotty({ logout }) {
  const { user } = useAuth0();
  const { botTyping, messages, myMessage, sendMessage, setMyMessage } =
    useBotty();

  return (
    <div className="container p-0">
      <h1 className="h3 mb-3">Messages</h1>
      <div className="card">
        <div className="row g-0">
          <ConnectedUsers />

          <div className="col-12 col-lg-7 col-xl-9">
            <div className="py-2 px-4 border-bottom d-none d-lg-block">
              <HeaderChat />
            </div>
            <MessageList messages={messages} userName={user.name} />
            {botTyping && <p>... typing</p>}
            <br />
            <MessageController
              sendMessage={sendMessage}
              setMessage={setMyMessage}
              message={myMessage}
            />
            <br />
          </div>
        </div>
      </div>
      <CustomButton
        actionButton={logout}
        text="Cerrar Sesión"
        color="primary"
      />
    </div>
  );
}

export default ChatBotty;
