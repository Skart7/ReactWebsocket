import React from 'react'

interface iInterlocutor {
    _id: string,
    email: string,
    fname: string,
    lname: string,
    userIntro: string,
}

interface iChat {
    messages: any[],
    arrivalMessages: { from: string, createdAt: string, text: string },
    room: { _id: string, members: any[] },
    interlocutor: iInterlocutor,
    UploadMessages: (data:any) => void,
    SetInterlocutorData: (data:any) => void,
    SetRoomData: (data:any) => void,
    SetArrivalData: ({from, text, createdAt}) => void
}

type Props = {
    children: React.ReactNode
}

const DefaultChatState:iChat = {
    messages: [],
    arrivalMessages: { from: null, createdAt: null, text: null },
    UploadMessages: () => {},
    interlocutor: { _id: null, email: null, userIntro: "U", fname: null, lname: null},
    SetInterlocutorData: () => {},
    room: { _id: null, members: [] },
    SetRoomData: () => {},
    SetArrivalData: () => {}
}

const AuthContext = React.createContext<iChat>(DefaultChatState)

export function useChat() {
    return React.useContext(AuthContext)
}

export function ChatProvider({children}:Props ) {

    const [messages, setMessages] = React.useState(DefaultChatState.messages)
    const [interlocutor, setInterlocutor] = React.useState(DefaultChatState.interlocutor)
    const [room, setRoom] = React.useState(DefaultChatState.room)
    const [arrivalMessages, setArrivalMessages] = React.useState(DefaultChatState.arrivalMessages)

    const UploadMessages = (data) => setMessages(data)
    const SetInterlocutorData = (data) => setInterlocutor(data)
    const SetRoomData = (data) => setRoom(data)
    const SetArrivalData = ({from, text, createdAt}) => setArrivalMessages({from, text, createdAt})

    const value = {
        messages, UploadMessages, interlocutor, SetInterlocutorData, room, SetRoomData, arrivalMessages, SetArrivalData
    }

    return (
    <>
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </>
    )

}
