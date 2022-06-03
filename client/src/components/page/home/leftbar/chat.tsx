import React from 'react'
import axios from 'axios'

import {Avatar, Paper, Text} from '../../../ui'

import {useChat} from '../../../../context/chat'

export default function LeftBarChat({members, currentUser, _id}) {

  const {UploadMessages, SetInterlocutorData, interlocutor, SetRoomData} = useChat()

  React.useEffect(() => {

    async function getInterlocutor() {
      const interlocutor = members.find(u => u !== currentUser._id)

      await axios.post('http://localhost:5000/api/user/interlocutor', { interlocutor })
      .then(res => {
        if(res.data) {
          SetInterlocutorData(res.data)
        }
      })
      .catch(e => console.log(e))
    }
    getInterlocutor()

  }, [])

  const OpenChat = async () => {
    await axios.post('http://localhost:5000/api/message/chat', {roomid: _id})
    .then(res => {
      if(res.data) {
        UploadMessages(res.data)
        SetRoomData({ _id, members })
      }
    })
    .catch(e => console.log(e)) 
  } 

  return (
    <Paper className="leftbar__chatHistory" onClick={OpenChat}>
      <div className="leftbar__chatHistory--avatarBlock">
          <Avatar variant="standard" color="primary" size="medium">{interlocutor.userIntro || "U"}</Avatar>
      </div>
      <div className="leftbar__chatHistory--contentBlock">
          <Text variant="h6" className="leftbar__chatHistory--title">
            {interlocutor.fname} {interlocutor.lname}
          </Text>
          <Text variant="body2" className="leftbar__chatHistory--text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, quam!
          </Text>
      </div>
    </Paper>
  )
}
