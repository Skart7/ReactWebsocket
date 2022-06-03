import React from 'react'
import './header.scss'
import {useNavigate, Link} from "react-router-dom" 

import {Text, Button} from '../ui'

import {useAuth} from '../../context/user'


function Header() {

    const navigate = useNavigate()
    const {user} = useAuth()

    return (
    <>
    <header>
      <div className="header">
          <div className="header__left">
          <Link to="/">
              <Text variant="h4" component="h1">React-App-Chat</Text>
              <Text variant="body1">Real-Time app by Skart</Text>
          </Link>
          </div>
          <div className="header__right">
            {
                !user || !user._id ? (
                <>
                    <Button onClick={() => navigate('/login')}>Login</Button>
                </>
                ) : (
                <>
                    <Button variant="outlined" color="error" onClick={() => navigate('/exit')}>Exit</Button>
                </> 
                )
            }
          </div>
      </div>
    </header>
    </>
    )
}

export default React.memo(Header)