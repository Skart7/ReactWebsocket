import React from 'react'
import LeftBarChat from './chat'
import axios from 'axios'

import { Text } from '../../../ui'

import {useAuth} from '../../../../context/user'

export default function WrapperChat() {

  const [chats, setChats] = React.useState([])

  const {user} = useAuth()

  React.useEffect(() => {
    async function getRooms() {
      await axios.post('http://localhost:5000/api/room/get', {userid: user._id})
      .then(res => {
        if(res.data) {
          setChats(res.data)
        }
      })
      .catch(e => console.log(e))
    }
    
    if(user) {
      getRooms()
    }

  }, [user])

  return (
    <div className="leftbar__chatWrapper">
        {
          chats.length > 0 ? chats.map( (chat, index) => (
            <LeftBarChat key={index} {...chat} currentUser={user} />
          )) : (
            <div style={{ textAlign: 'center' }}>
              <Text variant="caption" component="p">You don`t have an new chats</Text>
            </div>
          )
        }
    </div>
  )
}
