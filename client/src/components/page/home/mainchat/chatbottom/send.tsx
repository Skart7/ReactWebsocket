import React from 'react'
import axios from 'axios'

import {Button} from '../../../../ui'

import {useChat} from '../../../../../context/chat'
import {useAuth} from '../../../../../context/user'
import {useSocket} from '../../../../../context/socket'

function SendButton ({msg, setMsg}) {

    const {room, UploadMessages, SetArrivalData, arrivalMessages, interlocutor} = useChat()
    const {user} = useAuth()
    const {SocketSendMessage, socket} = useSocket()

    React.useEffect(() => {
        socket.current.on("getMessage", (data) => {
            SetArrivalData({ 
                from: data.from, 
                text: data.text, 
                createdAt: new Date() 
            })
        })

    }, [])

    React.useEffect(() => {
        room.members.includes(arrivalMessages.from) 
        && UploadMessages(prev => [...prev, { userid: arrivalMessages.from, message: arrivalMessages.text, createdAt: arrivalMessages.createdAt }])
    }, [arrivalMessages, room])

    const sendMessage = async () => {

        await axios.post('http://localhost:5000/api/message/new', {room: room._id, userid: user._id, message: msg})
        .then(res => {
            if(res.data) {
                UploadMessages(prev => [...prev, res.data])
            }
        })
        .catch(e => console.log(e))

        SocketSendMessage({
            to: interlocutor._id,
            from: user._id,
            text: msg
        })

        setMsg('')
    }

    return (
    <Button variant="contained" onClick={sendMessage}>
        Send
    </Button>
    )
}

export default React.memo(SendButton)