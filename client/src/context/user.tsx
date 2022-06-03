import React from 'react'

interface iUser {
    user: {
        fname: string,
        lname: string,
        email: string,
        userIntro: string,
        _id: string
    }, 
    SetUserData: (e:any) => void
    SetUserToStorage: (e:any) => void
}

type Props = {
    children: React.ReactNode
}

const DefaultUserStore:iUser = {
    user: {
        fname: null,
        lname: null,
        email: null,
        userIntro: null,
        _id: null
    }, 
    SetUserData: () => {},
    SetUserToStorage: () => {}
}

const AuthContext = React.createContext<iUser>(DefaultUserStore)

export function useAuth() {
    return React.useContext(AuthContext)
}


    const getUserFromStorage = () => {
        if(typeof window !== 'undefined') {
            const storage = JSON.parse(window.localStorage.getItem("user"))

            if(storage) {
                return storage
            }
            return DefaultUserStore.user
        }
    }


export function AuthProvider({children}:Props ) {

    const [user, setUser] = React.useState()

    const SetUserData = (data) => setUser(data)

    const SetUserToStorage = (data) => {
        window.localStorage.setItem('user', JSON.stringify(data))
    }

    React.useEffect(() => {
       let userInit = getUserFromStorage()

        if(userInit._id) {
            SetUserData(userInit)
        }
    }, [])

    const value = {
        user, SetUserData, SetUserToStorage
    }

    return (
    <>
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </>
    )

}
