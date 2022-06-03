import React from 'react'


import ChatBottom from './chatbottom'
import ChatAction from './chataction'
import ChatHeader from './chatheader'

import {useChat} from '../../../../context/chat'
import {useAuth} from '../../../../context/user'
import {useSocket} from '../../../../context/socket'

import './mainchat.scss'

import { Paper, Text } from '../../../ui'

function ChatContent() {

  const {messages, room} = useChat()
  const {user} = useAuth()
  const {SocketAddUser} = useSocket()

  React.useEffect(() => {
    if(user && user._id) {
      SocketAddUser(user._id)
    }
  }, [user])


  return (
    <Paper className="chat__content">
      {
        room._id ? (
        <>
          <div className="chat__content--wrapper">
            <ChatHeader/>
            <ChatAction />
          </div>
          <ChatBottom/>
        </>
        ) : (
          <div className="chat__content--empty">
            <Text variant="caption">Open chat to starting</Text>
        </div>
        )
      }
    </Paper>
  )
}

export default React.memo(ChatContent)