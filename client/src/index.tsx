import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import {AuthProvider} from './context/user'
import {ChatProvider} from './context/chat'
import {SocketProvider} from './context/socket'


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <SocketProvider>
    <AuthProvider>
      <ChatProvider>
        <App />
      </ChatProvider>
    </AuthProvider>
  </SocketProvider>
)
