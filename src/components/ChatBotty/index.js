import React from 'react';

import { useAuth0 } from '@auth0/auth0-react';

import MessageController from 'components/MessageController';
import useBotty from './useBotty';
import MessageList from 'components/MessageList';
import CustomButton from 'components/CustomButton';

import './chatBotty.css';

function ChatBotty( {logout} ) {

  const {user} = useAuth0();
  const { botTyping, messages, myMessage, sendMessage, setMyMessage,  } = useBotty();

  return (
    <div className='chat-botty'>
      <CustomButton
          actionButton={logout}
          text='Logout'
          color='primary'
        />
        <MessageList messages={messages} userName={user.name}/>
        {botTyping && (<p>... typing</p>)}
        <br/>
        <div style={{bottom: '0'}}>
          <MessageController sendMessage={sendMessage} setMessage={setMyMessage} message={myMessage}/>
        </div>
        <br/>
        
    </div>
  )
}

export default ChatBotty