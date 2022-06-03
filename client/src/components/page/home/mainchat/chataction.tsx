import React from 'react'

import Message from './message'

import {Text} from '../../../ui'

import {useChat} from '../../../../context/chat'
import {useAuth} from '../../../../context/user'

export default function ChatAction () {

    const {messages} = useChat()
    const {user} = useAuth()

    return (
    <>
        <div className="chat__content--action">
        {
            messages.length > 0 ? messages.map((msg, index) => (
                <Message {...msg} key={index} currentUser={user} />
            )) : (
                <div className="chat__content--empty">
                    <Text variant="caption">Write "Hello" to starting</Text>
                </div>
            )
        }
        </div> 
    </>
    )
}