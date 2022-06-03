import React from 'react'

import {Text} from '../../../ui'

import {useChat} from '../../../../context/chat'
import {useSocket} from '../../../../context/socket'

export default function ChatHeader () {

    const {interlocutor} = useChat()
    const {UserOnline} = useSocket()

    const status:any = UserOnline(interlocutor._id)

    return (
    <>
        <div className="chat__content--header">
            <Text variant="h6">{interlocutor.fname} {interlocutor.lname}</Text>
            <Text variant="caption">
                {status ? "Online" : "Offline"}
            </Text>
        </div>
    </>
    )
}