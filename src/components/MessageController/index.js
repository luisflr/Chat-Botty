import React from 'react';

import CustomButton from 'components/CustomButton';
import './messageController.css'

function MessageController({sendMessage, setMessage, message} ) {
  return (
    <div className="message-controller">
      <div className="input-group">
        <input 
          type="text" 
          autoFocus
          value={message}
          className="form-control" 
          placeholder="Ingresa tu mensaje"
          onChange={(e) => {
            setMessage(e.currentTarget.value);
          }}/>
        <CustomButton 
          className="input-group-text"
          actionButton={sendMessage}
          text='Enviar'
          color='success'
        />
      </div>
    </div>
  )
}

export default MessageController