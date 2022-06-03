import React from 'react'
import {format} from 'timeago.js'

import {Text} from '../../../ui'


export default function Message ({
    userid, createdAt, message, currentUser
}) {

    return (
    <>
        {
            userid === currentUser._id ? (
            <div className="chat__content--rightUser">
                <div className="chat__content--blockContent">
                    <Text variant="body2">{message}</Text>
                </div>
                <Text variant="caption" className="timeago">{format(createdAt)}</Text>
            </div>
            ) : (
            <div className="chat__content--leftUser">
                <div className="chat__content--blockContent">
                    <Text variant="body2">{message}</Text>
                </div>
                <Text variant="caption" className="timeago">{format(createdAt)}</Text>
            </div>
            )
        }
    </>
    )
}


