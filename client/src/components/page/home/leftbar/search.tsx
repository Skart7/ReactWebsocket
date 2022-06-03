import React from 'react'

import {Input} from '../../../ui'

export default function LeftBarSearch () {

    const [searchChat, setSearchChat] = React.useState('')

    return (
    <>
        <Input 
            placeholder="Find chat"
            variant="outlined"
            fullWidth
            value={searchChat}
            onChange={(e) => setSearchChat(e.target.value)}
        />
    </>
    )
}