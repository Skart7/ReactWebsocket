import React from 'react'

import {Input} from '../../../../ui'

import SendButton from './send'

export default function ChatBottom () {

    const [msg, setMsg] = React.useState('')

    const HandleChangeValue = e => setMsg(e.target.value)

    return (
    <>
        <div className="chat__content--bottom">
            <Input 
                placeholder="type a message"
                variant="outlined"
                fullWidth
                value={msg}
                onChange={HandleChangeValue}
                />
            <SendButton msg={msg} setMsg={setMsg} />
        </div>
    </>
    ) 
}