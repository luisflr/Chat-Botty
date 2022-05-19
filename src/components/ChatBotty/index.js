import React from 'react'

import CustomButton from 'components/CustomButton'


function ChatBotty( {logout} ) {
  return (
    <div>
        <h1>Hi my friend!</h1>
        <CustomButton
          actionButton={logout}
          text='Logout'
          color='primary'
        />
    </div>
  )
}

export default ChatBotty