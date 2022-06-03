import { io } from "socket.io-client"
import React from 'react'

interface Props {
    children: React.ReactNode
}

interface iDefaultState {
    socket: any,
    isOnline: any[],
    SocketAddUser: (currentUser) => void, 
    SocketSendMessage: ({to, from, text}) => void,
    UserOnline: (userid) => void,
}

const DefaultState:iDefaultState = {
    socket: {},
    isOnline: [],
    SocketAddUser: () => {}, 
    SocketSendMessage: () => {}, 
    UserOnline: () => {}, 
}

const SocketContext = React.createContext<iDefaultState>(DefaultState)


export const useSocket = () => {
    return React.useContext(SocketContext)
}

export const SocketProvider = ({children}: Props) => {
    
    const socket = React.useRef(null)

    const [isOnline, setOnline] = React.useState(DefaultState.isOnline)

    React.useEffect(() => {
        socket.current = io('http://localhost:5000')
    }, [])

    const SocketAddUser = (currentUser) => {
        socket.current.emit("addUser", currentUser)
        socket.current.on("getUsers", (users) => {
            setOnline(users)
        })
    }

    const SocketSendMessage = ({to, from, text}) => {
        socket.current.emit("sendMessage", {
            to,
            from,
            text,
        })
    }

    const UserOnline = (userid) => {
        const res = isOnline.find(user => user.userId === userid)
        return res
    }

    const value = {
        socket, 
        SocketAddUser,
        SocketSendMessage,
        isOnline,
        UserOnline
    }

    return (
    <SocketContext.Provider value={value}>
        {children}
    </SocketContext.Provider>
    )
}